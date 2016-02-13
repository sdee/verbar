var Constants = require("./constants"),
    jquery = require("jquery");
var resp;

var QuizClient = {
    load: function (success, failure) {
        console.log("AJAXXXX");
        jquery.ajax({
            url: "quiz.json",
            dataType: 'json',
            cache: false,
            success: function (data) {
                success(data);
            }.bind(this),
            error: function (xhr, status, err) {
            }.bind(this)
                .bind(this)
        });
    }
};
module.exports = {
    loadQuiz: function () {
        this.dispatch(Constants.LOAD_QUIZ);
        QuizClient.load(function (quiz) {
            this.dispatch(Constants.LOAD_QUIZ_SUCCESS, {quiz: quiz});
        }.bind(this), function (error) {
            this.dispatch(Constants.LOAD_QUIZ_FAIL, {error: error});
        }.bind(this));
    },
    nextQuestion: function (enableIrregular, useVosotros, allowPresent, allowPreterite, allowImperfect, allowConditional, allowFuture) {
        this.dispatch(Constants.NEXT_QUESTION,
            {enableIrregular: enableIrregular,
                useVosotros: useVosotros,
            allowPresent: allowPresent,
            allowPreterite: allowPreterite,
            allowImperfect: allowImperfect,
            allowConditional: allowConditional,
            allowFuture: allowFuture});
    },
    showAnswer: function () {
        this.dispatch(Constants.SHOW_ANSWER);
    },
    submitUserAnswer: function(submittedAnswer, correct) {
        this.dispatch(Constants.SUBMIT_ANSWER, {submittedAnswer: submittedAnswer, correct:correct});
    },
    resetAnswer: function() {
        this.dispatch(Constants.RESET_ANSWER);
    },
    setVosotros: function(useVosotros) {
        this.dispatch(Constants.SET_VOSOTROS, {useVosotros: useVosotros});
    },
    setIrregular: function(enableIrregular) {
        this.dispatch(Constants.SET_IRREGULAR, {enableIrregular: enableIrregular});
    },
    setIndicative: function(allowIndicative) {
        this.dispatch(Constants.SET_INDICATIVE, {allowIndicative: allowIndicative});
    },
    setPresent: function(allowPresent) {
        this.dispatch(Constants.SET_PRESENT, {allowPresent: allowPresent});
    },
    setPreterite: function(allowPreterite) {
        this.dispatch(Constants.SET_PRETERITE, {allowPreterite: allowPreterite});
    },
    setImperfect: function(allowImperfect) {
        this.dispatch(Constants.SET_IMPERFECT, {allowImperfect: allowImperfect});
    },
    setConditional: function(allowConditional) {
        this.dispatch(Constants.SET_CONDITIONAL, {allowConditional: allowConditional});
    },
    setFuture: function(allowFuture) {
        this.dispatch(Constants.SET_FUTURE, {allowFuture: allowFuture});
    }

};
