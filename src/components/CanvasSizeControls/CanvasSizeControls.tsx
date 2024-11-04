import { Button } from '@/components/Button';
import styles from './CanvasSizeControls.module.css';

interface CanvasSize {
  width: number;
  height: number;
}

interface Preset {
  name: string;
  width: number;
  height: number;
}

interface CanvasSizeControlsProps {
  canvasSize: CanvasSize;
  setCanvasSize: (size: CanvasSize) => void;
}

export const CanvasSizeControls = ({ canvasSize, setCanvasSize }: CanvasSizeControlsProps) => {
  const presets: Preset[] = [
    { name: 'Instagram Post', width: 1080, height: 1080 },
    { name: 'Twitter Post', width: 1200, height: 675 },
    { name: 'Slide 16:9', width: 1920, height: 1080 },
  ];

  const handlePresetClick = (preset: Preset) => {
    setCanvasSize({ width: preset.width, height: preset.height });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sizeInput}>
        <label>
          Width:
          <input
            type="number"
            value={canvasSize.width}
            onChange={(e) => setCanvasSize({ ...canvasSize, width: parseInt(e.target.value) || 0 })}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={canvasSize.height}
            onChange={(e) =>
              setCanvasSize({ ...canvasSize, height: parseInt(e.target.value) || 0 })
            }
          />
        </label>
      </div>
      <div className={styles.presets}>
        {presets.map((preset) => (
          <Button key={preset.name} onClick={() => handlePresetClick(preset)}>
            {preset.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
