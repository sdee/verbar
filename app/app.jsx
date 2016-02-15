var React = require("react"),
<<<<<<< HEAD
    ReactDOM = require('react-dom')
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Quiz = require("./components/application.jsx"),
    QuizStore = require("./stores/quiz_store"),
    UserInputStore = require("./stores/user_input_store"),
    FilterStore = require("./stores/filter_store")
    actions = require("./actions");

var stores = {
    QuizStore: new QuizStore(),
    UserInputStore: new UserInputStore(),
    FilterStore: new FilterStore()
=======
    ReactDOM = require('react-dom'),
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    actions = require("./actions"),
    Guide = require("./components/application.jsx");
var stores = {

>>>>>>> 2e6703ac3296c7f559a087c01f6a7c48a07f12ab
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

flux.on("dispatch", function (type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

<<<<<<< HEAD
ReactDOM.render(<Quiz flux={flux} />, document.getElementById("app"));
=======
ReactDOM.render(<Guide flux={flux} />, document.getElementById("app"));
>>>>>>> 2e6703ac3296c7f559a087c01f6a7c48a07f12ab
