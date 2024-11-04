import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  // Frontend to Services
  {
    id: 'react-api',
    source: 'react',
    target: 'api-gateway',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'react-state',
    source: 'react',
    target: 'state-management',
    type: 'smoothstep',
  },
  {
    id: 'api-auth',
    source: 'api-gateway',
    target: 'auth',
    type: 'smoothstep',
  },

  // Backend Connections
  {
    id: 'api-db',
    source: 'api-gateway',
    target: 'database',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'state-cache',
    source: 'state-management',
    target: 'cache',
    type: 'smoothstep',
    animated: true,
  },
];

export const edgeTypes = {} satisfies EdgeTypes;
