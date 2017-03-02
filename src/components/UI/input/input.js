var React = require('react');
var css=require("./input.scss");

const Input = React.createClass({
  render:function() {
    return (
      <div className={css.container} onClick={this.props.onClick}>
        <label className={css.label}>{this.props.label}</label>
        <input ref={(ref) => this.text = ref} type="text" className={css.input} defaultValue={this.props.value}/>
      </div>
    );
  },
});

module.exports=Input;
