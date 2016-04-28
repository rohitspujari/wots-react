import React, {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var Parse = require('parse/react-native')
var Button = require('../common/button');

var Signin = React.createClass({

  getInitialState: function(){
    return{
      username: '',
      password: ''
    }
  },
  render: function(){
    return <View style={Styles.container}>

    <TextInput placeholder='username'
     onChangeText={(text)=>this.setState({username: text})}
     value={this.state.username}
     style={Styles.input}/>
    <Text>{this.state.password}</Text>

    <TextInput placeholder='password'
     onChangeText={(text)=>this.setState({password: text})}
     value={this.state.password}
     secureTextEntry={true} style={Styles.input}/>
    <Button text={'Sign In'} onPress={this.onSigninPress}/>
    <Button text={'I need an account'} onPress={this.onSignupPress}/>
    </View>
  },
  onSigninPress: function(){
    this.props.navigator.immediatelyResetRouteStack([{ name:'tab' }]);
  },
  onSignupPress: function(){
    this.props.navigator.push({name:'signup'});
  }

});

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    //borderRadius: 5,
    margin: 5,
    width: 300,
    alignSelf: 'center'

  }
});



module.exports = Signin;
