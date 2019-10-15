'use strict';
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db_config = {
  development:'mongodb://localhost/expedition-plasgos',
  test:'mongodb://localhost/test-expedition',
  production: process.env.MONGODB_URI
}

const app_env = app.settings.env;

mongoose.set('useFindAndModify', false);
mongoose.connect(db_config[app_env], { useNewUrlParser:true });

mongoose.connection.on('connected',()=>{
  console.log("Database Connected ", db_config[app_env]);
})

mongoose.connection.on('error',()=>{
  console.log("Database error ", db_config[app_env]);
})

mongoose.connection.on('disconnected',()=>{
  console.log("Database disconnected ", db_config[app_env]);
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected, app termination');
    process.exit(0);
  });
});
