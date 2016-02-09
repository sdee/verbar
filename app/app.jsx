var React = require("react"),
    ReactDOM = require('react-dom')
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Quiz = require("./components/application.jsx"),
    QuizStore = require("./stores/quiz_store"),
    actions = require("./actions");

var stores = {
    QuizStore: new QuizStore()
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

flux.on("dispatch", function (type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

ReactDOM.render(<Quiz flux={flux} />, document.getElementById("app"));
