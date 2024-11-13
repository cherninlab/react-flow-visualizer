import type { Node } from '@xyflow/react';

export type IconType = 'lucide' | 'radix' | 'local';

export type CustomSquareNodeData = {
  label: string;
  iconName: string;
  iconType: IconType;
};

export type LabeldGroupNodeData = {
  label: string;
};

export type CustomSquareNode = Node<CustomSquareNodeData, 'custom-square'>;
export type LabeldGroupNode = Node<LabeldGroupNodeData, 'labeld-group'>;

export type AppNode = CustomSquareNode | LabeldGroupNode;
