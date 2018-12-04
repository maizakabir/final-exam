var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');

//Required middleware for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', function(request, response){ /*'/' means root route*/
  response.render('index.ejs');   /*__dirname is the root address*/
});

app.get('/about-page', function(request, response){ /*'/' means root route*/
  response.sendFile('about.ejs');   /*__dirname is the root address*/
});

//get remaing routes from article-routes file
require('./routes/article-routes.js')(app);

server.listen(process.env.PORT, /* || 3000 (for local host)*/ process.env.IP, /* || 'localhost' */ function(){
  console.log('Server running');
});
