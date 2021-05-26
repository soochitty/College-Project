import React, {Component} from 'react';
import { Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform  , FlatList} from 'react-native';
import { MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';

class DetailsScreen extends Component {


constructor(props){
	super(props);
	this.state ={
     isLoading: true,
		usercontact: '',
		username: '',
		useremail: ''
	}
}


componentDidMount() {
    

        fetch('https://a14project2.000webhostapp.com/userdetail.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
           //  Username: responseJson.name,
             //useremail: responseJson.email,
             //usercontact: responseJson.contact
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
 
<View >
  
       <FlatList
       
          data={ this.state.dataSource }
  
          renderItem={({item}) => (<View tyle={{flex:1}} >
          <Image source={require('../images/Profile.png')} style={{ justifyContent: 'center',marginBottom: 40, width: 120, height: 120,}} />
          <Text style={styles.listItem}> <Text style={{fontWeight: 'bold',}}> Name :</Text>  {item.name}</Text>
          <Text style={styles.listItem}> <Text style={{fontWeight: 'bold',}}> Contact :</Text> {item.contact}</Text>
          <Text style={styles.listItem}> <Text style={{fontWeight: 'bold',}}> Email :</Text> {item.email}</Text></View>)}

          keyExtractor={(item, index) => index}
         
         />
          <TouchableOpacity onPress={() => alert('Edit your information')} style={styles.fab}>
          <Text style={styles.fabIcon}>Edit</Text>
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
  fontSize: 20,
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"99%",
    flex: 1,
    alignSelf:"center",
    flexDirection:"column",
    borderRadius:5
  },
fab: {
    position: 'absolute',
    marginBottom: -100,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#000000',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 20,
    color: 'white'
  }
});

export default DetailsScreen;