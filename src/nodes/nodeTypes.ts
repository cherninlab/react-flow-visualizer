import type { NodeTypes } from '@xyflow/react';
import { CustomSquareNode } from './CustomSquareNode';
import { PositionLoggerNode } from './PositionLoggerNode';

export const nodeTypes: NodeTypes = {
  'position-logger': PositionLoggerNode,
  'custom-square': CustomSquareNode,
};
