React = require("react");

var AnswerCard = React.createClass({
   propTypes: {
      answer: React.PropTypes.string.isRequired
   },
       getInitialState: function() {
           return { };
       },
       render: function() {
       return (<div> {this.props.answer}</div>);
       }
});

module.exports = AnswerCard;