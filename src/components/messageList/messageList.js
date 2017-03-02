var React = require('react');
var ReactDOM = require('react-dom');
var Message= require("./message/message");
var css=require("./messageList.scss");

var ReactMotion=require("react-motion");
var TransitionMotion=ReactMotion.TransitionMotion;
var spring=ReactMotion.spring;

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
  willEnter:function(){
    return {opacity:0};
  },
  getStyles:function(){
    s=this.props.messages.map(function(message){
      return {
        key: ""+message.id, //key wants a string value, not a integer.
        data:message,
        style: {opacity:spring(1)}
      }
    })
    return s;
  },
  render:function() {
    messageUI=[]
    this.props.messages.forEach(function(m, i){
      prev=this.props.messages[i-1]
      m.showUser=(!prev || prev.from.id!=m.from.id)
    }.bind(this))
    return (
      <div className={css.listContainer}>
        <TransitionMotion
          styles={this.getStyles()}
          willEnter={this.willEnter}>
          { (messagesStyles) =>
            <div className={css.list} ref={(el) => { this.list = el; }}>
              {
                messagesStyles.map(function(m){
                  return (<Message style={m.style} from={m.data.from} isUser={this.props.user.id==m.data.from.id} showUser={m.data.showUser} key={m.key} text={m.data.text} />)
                }.bind(this))
              }
            </div>
          }
        </TransitionMotion>








      </div>
    );
  },
});

module.exports=MessageList;
