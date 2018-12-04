var User = require('./../models/User.js');

module.exports.new = function (request, response){
    response.render ('form.ejs');   /*__dirname is the root address*/
}

module.exports.create = function(request, response){
    //new article for mongoose
    var new_user = new User (request.body);
      
    new_user.save (function(err, data){
    if(err){
        console.log(err)
    } 
    return response.status(400).json({error:"Please add a name"});
    console.log(data);
    return response.status(200).json({message: "Article successfully created"});
    });
      
    console.log(request.body);
};

module.exports.list = function(request, response) {
   User.find(function(err, data){
       if(err)
        response.status(400).json({
            error: "Database query error"
        })
       
       response.status(200).json({
           user: data
       });
   });
};

module.exports.single = function(request, response){   
    User.findOne ({_id:request.params.userID}), 
        function(err, data){
            if(err)
                response.status(400).json({
                    error: "Database query error"
                });
            
           response.render ('User.js', {
               user:data
           }) 
    //     });
    // response.render('../article.ejs', {
    //      article: article[request.params.articleID]
    }
};