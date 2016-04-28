

import React, {
  Component,
  StyleSheet,
  MapView,
  View,
  Text
} from 'react-native';

var Styles = StyleSheet.create({
  container:
  {
    flex:1
  },
  map: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  placeWrap: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  }
});


//Create a component
var Search = React.createClass({


  render: function(){
    var pins = [{
      latitude: 0,
      longitude: 0
    }];
    return<View style={Styles.container}>
    <MapView
    annotations={pins}
    onRegionChangeComplete={this._onRegionChangeComplete}
    style={Styles.map}>
      </MapView>
    <View style={Styles.placeWrap}>
    <Text>Reviews</Text>
    </View>
    </View>

  },
  getInitialState: function(){
    return {
      latitude: 0,
      longitude: 0
    }
  },
  _onRegionChangeComplete: function(region){
    this.setState({
      pin:{
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  }

});

module.exports = Search;
