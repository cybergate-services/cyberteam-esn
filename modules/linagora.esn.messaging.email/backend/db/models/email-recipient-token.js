'use strict';

var mongoose = require('mongoose');
var uuidV4 = require('uuid/v4');
var Schema = mongoose.Schema;

var EmailRecipientToken = new mongoose.Schema({
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  message: {
    objectType: {type: String, required: true, default: 'whatsup'},
    id: {type: Schema.Types.Mixed, required: true}
  },
  data: {type: mongoose.Schema.Types.Mixed},
  token: {type: String},
  created: {type: Date, default: Date.now },
  schemaVersion: {type: Number, default: 1}
});

EmailRecipientToken.pre('save', function(next) {
  if (!this.isNew) {
    return next();
  }
  this.token = uuidV4();
  next();
});

module.exports = mongoose.model('EmailRecipientToken', EmailRecipientToken);
