var React = require('react');

var css=require("./listHeader.scss");

const ListHeader = React.createClass({
  render:function(){
    return (
      <div onClick={this.props.onClick} className={css.listHeader}>
        {this.props.title}
      </div>
    );
  },
});

module.exports=ListHeader;
