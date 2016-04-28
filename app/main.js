 import React, {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
var Parse = require('parse/react-native')
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tab = require('./components/tabs/tab.ios');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  tab: Tab
};


var Main = React.createClass({

  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function () {
    return <Navigator
    style={styles.container}
    initialRoute={{name:'signin'}}
    renderScene={this.renderScene}
    confgureScene={()=>{return Navigator.SceneConfigs.FloatFromRight;}}/>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }

});

module.exports = Main;
