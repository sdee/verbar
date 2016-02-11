React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactBootstrap = require("react-bootstrap"),
    FluxMixin = Fluxxor.FluxMixin(React);

var VosotrosCheckbox = React.createClass({
    mixins: [FluxMixin],
  getInitialState: function () {
    return {
        checked: this.props.checked || false
     };
  },
  render: function () {
    return (
        <label>
            <input type="checkbox"
              name="vosotros_checkbox"
              checked={this.state.checked}
              onClick={this.handleClick}
              value="vosotros" />
            use vosotros
      </label>
    );
  },
  handleClick: function(e) {
      this.setState({checked: e.target.checked});
      this.getFlux().actions.setVosotros(e.target.checked);
  }
});

module.exports = VosotrosCheckbox;