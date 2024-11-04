import type { Node, Position } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;

export type CustomSquareNodeData = {
  label: string;
  iconName: string;
  iconType: 'lucide' | 'radix';
  sourcePosition?: Position;
  targetPosition?: Position;
};

export type CustomSquareNode = Node<CustomSquareNodeData, 'custom-square'>;
export type AppNode = PositionLoggerNode | CustomSquareNode;
