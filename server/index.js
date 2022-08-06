require('dotenv').config();
const express = require('express');
const qaRouter = require('./qaRouter.js');

const app = express();

app.use(express.json());

// set up routers
app.use('/qa/questions', qaRouter);
app.use('/qa', qaRouter);

app.get(`/${process.env.LOADERIO}`, (req, res) => {
  res.send(`${process.env.LOADERIO}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
