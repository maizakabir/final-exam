var mongoose= require ("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  reviewer_name: {
    type: String,
    required: "Name required"
  },
  rating: {
    type: Number,
    required: "Rating required"
    },
  comment: {
    type: String,
    required: "Comment required"
  }
});
var User = mongoose.model('User', userSchema);

module.exports = User;