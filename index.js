'use strict';

var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk');

var REGION = 'us-west-2';
AWS.config.update({region: REGION});

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
