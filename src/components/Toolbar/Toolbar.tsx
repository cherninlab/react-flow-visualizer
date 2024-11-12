import { Button } from '@/components/Button';
import { getNodesBounds, getViewportForBounds, Panel, useReactFlow } from '@xyflow/react';
import { toSvg } from 'html-to-image';
import React, { useState } from 'react';
import styles from './Toolbar.module.css';

interface ToolbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Toolbar = ({ theme, setTheme }: ToolbarProps) => {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [preset, setPreset] = useState('');

  const { getNodes } = useReactFlow();

  const presets = [
    { name: 'Instagram Post', width: 1080, height: 1080 },
    { name: 'Twitter Post', width: 1200, height: 675 },
    { name: 'Slide 16:9', width: 1920, height: 1080 },
    { name: 'Stories 9:16', width: 1080, height: 1920 },
  ];

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPreset = presets.find((p) => p.name === e.target.value);
    if (selectedPreset) {
      setWidth(selectedPreset.width);
      setHeight(selectedPreset.height);
      setPreset(selectedPreset.name);
    } else {
      setPreset('');
    }
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(e.target.value) || 0;
    setWidth(newWidth);
    setPreset('');
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(e.target.value) || 0;
    setHeight(newHeight);
    setPreset('');
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleSaveSVG = async () => {
    const nodes = getNodes();
    if (!nodes.length) {
      alert('No nodes to export');
      return;
    }

    try {
      // Get the flow container
      const flowElement = document.querySelector('.react-flow');
      if (!flowElement) return;

      // Calculate bounds and viewport
      const nodesBounds = getNodesBounds(nodes);
      const viewport = getViewportForBounds(nodesBounds, width, height, 0.5, 2, 0.1);

      const exportOptions = {
        backgroundColor: 'transparent',
        width,
        height,
        style: {
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
        },
        filter: (node: HTMLElement) => {
          // Exclude UI elements and temporary overlays
          const exclusions = [
            'react-flow__minimap',
            'react-flow__controls',
            'react-flow__panel',
            'react-flow__attribution',
            'toolbar',
          ];
          const result = !exclusions.some((className) => node.classList?.contains(className));
          return result;
        },
        preferredFontFormat: 'woff2' as const,
        imagePlaceholder: undefined,
        pixelRatio: window.devicePixelRatio || 1,
        skipFonts: false,
        quality: 1,
        cacheBust: true,
      };

      const dataUrl = await toSvg(flowElement as HTMLElement, exportOptions);

      // Create download link
      const link = document.createElement('a');
      link.download = 'flow-diagram.svg';
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating SVG:', error);
    }
  };

  return (
    <Panel position="top-left" className={styles.toolbar}>
      <input
        type="number"
        value={width}
        onChange={handleWidthChange}
        className={styles.sizeInput}
        aria-label="Width"
      />
      <span className={styles.multiply}>×</span>
      <input
        type="number"
        value={height}
        onChange={handleHeightChange}
        className={styles.sizeInput}
        aria-label="Height"
      />

      <select value={preset} onChange={handlePresetChange} className={styles.select}>
        <option value="" disabled>
          {preset || 'Preset'}
        </option>
        {presets.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <select value={theme} onChange={handleThemeChange} className={styles.select}>
        <option value="default">Default Style</option>
        <option value="bold">Bold Style</option>
        <option value="greyscale">Greyscale Style</option>
      </select>

      <Button onClick={handleSaveSVG}>⤓ .svg</Button>
    </Panel>
  );
};

export default Toolbar;
