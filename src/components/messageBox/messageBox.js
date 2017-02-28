var React = require('react');
var Button = require("./button/button");
var css=require("./messageBox.scss");

const MessageBox = React.createClass({
  handleSendClick:function(e){
    value=this.textarea.value.trim()
    if(value.length>0){
      this.props.onSubmit({
        from:this.props.user,
        text:value,
        id:Math.random(100)*100,
      });
      this.textarea.value=""
      this.textarea.focus()
    }else{

    }
  },
  handleCheckSend:function(e){
    if(e.key == 'Enter'){
      e.preventDefault();
      return this.handleSendClick() & false;
    }
  },
  handlePlusClick:function(e){
    //do something here!
  },
  render:function() {
    return (
      <div className={css.messageBox}>
        <textarea onKeyPress={this.handleCheckSend} placeholder="Write here..." className={css.textarea}
        ref={(input) => { this.textarea = input; }}
        ></textarea>
        <div className={css.actions}>
          <Button type="square" onClick={this.handlePlusClick}>+</Button>
        </div>
      </div>
    );
  },
});

module.exports=MessageBox;
