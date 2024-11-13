import { NodeProps } from '@xyflow/react';
import styles from './LabeldGroupNode.module.css';
import { type LabeldGroupNode } from './types';

export function LabeldGroupNode({ data }: NodeProps<LabeldGroupNode>) {
  return (
    <div className={styles.groupNode}>
      <div className={styles.groupLabel}>{data.label}</div>
    </div>
  );
}
