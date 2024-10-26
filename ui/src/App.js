import React, { useState } from 'react';
import RuleForm from './components/RuleForm'
import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'; // Add tree graph styles

function App() {
  const [ast, setAst] = useState(null);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const handleAstGenerated = (generatedAst) => {
    setAst(generatedAst);
  };

  const handleEvaluation = (result) => {
    setEvaluationResult(result);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Rule Engine</h1>
      <RuleForm onAstGenerated={handleAstGenerated} onEvaluation={handleEvaluation} ast={ast} />

      {ast && (
        <div className="my-6">
          <h3 className="text-xl mb-2">AST Visualization:</h3>
          <div className="tree-container bg-white p-4 border rounded shadow">
            <Tree
              data={ast}
              height={400}
              width={600}
            />
          </div>
        </div>
      )}

      {evaluationResult !== null && (
        <div className="my-4 text-center">
          <h4 className="text-lg">Evaluation Result: {evaluationResult ? 'True' : 'False'}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
