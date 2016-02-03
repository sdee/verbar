var Constants = require("./constants"),
jquery=require("jquery");
var resp;

var PartyClient = {
    load: function(success, failure) {
   jquery.ajax({
         url: "quiz.json",
         dataType: 'json',
         cache: false,
         success: function(data) {
          success(data);
         }.bind(this),
         error: function(xhr, status, err) {
         }.bind(this)
         .bind(this)
     });
    }};
module.exports = {
  loadParty: function() {
  this.dispatch(Constants.LOAD_PARTY);
  PartyClient.load(function(quiz) {
    this.dispatch(Constants.LOAD_PARTY_SUCCESS, {quiz:quiz});
  }.bind(this), function(error) {
    this.dispatch(Constants.LOAD_PARTY_FAIL, {error: error});
  }.bind(this));
  },
    nextQuestion: function() {
        this.dispatch(Constants.NEXT_QUESTION);
    }
};
