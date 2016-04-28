'use strict';



import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    fontSize: 15,
    textAlign: 'center'
    //color: '#000000'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop:20,
    marginBottom:50
    //justifyContent: 'center',
    //alignItems: 'stretch'
    //backgroundColor: '#000000'
  },
  info: {
    flex: 1,

    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: 'blue'
  },
  rating: {
    flex: 10
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: '#000000'
  },
  comment: {
    flex: 2
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: '#000000'
  },
  submit: {
    flex: 3,
    //flexDirection: 'row',
    justifyContent: 'space-around'

    //alignItems: 'center'
    //backgroundColor: '#000000'
  }
});

var Reviews = React.createClass({
  render: function(){
    return <View style={styles.container}>
      {this.infoSection()}
      {this.ratingSection()}
      {this.commentSection()}
      {this.submitButton()}
    </View>
  },
  getInitialState: function(){
    return {}
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  },
  infoSection: function() {
    return <View
    style={[this.border('red'),styles.info]}>
    <Text>
    Info
    </Text>
    </View>
  },
  ratingSection: function() {
    return <View
    style={[this.border('blue'),styles.rating]}>
    <Text>
    Ratings
    </Text>
    </View>
  },
  commentSection: function() {
    return <View
    style={[this.border('yellow'),styles.comment]}>
    <Text>
    Comments
    </Text>
    </View>
  },
  submitButton: function() {
    return <TouchableHighlight
    underlayColor="gray"
    onPress={this._onPressSubmit}
    style={[this.border('green'),styles.submit]}>
    <Text style={styles.description}>
    Post Review
    </Text>
    </TouchableHighlight>
  },
  _onPressSubmit: function(){
    console.log('start was pressed');
  }
});

module.exports = Reviews;
