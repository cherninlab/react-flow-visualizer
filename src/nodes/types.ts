import type { Node } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;

export type IconType = 'lucide' | 'radix' | 'local';

export type CustomSquareNodeData = {
  label: string;
  iconName: string;
  iconType: IconType;
};

export type CustomSquareNode = Node<CustomSquareNodeData, 'custom-square'>;
export type AppNode = PositionLoggerNode | CustomSquareNode;
