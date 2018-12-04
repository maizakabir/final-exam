var express = require ('express');
var app = express();
var server = require ('http').Server(app);

server.listen (process.env.PORT, process.env.IP, function (){
    console.log ('Server running');
});

//middleware for body-parser
app.use (bodyParser.json());
app.use (bodyParser.urlencoded ({extended: false}));

//mongoDB
var db;
var db_url= "mongodb://" + process.env.IP + ":27017";


//connecting mongoose to mongoDB
mongoose.connect(db_url + "chatusers");
mongoose.connection.on('error', function(){
  console.log ("Could not connect to MongoDB");
});

app.get ('/index', function (req, res){
  res.sendFile (__dirname + '/index.html');
});
