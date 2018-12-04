//routes for the exports
module.exports = function (app){
    var user = require('./../controllers/user-controllers.js');
    
    app.get('/new-user', user.new);
    
    app.post('/article/create', user.create);
    
    
    app.get('/article/list', user.list);
    
    app.get('/article/:articleID', user.single);
}