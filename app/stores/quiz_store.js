var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    _ = require('underscore');

var QuizStore = Fluxxor.createStore({
    initialize: function (options) {
        this.quiz = [];
        this.currentQuestion = {"text": "Get started by clicking 'next'"}; //display
        this.questions = [];
        this.loading = false;
        this.showAnswer = false;
        this.seenQuestions = [];
        this.enableIrregular = false;
        this.bindActions(
            Constants.NEXT_QUESTION, this.handleNextQuestion,
            Constants.SHOW_ANSWER, this.onShowAnswer,
            Constants.LOAD_QUIZ, this.onLoadQuiz,
            Constants.LOAD_QUIZ_SUCCESS, this.onLoadQuizSuccess,
            Constants.LOAD_QUIZ_FAIL, this.onLoadQuizFail
        );
    },
    getState: function () {
        return {
            questions: this.quiz.questions,
            currentQuestion: this.currentQuestion,
            showAnswer: this.showAnswer,
            enableIrregular: this.enableIrregular
        };
    },
    handleNextQuestion: function (payload) {
        var enableIrregular = payload.enableIrregular;
        var useVosotros = payload.useVosotros;
        this.showAnswer = false;
        var randIdx = Math.floor(Math.random() * this.quiz.length);
        this.seenQuestions.push(randIdx);
        var newQuestion = this.quiz[randIdx];
        var failIrregular = enableIrregular != true && newQuestion.irregular === true;
        var failVosotros = useVosotros != true && newQuestion.pronoun === "vosotros";
        if (failIrregular || failVosotros) {
            return this.handleNextQuestion(payload);
        }
        this.currentQuestion = newQuestion;
        this.emit("change");
    },
    onLoadQuiz: function () {
        this.loading = true;
        this.emit("change");
    },
    onLoadQuizSuccess: function (payload) {
        this.loading = false;
        this.error = null;
        this.quiz = payload.quiz;
        this.emit("change");
    },
    onLoadQuizFail: function (payload) {
        this.loading = false;
        this.error = payload.error;
        this.emit("change");
    },
    //rename flip
    onShowAnswer: function () {
        this.showAnswer = !this.showAnswer;
        this.emit("change");
    }
});

module.exports = QuizStore;