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
               <section className="back">
           <font color={this.props.correct ? "green" : "red"}>{this.props.submittedAnswer}</font>
           <font color="black">{this.props.correct==false ? "->"+this.props.correctAnswer: ''}</font>

                   </section>
           </div>
       )
       }
});

module.exports = FeedbackCard;