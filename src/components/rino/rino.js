var React = require('react');
var ReactFireMixin = require("reactfire");

var ListHeader= require("../header/listHeader");
var MessageList=require("../messageList/messageList");
var MessageBox=require("../messageBox/messageBox");
var SettingsPage=require("../settingsPage/settingsPage");

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
      open_settings:false,
      user:{name:"Francesco", id:1, avatar:"https://placeimg.com/40/40/any"}
    }
  },
  handleSubmit:function(message){
    this.firebaseRefs['messages'].push(message);
  },
  handleToggleChat:function(){
    this.setState({
      open:!this.state.open
    })
  },
  handleSettingsClick:function(){
    this.setState({
      open_settings:true
    })
  },
  handleSaveSettings:function(opts){
    this.setState({
      user:{name:opts.username, id:opts.id, avatar:"https://placeimg.com/40/40/any"},
      open_settings:false
    })
  },
  render:function() {
    return (
      <div className={css.main}>
        <div className={css.content}>
          <ListHeader onClick={this.handleToggleChat} onSettingsClick={this.handleSettingsClick} title={this.state.title}/>
          { !this.state.open_settings && this.state.open &&
            <span>
            <MessageList title={this.state.title} user={this.state.user} messages={this.state.messages}/>
            <MessageBox user={this.state.user} onSubmit={this.handleSubmit}/>
            </span>
          }
          {this.state.open_settings &&
            <SettingsPage user={this.state.user} onSave={this.handleSaveSettings}/>
          }
        </div>
      </div>
    );
  },
});

module.exports=Rino;
