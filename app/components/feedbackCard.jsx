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
       return (
           <div>
           <font color={this.props.correct ? "green" : "red"}>{this.props.submittedAnswer}</font>
               <br></br>
           {!this.props.correct ? this.props.correctAnswer: ''}
           </div>
       )
       }
});

module.exports = FeedbackCard;