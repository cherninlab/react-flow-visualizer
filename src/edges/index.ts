import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'a->c', source: 'a', target: 'c', type: 'smoothstep', animated: true },
  { id: 'b->d', source: 'b', target: 'd', type: 'smoothstep',},
  { id: 'c->d', source: 'c', target: 'd', type: 'smoothstep', animated: true },
];

export const edgeTypes = {
} satisfies EdgeTypes;
