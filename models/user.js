const mongoose = require('mongoose');
require('../config/nosql-mongodb');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  id:{
    type: Number,
    default: 0
  },
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  }
},{timestamps : true})

const User = mongoose.model('User', UserSchema);

module.exports = User;
