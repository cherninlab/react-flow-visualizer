import { Position } from '@xyflow/react';
import { AppNode } from './types';

const getGridPosition = (col: number, row: number) => ({
  x: col * 160,
  y: row * 160,
});

export const initialNodes: AppNode[] = [
  {
    id: 'react',
    type: 'custom-square',
    position: getGridPosition(2, 0),
    data: {
      label: 'React Frontend',
      iconName: 'CodeIcon',
      iconType: 'radix',
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  },
  {
    id: 'state-management',
    type: 'custom-square',
    position: getGridPosition(1, 1),
    data: {
      label: 'State Management',
      iconName: 'LayersIcon',
      iconType: 'radix',
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
    },
  },
  {
    id: 'api-gateway',
    type: 'custom-square',
    position: getGridPosition(2, 2),
    data: {
      label: 'API Gateway',
      iconName: 'Router',
      iconType: 'lucide',
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  },
  {
    id: 'auth',
    type: 'custom-square',
    position: getGridPosition(2, 4),
    data: {
      label: 'Authentication',
      iconName: 'LockClosedIcon',
      iconType: 'radix',
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  },
  {
    id: 'database',
    type: 'custom-square',
    position: getGridPosition(3, 4),
    data: {
      label: 'Database',
      iconName: 'Database',
      iconType: 'lucide',
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  },
  {
    id: 'cache',
    type: 'custom-square',
    position: getGridPosition(-0.5, 1),
    data: {
      label: 'Cache Layer',
      iconName: 'Zap',
      iconType: 'lucide',
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
    },
  },
];
