var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var path = require('path');

//where mongodb is running
var db; 
var db_url = "mongodb://" + process.env.IP + ":27017"

//install mongoose
var mongoose = require("mongoose");

//connecting to mongoose
mongoose.connect(db_url+"/user");
mongoose.connection.on('error', function(){
console.log('Could not connect to mongodb');
});

//configuring app with bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Setting up views:
app.set('view engine', 'html');

app.get('/', function(request, response){ /*'/' means root route*/
  response.render('form.ejs');   /*__dirname is the root address*/
});


//get remaing routes from article-routes file
require('./routes/user-routes.js')(app);

// app.get('/', function(request, response){
// response.render('');
// });

//bring in article routes
// require('./routes/article-routes.js')(app);

server.listen(process.env.PORT || 3000, process.env.IP, function(){ 
console.log('Server running');
});

