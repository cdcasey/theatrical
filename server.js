const express = require('express');
const knex = require('./db/knex');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname+"/public"));

const users = require('./routes/users');

app.use('/users', users);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`All systems are operational captain! Sensors scanning on ${PORT}`);
});



module.exports = app;
