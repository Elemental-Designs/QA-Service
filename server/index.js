require('dotenv').config();
const express = require('express');
const path = require('path');
const qaRouter = require('./qaRouter.js');

const app = express();

app.use(express.json());

// set up routers
app.use('/qa', qaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);