import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  // Frontend Layer
  {
    id: 'react',
    type: 'custom-square',
    position: { x: 400, y: 0 },
    data: {
      label: 'React Frontend',
      iconName: 'react',
      iconType: 'local',
    },
  },
  // State & Cache Layer
  {
    id: 'state-management',
    type: 'custom-square',
    position: { x: 200, y: 240 },
    data: {
      label: 'State Management',
      iconName: 'redux',
      iconType: 'local',
    },
  },
  {
    id: 'cache',
    type: 'custom-square',
    position: { x: 0, y: 240 },
    data: {
      label: 'Cache Layer',
      iconName: 'redis',
      iconType: 'local',
    },
  },
  // API & Deployment Layer
  {
    id: 'api-gateway',
    type: 'custom-square',
    position: { x: 400, y: 240 },
    data: {
      label: 'API Gateway',
      iconName: 'Network',
      iconType: 'lucide',
    },
  },
  {
    id: 'deployment',
    type: 'custom-square',
    position: { x: 600, y: 240 },
    data: {
      label: 'Deployment',
      iconName: 'Cloud',
      iconType: 'lucide',
    },
  },
  // Backend Services Layer
  {
    id: 'auth',
    type: 'custom-square',
    position: { x: 300, y: 480 },
    data: {
      label: 'Authentication',
      iconName: 'auth0',
      iconType: 'local',
    },
  },
  {
    id: 'database',
    type: 'custom-square',
    position: { x: 500, y: 480 },
    data: {
      label: 'Database',
      iconName: 'mongodb',
      iconType: 'local',
    },
  },
];
