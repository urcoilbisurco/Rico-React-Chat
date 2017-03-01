var React = require('react');
var ReactFireMixin = require("reactfire");

var ListHeader= require("../header/listHeader");
var MessageList=require("../messageList/messageList");
var MessageBox=require("../messageBox/messageBox");

var css=require("./rino.scss");

const Rino = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    // Here we bind the component to Firebase and it handles all data updates,
    // no need to poll as in the React example.
    this.bindAsArray(firebase.database().ref('rico::test1'), 'messages');
  },
  getInitialState:function(){
    return {
      title:"Rico",
      open:true,
      messages:[],
      user:{name:"Francesco", id:1, avatar:"https://placeimg.com/40/40/any"}
    }
  },
  handleSubmit:function(message){
    this.firebaseRefs['messages'].push(message);
    // this.setState({
    //   messages:this.state.messages.concat(message)
    // });
  },
  handleToggleChat:function(){
    this.setState({
      open:!this.state.open
    })
  },
  render:function() {
    return (
      <div className={css.main}>
        <div className={css.content}>
          <ListHeader onClick={this.handleToggleChat} title={this.state.title}/>
          { this.state.open &&
            <span>
            <MessageList title={this.state.title} user={this.state.user} messages={this.state.messages}/>
            <MessageBox user={this.state.user} onSubmit={this.handleSubmit}/>
            </span>
          }
        </div>
      </div>
    );
  },
});

module.exports=Rino;
