var React = require("react"),
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    ReactBootstrap = require("react-bootstrap"),
    Tabs = require("./tabs.jsx");
var Guide = React.createClass({
render: function () {

        return (
            <Tabs/>
        );
    }
});

module.exports = Guide;
