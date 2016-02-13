var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    _ = require('underscore');

var FilterStore = Fluxxor.createStore({
    initialize: function (options) {
        this.useVosotros = false;
        this.enableIrregular = false;
        this.allowIndicative = false;
        this.allowPresent =true;
        this.allowPreterite = false;
        this.allowImperfect = false;
        this.allowConditional = false;
        this.allowFuture = false;

        this.bindActions(
            //general filters
            Constants.SET_VOSOTROS, this.setVosotros,
            Constants.SET_IRREGULAR, this.setIrregular,
            Constants.SET_INDICATIVE, this.setIndicative,
            Constants.SET_PRESENT, this.setPresent,
            Constants.SET_PRETERITE, this.setPreterite,
            Constants.SET_IMPERFECT, this.setImperfect,
            Constants.SET_CONDITIONAL, this.setConditional,
            Constants.SET_FUTURE, this.setFuture
        );
    },
    getState: function () {
        return {
            useVosotros: this.useVosotros
        };
    },
    //general filters
    setVosotros: function (payload) {
        var useVosotros = payload.useVosotros;
        this.useVosotros = useVosotros;
        this.emit("change");
    },
    setIrregular: function (payload) {
        var enableIrregular = payload.enableIrregular;
        this.enableIrregular = enableIrregular;
        this.emit("change");
    },
    setIndicative: function (payload) {
        var allowIndicative = payload.allowIndicative;
        this.allowIndicative = allowIndicative;
        this.emit("change");
    },
    setPresent: function (payload) {
        var allowPresent = payload.allowPresent;
        this.allowPresent = allowPresent;
        this.emit("change");
    },
    setPreterite: function (payload) {
        var allowPreterite = payload.allowPreterite;
        this.allowPreterite = allowPreterite;
        this.emit("change");
    },
    setImperfect: function (payload) {
        var allowImperfect = payload.allowImperfect;
        this.allowImperfect = allowImperfect;
        this.emit("change");
    },
    setConditional: function (payload) {
        var allowConditional = payload.allowConditional;
        this.allowConditional = allowConditional;
        this.emit("change");
    },
    setFuture: function(payload) {
        var allowFuture = payload.allowFuture;
        this.allowFuture = allowFuture;
        this.emit("change");
    }
});

module.exports = FilterStore;