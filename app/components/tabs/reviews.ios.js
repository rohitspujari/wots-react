//'use strict';



import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var Swiper = require('react-native-swiper');
var Itemlist = require('../common/itemlist');

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
    marginBottom:50,
    justifyContent: 'center',
    alignItems: 'stretch',
    
    //backgroundColor: '#000000'
  },
  info: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center'
    //backgroundColor: 'blue'
  },
  list: {
    flex: 4,

    justifyContent: 'center',
    alignItems: 'center'
    //backgroundColor: 'blue'
  },
  rating: {
    flex: 10
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: '#000000'
  },
  comment: {
    flex: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'gray'
  },
  submit: {
    flex: 3,
    //flexDirection: 'row',
    justifyContent: 'space-around'

    //alignItems: 'center'
    //backgroundColor: '#000000'
  },
  wrapper: {
    //padding: 50,
    //marginBottom: 50
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

var Reviews = React.createClass({
  render: function(){
    return <View style={[styles.container, this.border('blue')]}>
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
      //borderColor: color,
      //borderWidth: 4
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
  listSection: function() {
    return <View
    style={[this.border('red'),styles.list]}>
    <Text>
    List Section
    </Text>
    </View>
  },
  ratingSection: function() {
    return <Swiper
    style={[styles.wrapper, this.border('yellow')]}
    showsButtons={false} showsPagination={true} height={450}>
      <View style={[styles.slide]}>
        {this.infoSection()}
        {this.listSection()}

        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={[styles.slide]}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={[styles.slide]}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>


  },
  commentSection: function() {
    return <View
    style={[this.border('purple'),styles.comment]}>
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
