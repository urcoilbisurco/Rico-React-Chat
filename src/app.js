var React = require('react');
var ReactDOM = require('react-dom');

var Rico= require('./components/rico/rico');
var styles=require('./style.scss');
var env=require("./_env.js")

//initialize firebase
firebase.initializeApp(env.firebase);

ReactDOM.render(<Rico/>, document.getElementById('app'));
