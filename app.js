const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');

mongoose.Promise = require('bluebird');

const app = express();

app.set('port', process.env.PORT || 8081);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(app.get('port'), ()=>{
  console.log("Application running at port ", app.get('port'));
})
