const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.set('view engine', 'ejs');

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
