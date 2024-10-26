// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ruleRoutes = require('./routes/ruleRoutes');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/rules', ruleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
