var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    _ = require('underscore');

var QuizStore = Fluxxor.createStore({
    initialize: function (options) {
        this.numberFails = 0;
        this.quiz = [];
        this.currentQuestion = {"text": "Get started by clicking 'next'"}; //display
        this.questions = [];
        this.loading = false;
        this.showAnswer = false;
        this.seenQuestions = [];
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
            showAnswer: this.showAnswer
        };
    },
    //holds most of business logic
    handleNextQuestion: function (payload) {
        var enableIrregular = payload.enableIrregular;
        var useVosotros = payload.useVosotros;
        var allowPresent = payload.allowPresent;
        var allowPreterite = payload.allowPreterite;
        var allowImperfect = payload.allowImperfect;
        var allowConditional = payload.allowConditional;
        var allowFuture = payload.allowFuture;
        this.showAnswer = false;
        //select a random question from set of questions
        var randIdx = Math.floor(Math.random() * this.quiz.length);
        this.seenQuestions.push(randIdx);
        var newQuestion = this.quiz[randIdx];
        //see if this question passes filter
        var failIrregular = enableIrregular != true && newQuestion.irregular === true;
        var failVosotros = useVosotros != true && newQuestion.pronoun === "vosotros";
        var failPresent = allowPresent != true && newQuestion.tense === "present";
        var failPreterite = allowPreterite != true && newQuestion.tense === "past";
        var failImperfect = allowImperfect != true && newQuestion.tense === "imperfect";
        var failConditional = allowConditional != true && newQuestion.tense === "conditional";
        var failFuture = allowFuture != true && newQuestion.tense === "future";

        if (failIrregular || failVosotros || failPresent ||failPreterite ||failImperfect || failConditional || failFuture) {//if fails, select a new question
            this.numberFails+=1;
            console.log("number fails");
            console.log(this.numberFails);
            if (this.numberFails>30) {
                console.log("FAIL>>>>>");
                newQuestion = {"text": "Filters too strict!"};
            }
            else {
                return this.handleNextQuestion(payload);
            }
                }
        this.numberFails =0;
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