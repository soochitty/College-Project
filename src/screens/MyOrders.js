import React, {Component} from 'react';
import { Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform ,FlatList } from 'react-native';


class MyOrders extends Component {

	constructor(props) {
super(props);
this.state = { 
    isLoading: true
}
}

  componentDidMount() {
    
        fetch('https://a14project2.000webhostapp.com/orders.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    userid: '19', 
    paid: '1',
 
  })
   }) .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
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
 
<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource }
  
          renderItem={({item}) => (<View style={styles.listItem}>
      <Image source={{uri:item.image_path}}  style={{width:60, height:60,borderRadius:20}} />
      <View style={{flex:1}}>
        <Text style={{fontWeight:"bold", fontSize: 16}}>   {item.item_name}</Text>
      </View>
    </View>)}

          keyExtractor={(item, index) => index}
         
         />
    
    
</View>
            
    );
  } 

}
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
 
},
 
 listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"99%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },

});

export default MyOrders;