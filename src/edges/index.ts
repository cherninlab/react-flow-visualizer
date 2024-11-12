import type { Edge, EdgeTypes } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';

export const defaultMarkerEnd = {
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
  color: '#fff',
};

export const initialEdges: Edge[] = [
  // Frontend to Services
  {
    id: 'react-api',
    source: 'react',
    target: 'api-gateway',
    type: 'smoothstep',
    markerEnd: defaultMarkerEnd,
  },
  {
    id: 'react-state',
    source: 'react',
    target: 'state-management',
    type: 'smoothstep',
    markerEnd: defaultMarkerEnd,
  },
  {
    id: 'api-auth',
    source: 'api-gateway',
    target: 'auth',
    type: 'smoothstep',
    markerEnd: defaultMarkerEnd,
  },

  // Backend Connections
  {
    id: 'api-db',
    source: 'api-gateway',
    target: 'database',
    type: 'smoothstep',
    markerEnd: defaultMarkerEnd,
  },
  {
    id: 'state-cache',
    source: 'state-management',
    target: 'cache',
    type: 'smoothstep',
    markerEnd: defaultMarkerEnd,
  },
];

export const edgeTypes = {} satisfies EdgeTypes;
