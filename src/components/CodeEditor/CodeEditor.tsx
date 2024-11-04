import { AppNode } from '@/nodes/types';
import Editor from '@monaco-editor/react';
import { Edge } from '@xyflow/react';
import { useEffect, useState } from 'react';

interface CodeEditorProps {
  nodes: AppNode[];
  edges: Edge[];
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
}

export const CodeEditor = ({ nodes, edges, setNodes, setEdges }: CodeEditorProps) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const json = JSON.stringify({ nodes, edges }, null, 2);
    setCode(json);
  }, [nodes, edges]);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
    try {
      const { nodes: newNodes, edges: newEdges } = JSON.parse(value || '{}');
      setNodes(newNodes || []);
      setEdges(newEdges || []);
    } catch (error) {
      // Handle JSON parse errors if needed
    }
  };

  return (
    <Editor
      height="100vh"
      defaultLanguage="json"
      value={code}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        theme: 'vs-dark',
      }}
    />
  );
};
