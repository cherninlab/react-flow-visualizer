import { useState } from 'react';
import {
  ReactFlow,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  OnConnect,
} from '@xyflow/react';
import { CodeEditor } from '@/components/CodeEditor';
import { CanvasSizeControls } from '@/components/CanvasSizeControls';
import { CaptureButtons } from '@/components/CaptureButtons';
import styles from './App.module.css';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  const onConnect: OnConnect = (connection) =>
    setEdges((eds) => addEdge(connection, eds));

  return (
    <div className={styles.app}>
      <div className={styles.codeEditor}>
        <CodeEditor
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
        />
      </div>
      <div className={styles.canvasArea}>
        <CanvasSizeControls
          canvasSize={canvasSize}
          setCanvasSize={setCanvasSize}
        />
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
