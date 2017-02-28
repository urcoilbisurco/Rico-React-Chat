var React = require('react');
var ReactDOM = require('react-dom');

var Rino= require('./components/rino/rino');
var styles=require('./style.scss');
var env=require("./_env.js")

//initialize firebase
firebase.initializeApp(env.firebase);

ReactDOM.render(<Rino/>, document.getElementById('app'));
