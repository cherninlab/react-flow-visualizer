# React Flow Visualizer

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.12-blue.svg)](https://vitejs.dev/)
[![Live Demo](https://img.shields.io/badge/🚀-Live_Demo-green.svg)](https://react-flow-visualizer.pages.dev/)

A powerful and flexible React application for creating interactive system architecture diagrams and workflow visualizations using React Flow. Built with React, TypeScript, and Vite.

![alt text](example.gif)

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/cherninlab/react-flow-visualizer.git

# Navigate to project directory
cd react-flow-visualizer

# Install dependencies
npm install

# Start development server
npm run dev
```

## Documentation

### API Reference

#### Node Types

```typescript
interface CustomSquareNodeData {
  label: string;
  iconName: string;
  iconType: 'lucide' | 'radix' | 'local';
  sourcePosition?: Position;
  targetPosition?: Position;
}
```

## Advanced Configuration

### Custom Theme Creation

1. Create a new CSS file in `src/themes/`:

```css
.react-flow[data-theme='your-theme'] {
  --icon-size: 48px;
  --margin: 16px;
  /* Add more variables */
}
```

2. Register in `ThemeSelector.tsx`:

```typescript
const themes = [
  { value: 'default', label: 'Default' },
  { value: 'your-theme', label: 'Your Theme' },
];
```

## Troubleshooting

### Common Issues

1. **Node Icons Not Loading**

   ```bash
   # Check if icons are in the correct directory
   public/icons/
   ```

## Contributing

We welcome contributions!

## License

This project is licensed under the MIT License

## Acknowledgments

- [React Flow](https://reactflow.dev/) for the core functionality
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editing experience
