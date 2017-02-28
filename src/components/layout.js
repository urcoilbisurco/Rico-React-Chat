var React = require('react');

var css=require("./layout.scss");



var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <div className={css.app}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Layout;
