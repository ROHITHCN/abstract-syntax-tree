const Joi = require('joi');

// Validation schema for rule string
const ruleValidationSchema = Joi.string().required().regex(/(\w+)\s*(>|<|=)\s*([\w'"]+)(\s*(AND|OR)\s*)?/i);

function createRule(ruleString) {
  // Validate rule string format using Joi
  const validation = ruleValidationSchema.validate(ruleString);
  if (validation.error) {
    throw new Error('Invalid rule format');
  }

  // Regular expression to match individual conditions (e.g., age > 30, department = 'Sales') and logical operators (AND, OR)
  const conditionRegex = /(\w+)\s*(>|<|=)\s*([\w'"]+)|(\bAND\b|\bOR\b)/gi;
  
  const stack = [];  // To hold operators for AST
  const output = []; // To hold the final expression

  let match;
  while ((match = conditionRegex.exec(ruleString)) !== null) {
    if (match[4]) { // If it's a logical operator (AND/OR)
      while (stack.length && (stack[stack.length - 1] === 'AND' || match[4] === 'OR')) {
        output.push(stack.pop());
      }
      stack.push(match[4]);
    } else { // If it's a comparison condition (e.g., age > 30)
      output.push({ type: 'operand', field: match[1], operator: match[2], value: match[3].replace(/['"]/g, '') });
    }
  }

  while (stack.length) {
    output.push(stack.pop());
  }

  console.log('Generated Output:', output);
  
  const ast = buildAst(output);
  console.log('Generated AST:', ast);

  return ast;
}

function buildAst(output) {
  const stack = [];
  
  output.forEach(token => {
    if (token.type === 'operand') {
      stack.push(token);
    } else {
      const right = stack.pop();
      const left = stack.pop();
      stack.push({ type: 'operator', operator: token, left, right });
    }
  });
  
  // The final result in the stack should be the full AST
  return stack[0];
}

module.exports = { createRule };
