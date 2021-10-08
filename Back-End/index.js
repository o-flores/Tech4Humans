const express = require('express');

const port = 3001;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');
const error = require('./middlewares/error');

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}));

app.use(bodyParser.json());

app.post('/weather', controller.postCity);
app.get('/weather/history', controller.getLastSearchs);
app.get('/weather/most_searched', controller.getTop5Cities);

app.use(error);

app.listen(port);
