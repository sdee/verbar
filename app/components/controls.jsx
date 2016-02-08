React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Controls = React.createClass({
    mixins: [FluxMixin, LinkedStateMixin],
    getInitialState: function() {
        return {enableIrregular:false,
            useVosotros:false};
    },
    render: function() {

        return (
            <div>
            <a className="nextquestion" href="#"
                  onClick={this.onNextQuestion}>Next</a><br></br>
                <a className="showanswer" href="#"
                  onClick={this.onShowAnswer}>Flip</a>

           <input type="checkbox" checkedLink={this.linkState('enableIrregular')} />
                <input type="checkbox" checkedLink={this.linkState('useVosotros')} />
            </div>
        );
    }
    ,
     onNextQuestion: function() {
        this.getFlux().actions.nextQuestion(this.linkState('enableIrregular').value, this.linkState('useVosotros').value);
    },
    onShowAnswer: function() {
        //pass filters to show answer!
        this.getFlux().actions.showAnswer();
    }
});

module.exports = Controls;