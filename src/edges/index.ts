import type { Edge, EdgeTypes } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';

const COLORS = {
  dataFlow: '#22c55e',
  stateManagement: '#3b82f6',
  authentication: '#f97316',
  deployment: '#8b5cf6',
};

const createMarkerEnd = (color: string) => ({
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
  color: color,
});

export const initialEdges: Edge[] = [
  // Frontend to API Gateway (Main Data Flow)
  {
    id: 'react-api',
    source: 'react',
    sourceHandle: 'bottom-c',
    target: 'api-gateway',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.dataFlow),
    style: { stroke: COLORS.dataFlow },
  },
  // State Management Flow
  {
    id: 'react-state',
    source: 'react',
    sourceHandle: 'bottom-l',
    target: 'state-management',
    targetHandle: 'target-top-r',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.stateManagement),
    style: { stroke: COLORS.stateManagement },
  },
  {
    id: 'state-cache',
    source: 'state-management',
    sourceHandle: 'left-c',
    target: 'cache',
    targetHandle: 'target-right-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.stateManagement),
    style: { stroke: COLORS.stateManagement },
  },
  // Authentication Flow
  {
    id: 'api-auth',
    source: 'api-gateway',
    sourceHandle: 'bottom-l',
    target: 'auth',
    targetHandle: 'target-top-r',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.authentication),
    style: { stroke: COLORS.authentication },
  },
  // Data Storage Flow
  {
    id: 'api-db',
    source: 'api-gateway',
    sourceHandle: 'bottom-r',
    target: 'database',
    targetHandle: 'target-top-l',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.dataFlow),
    style: { stroke: COLORS.dataFlow },
  },
  // Deployment Flow
  {
    id: 'api-deployment',
    source: 'api-gateway',
    sourceHandle: 'right-c',
    target: 'deployment',
    targetHandle: 'target-left-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.deployment),
    style: { stroke: COLORS.deployment },
  },
];

export const edgeTypes = {} satisfies EdgeTypes;
