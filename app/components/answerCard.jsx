React = require("react");

var AnswerCard = React.createClass({
    propTypes: {
        answer: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (<div>
            <section className="back">
        {this.props.answer}
            </section>
        </div>
        );
    }
});

module.exports = AnswerCard;