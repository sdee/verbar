React = require("react");

var MsgCard = React.createClass({
   propTypes: {
      msg: React.PropTypes.string.isRequired,
   },
       getInitialState: function() {
           return { };
       },
       render: function() {
       return (<div> {this.props.msg}</div>);
       }
});

module.exports = MsgCard;