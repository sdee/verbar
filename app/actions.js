var Constants = require("./constants"),
jquery=require("jquery");
var resp;

var QuizClient = {
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
  loadQuiz: function() {
  this.dispatch(Constants.LOAD_QUIZ);
  QuizClient.load(function(quiz) {
    this.dispatch(Constants.LOAD_QUIZ_SUCCESS, {quiz:quiz});
  }.bind(this), function(error) {
    this.dispatch(Constants.LOAD_QUIZ_FAIL, {error: error});
  }.bind(this));
  },
    nextQuestion: function(enableIrregular, useVosotros) {
        this.dispatch(Constants.NEXT_QUESTION, {enableIrregular:enableIrregular, useVosotros:useVosotros});
    },
    showAnswer: function() {
        this.dispatch(Constants.SHOW_ANSWER);
    }
};
