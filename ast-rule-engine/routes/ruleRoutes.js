const express = require('express');
const { createRule } = require('../models/ruleParser');
const { combineRules } = require('../models/ruleCombiner');
const { evaluateRule } = require('../models/ruleEvaluator');

const router = express.Router();

router.post('/create_rule', (req, res) => {
  console.log('Request body:', req.body);
  try {
    const ruleString = req.body.rule;
    console.log('Rule String:', ruleString);
    const ruleAst = createRule(ruleString);
    console.log(ruleAst)
    res.json({ ast: ruleAst });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post('/combine_rules', (req, res) => {
  try {
    const { rules, operator } = req.body;
    const combinedAst = combineRules(rules, operator);
    res.json({ ast: combinedAst });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/evaluate_rule', (req, res) => {
  try {
    const { ast, data } = req.body;
    const result = evaluateRule(ast, data);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
