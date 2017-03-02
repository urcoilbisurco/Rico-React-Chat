var React = require('react');
var Button=require("../UI/button/button");
var Input=require("../UI/input/input");
var css=require("./settingsPage.scss");

const SettingsPage = React.createClass({
  onSave:function(){
    this.props.onSave({
      username:this.input_username.value(),
      id:this.input_id.value()
    })
  },
  render:function(){
    return (
      <div  className={css.settings}>
        <Input label="Username" ref={(ref) => this.input_username = ref} value={this.props.user.name}/>
        <Input label="ID" ref={(ref) => this.input_id = ref} value={this.props.user.id}/>
        <Button type="square" onClick={this.onSave}>Save</Button>
      </div>
    );
  },
});

module.exports=SettingsPage;
