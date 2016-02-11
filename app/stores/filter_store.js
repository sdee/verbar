var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    _ = require('underscore');

var FilterStore = Fluxxor.createStore({
    initialize: function (options) {
        this.useVosotros = false;
        this.enableIrregular = false;
        this.bindActions(
            Constants.SET_VOSOTROS, this.setVosotros,
            Constants.SET_IRREGULAR, this.setIrregular
        );
    },
    getState: function () {
        return {
            useVosotros: this.useVosotros
        };
    },
    setVosotros: function (payload) {
        var useVosotros = payload.useVosotros;
        this.useVosotros = useVosotros;
        this.emit("change");
    },
    setIrregular: function (payload) {
        var enableIrregular = payload.enableIrregular;
        this.enableIrregular = enableIrregular;
        this.emit("change");
    }
});

module.exports = FilterStore;