var React = require("react"),
    ReactDOM = require('react-dom'),
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    actions = require("./actions"),
    Guide = require("./components/application.jsx");
var stores = {

};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

flux.on("dispatch", function (type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

ReactDOM.render(<Guide flux={flux} />, document.getElementById("app"));
