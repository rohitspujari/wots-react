import React, {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput
} from 'react-native';


class Itemlist extends Component{
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      datasource: ds.cloneWithRows(['A','B','C'])
    };
  }

  
  render(){
    return(
      <View style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignSelf: 'center'
      }}>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)} />
        </View>
    );
  }

  renderRow(rowData){
    return(
      <Text style={{
        color: '#333',
        backgroundColor: '#fff'
      }}>
      {rowData}
      </Text>
    );
  }
}




module.exports = Itemlist;
