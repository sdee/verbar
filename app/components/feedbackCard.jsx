React = require("react");

var FeedbackCard = React.createClass({
   propTypes: {
      correct: React.PropTypes.bool.isRequired,
       correctAnswer: React.PropTypes.string.isRequired,
       submittedAnswer: React.PropTypes.string.isRequired
   },
       getInitialState: function() {
           return { };
       },
       render: function() {
           console.log("PROPS>>>>>>>>>");
           console.log(this.props);
       return (
           <div>
           <font color={this.props.correct ? "green" : "red"}>{this.props.submittedAnswer}</font>
           {!this.props.correct ? this.props.correctAnswer: ''}
           </div>
       )
       }
});

module.exports = FeedbackCard;