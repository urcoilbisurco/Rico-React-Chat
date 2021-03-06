var React = require('react');

var css=require("./listHeader.scss");

const ListHeader = React.createClass({
  render:function(){
    return (
      <div  className={css.listHeader}>
        <span onClick={this.props.onClick} className={css.title}>{this.props.title}</span>
        {this.props.current_page=="settings" &&
          <span onClick={this.props.onChatClick} className={css.settings}>Return to chat</span>
        }
        {this.props.current_page=="chat" &&
          <span onClick={this.props.onSettingsClick} className={css.settings}>settings</span>

        }
      </div>
    );
  },
});

module.exports=ListHeader;
