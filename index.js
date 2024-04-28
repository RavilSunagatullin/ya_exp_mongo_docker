const express = require('express');
const config = require('./src/config/index');
const mongoose = require('./src/database/index');

const app = express();

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(config.app.port, () => {
	console.log(`Server is running on port ${config.app.port}`);
});
