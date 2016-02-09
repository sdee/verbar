React = require("react");

var VerbCard = React.createClass({
    propTypes: {
        infinitive: React.PropTypes.string.isRequired,
        pronoun: React.PropTypes.string.isRequired,
        tense: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (<div> {this.props.pronoun},
            <b>{this.props.infinitive}</b>
            ({this.props.tense})</div>);
    }
});

module.exports = VerbCard;