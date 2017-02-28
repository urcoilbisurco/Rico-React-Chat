var React = require('react');
var css=require("./user.scss");

const User = React.createClass({
  render:function() {
    return (
      <div className={css.user}>
        <img src={this.props.user.avatar}/>
        <div className={css.name}>{this.props.user.name}</div>
      </div>
    );
  },
});

module.exports=User;
