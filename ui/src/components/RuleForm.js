import React, { useState } from 'react';
import axios from 'axios';
import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

function transformAstToTree(ast) {
  if (ast.type === 'operator') {
    return {
      name: ast.operator,
      children: [
        transformAstToTree(ast.left),
        transformAstToTree(ast.right)
      ]
    };
  } else if (ast.type === 'operand') {
    return {
      name: `${ast.field} ${ast.operator} ${ast.value}`
    };
  }
}

function RuleForm({ onAstGenerated, onEvaluation, ast }) {
  const [rules, setRules] = useState([]);
  const [currentRule, setCurrentRule] = useState('');
  const [combinationOperator, setCombinationOperator] = useState('AND');

  const addRule = () => {
    if (currentRule) {
      setRules([...rules, { rule: currentRule, operator: combinationOperator }]);
      setCurrentRule('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/rules/create_rule', { rules });
      onAstGenerated(response.data.ast);
    } catch (error) {
      console.error('Error generating AST:', error);
    }
  };

  const handleEvaluate = async () => {
    if (!ast) {
      console.error('No AST available for evaluation');
      return;
    }
    try {
      const data = { age: 35, department: 'Sales' }; // Example data
      const astResponse = await axios.post('http://localhost:4000/rules/evaluate_rule', { ast, data });
      onEvaluation(astResponse.data.result);
    } catch (error) {
      console.error('Error evaluating rule:', error);
    }
  };

  const transformedAst = ast ? transformAstToTree(ast) : null;

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={currentRule}
          onChange={(e) => setCurrentRule(e.target.value)}
          placeholder="Enter rule (e.g., age > 30)"
        />
        <select
          value={combinationOperator}
          onChange={(e) => setCombinationOperator(e.target.value)}
          className="border p-2 rounded ml-2"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
        <button type="button" onClick={addRule} className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
          Add Rule
        </button>
      </form>

      <div className="mb-4">
        <h4>Rules:</h4>
        <ul>
          {rules.map((rule, index) => (
            <li key={index}>{`${rule.operator} ${rule.rule}`}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate AST
      </button>
      <button onClick={handleEvaluate} className="bg-green-500 text-white px-4 py-2 ml-2 rounded">
        Evaluate Rule
      </button>

      {transformedAst && (
        <div className="tree-container my-4">
          <Tree
            data={transformedAst}
            height={400}
            width={400}
            animated
          />
        </div>
      )}
    </div>
  );
}

export default RuleForm;
