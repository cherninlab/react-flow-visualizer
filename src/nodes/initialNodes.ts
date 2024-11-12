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
      iconName: 'react',
      iconType: 'local',
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
      iconName: 'redux',
      iconType: 'local',
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
      iconName: 'Network',
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
      iconName: 'auth0',
      iconType: 'local',
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
      iconName: 'mongodb',
      iconType: 'local',
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
      iconName: 'redis',
      iconType: 'local',
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
    },
  },
  {
    id: 'deployment',
    type: 'custom-square',
    position: getGridPosition(3, 2),
    data: {
      label: 'Deployment',
      iconName: 'Cloud',
      iconType: 'lucide',
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
    },
  },
];
