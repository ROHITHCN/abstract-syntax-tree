function evaluateRule(ast, data) {
    if (ast.type === 'operand') {
      const { field, operator, value } = ast;
      const fieldValue = data[field];
  
      switch (operator) {
        case '>':
          return Number(fieldValue) > Number(value);
        case '<':
          return Number(fieldValue) < Number(value);
        case '=':
          return String(fieldValue) === String(value); // Strict type comparison
        default:
          throw new Error('Invalid operator');
      }
    } else if (ast.type === 'operator') {
      const { operator, left, right } = ast;
  
      if (operator === 'AND') {
        return evaluateRule(left, data) && evaluateRule(right, data);
      } else if (operator === 'OR') {
        return evaluateRule(left, data) || evaluateRule(right, data);
      } else {
        throw new Error('Invalid operator');
      }
    } else {
      throw new Error('Unknown node type');
    }
  }
  
  module.exports = { evaluateRule };
  