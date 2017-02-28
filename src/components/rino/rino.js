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
    this.bindAsArray(firebase.database().ref('rino::test1'), 'messages');
  },
  getInitialState:function(){
    return {
      title:"Rino",
      open:true,
      messages:[
        // {id:"1" , from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"sto scrivendo un messaggio!"},
        // {id:"12", from:{avatar:"https://placeimg.com/40/40/any", name:"Paolo", id:2}, text:"yey!!"},
        // {id:"13", from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"wow!!"},
        // {id:"14", from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"sto scrivendo un messaggio!"},
        // {id:"15", from:{avatar:"https://placeimg.com/40/40/any", name:"Stefania", id:3}, text:"yey!!"},
        // {id:"16", from:{avatar:"https://placeimg.com/40/40/any", name:"Stefania", id:3}, text:"wow!!"},
        // {id:"17", from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"sto scrivendo un messaggio!"},
        // {id:"18", from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"yey!!"},
        // {id:"19", from:{avatar:"https://placeimg.com/40/40/any", name:"Stefania", id:3}, text:"wow!!"},
        // {id:"20", from:{avatar:"https://placeimg.com/40/40/any", name:"Stefania", id:3}, text:"sto scrivendo un messaggio!"},
        // {id:"21", from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"yey!!"},
        // {id:"22", from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"wow!!"},
        // {id:"23", from:{avatar:"https://placeimg.com/40/40/any", name:"Paolo", id:2}, text:"sto scrivendo un messaggio!"},
        // {id:"24", from:{avatar:"https://placeimg.com/40/40/any", name:"Paolo", id:2}, text:"yey!!"},
        // {id:"25", from:{avatar:"https://placeimg.com/40/40/any", name:"Francesco", id:1}, text:"wow!!"}
      ],
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
