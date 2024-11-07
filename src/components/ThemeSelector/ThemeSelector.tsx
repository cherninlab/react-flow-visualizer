import React from 'react';

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <div>
      <label htmlFor="theme-selector">Theme:</label>
      <select id="theme-selector" value={theme} onChange={handleThemeChange}>
        <option value="default">Default</option>
        <option value="bold">Bold</option>
        <option value="greyscale">Greyscale</option>
      </select>
    </div>
  );
};