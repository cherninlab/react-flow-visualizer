import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

export const CodeEditor = ({ nodes, edges, setNodes, setEdges }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const json = JSON.stringify({ nodes, edges }, null, 2);
    setCode(json);
  }, [nodes, edges]);

  const handleEditorChange = (value) => {
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

export default CodeEditor;
