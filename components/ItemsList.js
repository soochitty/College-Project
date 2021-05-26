import React, {Component, useState} from 'react';
import { Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform, FlatList} from 'react-native';
//import Cart from './Cart';

class ItemsList extends Component{

constructor(props) {
super(props);
this.state = { 
    isLoading: true
}
this.press = this.press.bind(this);
}

press(id) {
 
fetch('https://a14project2.000webhostapp.com/cart.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    ItemId: id,
    userid: '19', 
 
  })
   }).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'added')
        {
          alert('Added to Cart');
        }
        
        else{
 
          alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
}


  componentDidMount() {
    
        fetch('https://a14project2.000webhostapp.com/home.php')
         .then((response) => response.json())
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
        <Text>   Rs. {item.price}/-</Text>
      </View>
      <TouchableOpacity onPress={() => this.press(item.item_id)} style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green", fontWeight:"bold", fontSize: 15}}>Add</Text>
      </TouchableOpacity>
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
export default ItemsList ;