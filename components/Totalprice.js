import React, {Component} from 'react';
import { Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform, FlatList} from 'react-native';


class Totalprice extends Component {
constructor(props) {
super(props);
this.state = { 
    isLoading: true
}
}

 componentDidMount() { fetch('https://a14project2.000webhostapp.com/totalprice.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    userid: '19', 
 
  })
   }) .then((response) => response.json())
         .then((responseJson) => {this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
             console.log(this.state.dataSource);
           });
         })
         .catch((error) => {
           console.error(error);
         });
console.log();

 }
render() {


    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
 
<View >
  
      <Text style={{fontSize: 20, marginBottom: -7,}}>  {this.state.dataSource}/-</Text>
    
</View>
            
    );
}


}

export default Totalprice;