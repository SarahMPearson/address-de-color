'use strict';

var port = process.env.PORT;
var db = process.env.DB;

var express = require('express'); // turn the web server on
var app = express();

var config = require('./lib/config');
config(app);
require('./lib/pipeline')(app, express);//call the pipeline.js file
require('./lib/mongodb.js')(db);

app.listen(port, function(){
  console.log('Express Ready', port);
});

