import * as RadixIcons from '@radix-ui/react-icons';
import { Handle, Position, useStore, type NodeProps } from '@xyflow/react';
import * as LucideIcons from 'lucide-react';

import styles from './CustomSquareNode.module.css';
import { type CustomSquareNode } from './types';

const connectionNodeIdSelector = (state: any) => ({
  nodeId: state.connectionNodeId,
  edges: state.edges,
});

export function CustomSquareNode({ id, data }: NodeProps<CustomSquareNode>) {
  const { nodeId, edges } = useStore(connectionNodeIdSelector);

  // Get all connections for this node
  const sourceConnections = edges.filter((edge: any) => edge.source === id);
  const targetConnections = edges.filter((edge: any) => edge.target === id);

  const isConnecting = !!nodeId;

  const LucideIconComponent =
    (LucideIcons as Record<string, any>)[data.iconName] || LucideIcons.Square;
  const RadixIconComponent =
    (RadixIcons as Record<string, any>)[data.iconName] || RadixIcons.SquareIcon;

  const IconComponent = data.iconType === 'radix' ? RadixIconComponent : LucideIconComponent;

  return (
    <div className={styles.node}>
      <div className={styles.container}>
        <Handle
          type="target"
          position={data.targetPosition || Position.Top}
          className={`${styles.handle} ${targetConnections.length > 0 || isConnecting ? styles.visible : ''}`}
        />
        <Handle
          type="source"
          position={data.sourcePosition || Position.Bottom}
          className={`${styles.handle} ${sourceConnections.length > 0 || isConnecting ? styles.visible : ''}`}
        />

        <IconComponent className={styles.icon} />
        <div className={styles.label}>{data.label}</div>
      </div>
    </div>
  );
}
