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


app.get('/', (req, res)=>{
  res.render('index')
});


app.listen(PORT, () => {
  console.log(`All systems are operational captain! Sensors scanning on ${PORT}`);
});



module.exports = app;
