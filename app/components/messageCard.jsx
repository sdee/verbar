React = require("react");

var MsgCard = React.createClass({
    propTypes: {
        msg: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (<div>
            <section className="front">
       {this.props.msg}
            </section>
        </div>);
    }
});

module.exports = MsgCard;