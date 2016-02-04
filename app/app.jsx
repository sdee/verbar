var React = require("react"),
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Quiz = require("./components/application.jsx"), actions = require("./actions"),
    QuizStore = require("./stores/quiz_store");

var stores = {
    QuizStore: new QuizStore()
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

React.render(<Quiz flux={flux} />, document.getElementById("app"));
