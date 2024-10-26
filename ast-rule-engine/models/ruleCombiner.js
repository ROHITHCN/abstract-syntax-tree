function combineRules(rules, operator = 'AND') {
    if (!Array.isArray(rules) || rules.length < 2) {
      throw new Error('At least two rules are required to combine');
    }
  
    return rules.reduce((combined, rule) => ({
      type: 'operator',
      operator,
      left: combined,
      right: rule
    }));
  }
  
  module.exports = { combineRules };
  