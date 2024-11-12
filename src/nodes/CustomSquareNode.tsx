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
  const isConnecting = !!nodeId;

  // Helper function to check if a handle has connections
  const hasConnections = (handleId: string) => {
    return edges.some(
      (edge: any) =>
        (edge.sourceHandle === handleId && edge.source === id) ||
        (edge.targetHandle === handleId && edge.target === id),
    );
  };

  // Handle definitions with their positions and IDs
  const handles = [
    // Top handles
    { id: 'top-l', position: Position.Top, x: '25%' },
    { id: 'top-c', position: Position.Top, x: '50%' },
    { id: 'top-r', position: Position.Top, x: '75%' },
    // Right handles
    { id: 'right-t', position: Position.Right, y: '25%' },
    { id: 'right-c', position: Position.Right, y: '50%' },
    { id: 'right-b', position: Position.Right, y: '75%' },
    // Bottom handles
    { id: 'bottom-l', position: Position.Bottom, x: '25%' },
    { id: 'bottom-c', position: Position.Bottom, x: '50%' },
    { id: 'bottom-r', position: Position.Bottom, x: '75%' },
    // Left handles
    { id: 'left-t', position: Position.Left, y: '25%' },
    { id: 'left-c', position: Position.Left, y: '50%' },
    { id: 'left-b', position: Position.Left, y: '75%' },
  ];

  const renderIcon = () => {
    if (data.iconType === 'local') {
      return <img src={`/icons/${data.iconName}.svg`} alt={data.label} className={styles.logo} />;
    } else {
      const LucideIconComponent =
        (LucideIcons as Record<string, any>)[data.iconName] || LucideIcons.Square;
      const RadixIconComponent =
        (RadixIcons as Record<string, any>)[data.iconName] || RadixIcons.SquareIcon;
      const IconComponent = data.iconType === 'radix' ? RadixIconComponent : LucideIconComponent;

      return <IconComponent className={styles.icon} />;
    }
  };

  return (
    <div className={styles.node}>
      <div className={styles.container}>
        {handles.map((handle) => (
          <Handle
            key={handle.id}
            id={handle.id}
            type="source"
            position={handle.position}
            style={{
              left: handle.x,
              top: handle.y,
            }}
            className={`${styles.handle} ${
              hasConnections(handle.id) || isConnecting ? styles.visible : ''
            }`}
          />
        ))}
        {handles.map((handle) => (
          <Handle
            key={`target-${handle.id}`}
            id={`target-${handle.id}`}
            type="target"
            position={handle.position}
            style={{
              left: handle.x,
              top: handle.y,
            }}
            className={`${styles.handle} ${
              hasConnections(`target-${handle.id}`) || isConnecting ? styles.visible : ''
            }`}
          />
        ))}

        {renderIcon()}
        <div className={styles.label}>{data.label}</div>
      </div>
    </div>
  );
}
