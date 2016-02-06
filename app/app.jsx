var React = require("react"),
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Quiz = require("./components/application.jsx"),
    QuizStore = require("./stores/quiz_store"),
    FilterStore = require("./stores/filter_store"),
    actions = require("./actions");

var stores = {
    QuizStore: new QuizStore(),
    FilterStore: new FilterStore()
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

React.render(<Quiz flux={flux} />, document.getElementById("app"));
