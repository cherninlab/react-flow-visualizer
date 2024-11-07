import { CanvasSizeControls } from '@/components/CanvasSizeControls';
import { CaptureButtons } from '@/components/CaptureButtons';
import { CodeEditor } from '@/components/CodeEditor';
import {
  Controls,
  OnConnect,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import { useState } from 'react';
import styles from './App.module.css';

import '@xyflow/react/dist/style.css';

import { edgeTypes, initialEdges } from './edges';
import { initialNodes, nodeTypes } from './nodes';

const GRID_SIZE = 20; // Base grid size

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [canvasSize, setCanvasSize] = useState({ width: 1600, height: 1200 }); // Larger default size

  const onConnect: OnConnect = (connection) => setEdges((eds) =>
    addEdge({ ...connection, type: 'smoothstep' }, eds)
  );

  return (
    <div className={styles.app}>
      <div className={styles.codeEditor}>
        <CodeEditor nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} />
      </div>
      <div className={styles.canvasArea}>
        <CanvasSizeControls canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
        <div
          className={styles.canvasWrapper}
          style={{ width: canvasSize.width, height: canvasSize.height }}
        >
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            edges={edges}
            edgeTypes={edgeTypes}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            colorMode="dark"
            snapToGrid={true}
            snapGrid={[GRID_SIZE, GRID_SIZE]}
            fitView
            style={{ width: '100%', height: '100%' }}
          >
            <Controls />
            <CaptureButtons />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
