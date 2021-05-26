import React, {Component} from 'react';
import { Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform, FlatList} from 'react-native';

import Totalprice from './Totalprice';


class Cart extends Component{
constructor(props) {
super(props);
this.state = { 
    isLoading: true
}
}
// to remove the item from cart
press(id) {
 
fetch('https://a14project2.000webhostapp.com/removecart.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    cartid: id, 
 
  })
   }).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'removed')
        {
          alert('Removed From Cart');
        }
        
        else{
 
          alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
}



  componentDidMount() {
    
        fetch('https://a14project2.000webhostapp.com/getcart.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    userid: '19', 
 
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
        <Text>   Rs. {item.price}/-</Text>
      </View>
      <TouchableOpacity onPress={() => this.press(item.cart_id)} style={{height:50,width:50, alignItem: 'left'}}>
        <Text style={{color:"red", fontWeight:"bold", fontSize: 30}}>-</Text>
      </TouchableOpacity>
    </View>)}

          keyExtractor={(item, index) => index}
         
         />
         <Text style={{fontSize: 20,padding: 20,fontWeight: 'bold'}}>Total price :<Totalprice/></Text>
         <TouchableOpacity onPress={() => alert('Make Payment through Paytm')} style={styles.fab}>
          <Text style={styles.fabIcon}>pay</Text>
        </TouchableOpacity>
    
    
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
  fab: {
    position: 'absolute',
    marginBottom: -5,
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
    elevation: 8
  },
  fabIcon: {
    fontSize: 17,
    color: 'white'
  }
});


export default Cart ;


