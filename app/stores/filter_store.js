var Fluxxor = require("fluxxor"),
    Constants = require("../constants"),
    jquery=require("jquery");

//rename setting store?
var FilterStore = Fluxxor.createStore({
    initialize: function(options) {
        this.enableIrregular = true;
        this.useVosotros = false;
        this.bindActions(
            Constants.TOGGLE_VOSOTROS, this.toggleVosotros(),
            Constants.TOGGLE_IRREGULAR, this.toggleIrregular
        );
    },
    getState: function() {
        return {
          enableIrregular: this.enableIrregular
        };
    },
    toggleIrregular: function(){
        this.enableIrregular=!this.enableIrregular;
        console.log("toggle irregular");
        this.emit("change");
    },
    toggleVosotros: function(){
        this.useVosotros =!this.useVosotros;
    }
});

module.exports = FilterStore;