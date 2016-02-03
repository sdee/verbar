var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    jquery=require("jquery");

var QuizStore = Fluxxor.createStore({
    initialize: function(options) {

        this.questions = [];
        this.loading = false;

        this.bindActions(
            Constants.NEXT_QUESTION, this.handleNextQuestion,
            Constants.LOAD_QUIZ, this.onLoadQuiz,
            Constants.LOAD_QUIZ_SUCCESS, this.onLoadQuizSuccess,
            Constants.LOAD_QUIZ_FAIL, this.onLoadQuizFail
        );
    },
    getState: function() {
        return {
          questions: this.quiz.questions
        };
    },
    handleNextQuestion: function() {
        console.log("handle next question");
        this.emit("change");
    },
    onLoadQuiz: function() {
        this.loading = true;
        this.emit("change");
    },
    onLoadQuizSuccess: function(payload) {
        this.loading = false;
        this.error = null;
        this.party=payload.quiz;
        this.emit("change");
    },
    onLoadPartyFail: function(payload) {
        this.loading = false;
        this.error = payload.error;
        this.emit("change");
    }
});

module.exports = QuizStore;