React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserAnswer = React.createClass({
    mixins: [FluxMixin, LinkedStateMixin],
    getInitialState: function () {
        return {
            userAnswer: '',
            finalAnswer: ''
        };
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var text = this.state.userAnswer.trim();
        if (!text) {
            return;
        }
        this.setState({finalAnswer: text});
        // TODO: send request to the server
        this.setState({userAnswer: ''});
    },
    handleUserAnswer: function (e) {
        this.setState({userAnswer: e.target.value});
    },
    render: function () {
        return (
            <div>
                Final Answer
                <b>{this.state.finalAnswer}</b>
                <br></br>
                Your Answer: {this.linkState('useAnswer').value}
                <br></br>
                <form className="userInput" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Answer"
                        value={this.state.userAnswer}
                        onChange={this.handleUserAnswer}
                    />
                    <input type="submit" value="Post" />
                </form>
            </div>
        );
    }
});

module.exports = UserAnswer;