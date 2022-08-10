const { Console } = require('console');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('hello world'))
app.listlen(PORT, () => console.log(`Now listening on ${PORT}`));