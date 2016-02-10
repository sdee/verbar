var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    _ = require('underscore');

var UserInputStore = Fluxxor.createStore({
    initialize: function (options) {
        this.submittedAnswer = '';
        this.correct = false;
        this.hasSubmittedAnswer = false;
        this.bindActions(
            Constants.NEXT_QUESTION, this.resetUserInput,
            Constants.SUBMIT_ANSWER, this.onSubmitAnswer
        );
    },
    getState: function () {
        return {
            submittedAnswer: this.submittedAnswer,
            correct: this.correct,
            hasSubmittedAnswer: this.hasSubmittedAnswer
        };
    },
    resetUserInput: function () {
        this.submittedAnswer = '';
        this.correct = false;
        this.hasSubmittedAnswer = false;
        this.emit("change");
    },
    onSubmitAnswer: function(payload) {
        var submittedAnswer = payload.submittedAnswer;
        var correct = payload.correct;
        this.submittedAnswer = submittedAnswer;
        this.correct = correct;
        this.hasSubmittedAnswer = true;
        this.emit("change");
    }
});

module.exports = UserInputStore;