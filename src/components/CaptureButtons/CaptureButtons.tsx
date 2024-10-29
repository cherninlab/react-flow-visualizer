import html2canvas from 'html2canvas';
import { Button } from '@/components/Button';
import styles from './CaptureButtons.module.css';

export const CaptureButtons = () => {
  const handleScreenshot = async () => {
    const canvasElement = document.querySelector('.react-flow__pane');
    if (!canvasElement) return;

    const canvas = await html2canvas(canvasElement as HTMLElement, {
      backgroundColor: null,
      scale: 1,
    });
    const dataURL = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'diagram.png';
    link.click();
  };

  const handleCaptureVideo = () => {
    alert('Video capture is not implemented yet.');
  };

  return (
    <div className={styles.buttonsContainer}>
      <Button onClick={handleScreenshot}>Capture Screenshot</Button>
      <Button onClick={handleCaptureVideo}>Capture Video/GIF</Button>
    </div>
  );
};

export default CaptureButtons;
