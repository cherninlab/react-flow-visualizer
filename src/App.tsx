import { CodeEditor } from '@/components/CodeEditor';
import { Toolbar } from '@/components/Toolbar';
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
  const [theme, setTheme] = useState('default'); // State to hold the current theme

  const onConnect: OnConnect = (connection) => setEdges((eds) =>
    addEdge({ ...connection, type: 'smoothstep' }, eds)
  );

  return (
    <div className={styles.app}>
      <div className={styles.codeEditor}>
        <CodeEditor nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} />
      </div>
      <div className={styles.canvasArea}>
        {/* Add Toolbar */}
        {/* <CanvasSizeControls canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
        <ThemeSelector theme={theme} setTheme={setTheme} /> */}
        <div
          className={styles.canvasWrapper}
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
            className="react-flow"
            data-theme={theme}
          >
            <Controls />
        <Toolbar
          theme={theme}
          setTheme={setTheme}
        />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
