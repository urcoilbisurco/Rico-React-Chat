var React = require('react');
var ReactDOM = require('react-dom');
var Message= require("./message/message");
var css=require("./messageList.scss");

const MessageList = React.createClass({
  componentDidMount:function(){
    this.scrollToBottom();
  },
  componentDidUpdate() {
    this.scrollToBottom();
  },
  scrollToBottom:function(){
    const scrollHeight = this.list.scrollHeight;
    const height = this.list.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.list.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  },
  render:function() {
    messageUI=[]
    this.props.messages.forEach(function(m, i){
      prev=this.props.messages[i-1]
      m.showUser=(!prev || prev.from.id!=m.from.id)
    }.bind(this))
    messages=this.props.messages.map(function(m){
      return (<Message from={m.from} isUser={this.props.user.id==m.from.id} showUser={m.showUser} key={m.id} text={m.text} />)
    }.bind(this));
    return (
      <div className={css.listContainer}>
        <div className={css.list} ref={(el) => { this.list = el; }}>
          {messages}
        </div>
      </div>
    );
  },
});

module.exports=MessageList;
