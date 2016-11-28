'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', function (req, res) {
	res.redirect('index.html');
});
app.use(express.static('public'));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);