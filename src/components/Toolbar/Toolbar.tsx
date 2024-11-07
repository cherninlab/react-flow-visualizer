import React, { useState } from 'react';
import styles from './Toolbar.module.css';
import { Button } from '@/components/Button';
import {
  useReactFlow,
  getNodesBounds,
  getViewportForBounds,
} from '@xyflow/react';
import { toPng } from 'html-to-image';

interface ToolbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Toolbar = ({ theme, setTheme }: ToolbarProps) => {
  const [width, setWidth] = useState(1920); // Default image width
  const [height, setHeight] = useState(1080); // Default image height
  const [preset, setPreset] = useState('');

  // Presets
  const presets = [
    { name: 'Instagram Post', width: 1080, height: 1080 },
    { name: 'Twitter Post', width: 1200, height: 675 },
    { name: 'Slide 16:9', width: 1920, height: 1080 },
    { name: 'Stories 9:16', width: 1080, height: 1920 },
  ];

  // Handle preset change
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

  // Handle manual width and height changes
  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(e.target.value) || 0;
    setWidth(newWidth);
    setPreset(''); // Reset preset if custom size is entered
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(e.target.value) || 0;
    setHeight(newHeight);
    setPreset(''); // Reset preset if custom size is entered
  };

  // Handle theme change
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  // Access React Flow instance
  const { getNodes } = useReactFlow();

  // Handle Save Image
  const handleSaveImage = async () => {
    const nodes = getNodes();
    if (!nodes || nodes.length === 0) {
      alert('No nodes to export');
      return;
    }

    // Calculate the bounds of all nodes
    const nodesBounds = getNodesBounds(nodes);

    // Define the desired image dimensions
    const imageWidth = width;
    const imageHeight = height;

    // Calculate the viewport for the bounds
    const viewport = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.1, // minZoom
      3,    // maxZoom
      0.1 // padding (10% padding)
    );

    // Select the viewport element
    const viewportElement = document.querySelector('.react-flow__viewport');
    if (!viewportElement) return;

    // Use html-to-image to generate the image
    toPng(viewportElement as HTMLElement, {
      backgroundColor: 'transparent', // Use transparent or specify a color
      width: imageWidth,
      height: imageHeight,
      style: {
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
        // 'transform-origin': '0 0',
      },
    })
      .then((dataUrl) => {
        // Create a link and trigger download
        const link = document.createElement('a');
        link.setAttribute('download', 'diagram.png');
        link.setAttribute('href', dataUrl);
        link.click();
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  };

  // Handle Save Video
  const handleSaveVideo = () => {
    alert('Save Video functionality is not implemented yet.');
  };

  return (
    <div className={styles.toolbar}>
      {/* Width and Height Inputs */}
      <input
        type="number"
        value={width}
        onChange={handleWidthChange}
        className={styles.sizeInput}
      />
      <span className={styles.multiply}>×</span>
      <input
        type="number"
        value={height}
        onChange={handleHeightChange}
        className={styles.sizeInput}
      />

      {/* Preset Selector */}
      <select
        value={preset}
        onChange={handlePresetChange}
        className={styles.select}
      >
        <option value="" disabled>
          {preset || 'Preset'}
        </option>
        {presets.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Theme Selector */}
      <select
        value={theme}
        onChange={handleThemeChange}
        className={styles.select}
      >
        <option value="default">Default Style</option>
        <option value="bold">Bold Style</option>
        <option value="greyscale">Greyscale Style</option>
      </select>

      {/* Save Image and Save Video Buttons */}
      <Button onClick={handleSaveImage}>Save Image</Button>
      <Button onClick={handleSaveVideo}>Save Video</Button>
    </div>
  );
};

export default Toolbar;
