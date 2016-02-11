var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    _ = require('underscore');

var FilterStore = Fluxxor.createStore({
    initialize: function (options) {
        this.useVosotros = false;
        this.enableIrregular = false;
        this.bindActions(
            Constants.SET_VOSOTROS, this.setVosotros
        );
    },
    getState: function () {
        return {
            useVosotros: this.useVosotros
        };
    },
    setVosotros: function (payload) {
        console.log("SET VOSOTROS>>>>>");
        var useVosotros = payload.useVosotros;
        this.useVosotros = useVosotros;
        this.emit("change");
    }
});

module.exports = FilterStore;