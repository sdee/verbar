var React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap")
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ScalingButton = require("./scaling_button.jsx"),
IngredientList = require("./ingredient_list.jsx"),
UnitConv = require("../../unitconv/unit.js");

var Party = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("PartyStore")],
    // Required by StoreWatchMixin
    getStateFromFlux: function() {
        var flux = this.getFlux();
        var store = this.getFlux().store("PartyStore");
        return {
            loading: store.loading,
            error: store.error,
            party: store.party
        };
    },
    componentDidMount: function() {
        this.getFlux().actions.loadParty();
      },
    render: function() {
        return (
            <div id="test"></div>
        );
    },
    onScaleUp: function() {
        this.getFlux().actions.scaleUp();
    },

    onScaleDown: function() {
        this.getFlux().actions.scaleDown();
    }
});

module.exports = Quiz;
