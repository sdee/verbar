var React = require("react"),
    ReactDOM = require('react-dom'),
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Party = require("./components/application.jsx"),
    PartyStore = require("./stores/party_store"),
    actions = require("./actions");

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

React.render(<Quizflux={flux} />, document.getElementById("app"));
