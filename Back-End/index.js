const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const controller = require('./controller');

app.use(bodyParser.json());

app.post('/weather', controller.postWeather);

app.listen(port);
