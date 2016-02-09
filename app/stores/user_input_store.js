var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    _ = require('underscore');

var UserInputStore = Fluxxor.createStore({
    initialize: function (options) {
        this.userAnswer = '';
        this.finalAnswer = '';
        this.correct = false;

        this.bindActions(
            Constants.NEXT_QUESTION, this.resetUserInput
        );
    },
    getState: function () {
        return {
            userAnswer: this.userAnswer,
            finalAnswer: this.finalAnswer,
            ignoreAccent: this.ignoreAccent,
            correct: this.correct
        };
    },
    resetUserInput: function () {
        this.userAnswer = '';
        this.finalAnswer = '';
        this.ignoreAccent = false;
        this.correct = false;
        this.emit("change");
    }
});

module.exports = UserInputStore;