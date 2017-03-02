var React = require('react');
var cn = require('classnames');
var User=require("./user/user");
var css=require("./message.scss");

const Message = React.createClass({
  render:function() {
    return (
      <div style={this.props.style} className={cn(css.message, (this.props.isUser ? css.isOwner : ""))}>
        {this.props.showUser &&
          <User user={this.props.from}/>
        }
        <div>
          <span className={css.textContainer}>
            {this.props.text}
            </span>
        </div>
      </div>
    );
  },
});

module.exports=Message;
