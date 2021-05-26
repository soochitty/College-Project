import React, {Component} from 'react';
import { ImageBackground, Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform  } from 'react-native';



class SignUp extends Component {

constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: '',
      UserContact: '',
 
    }
 
  }



register = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserName }  = this.state ;
 const { UserContact }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('https://a14project2.000webhostapp.com', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,

    name : UserName,

    contact : UserContact,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'success')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('My Mess');
 
        }
        else{
 
          alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 }
   
  render() {
     const {navigate} = this.props.navigation;
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

     <Image source={require('../images/logo3.png')} style={{ marginBottom: 40,}} />
      
      <TextInput 
      placeholder="User Name"
      onChangeText = {UserName => this.setState({UserName})}
      style={styles.textinput}
       />
       <TextInput 
      placeholder="User Email"
      onChangeText = {UserEmail => this.setState({UserEmail})}
      style={styles.textinput}
       />
       <TextInput 
      placeholder="User Contacts"
      onChangeText = {UserContact => this.setState({UserContact})}
      style={styles.textinput}
       />

       <TextInput 
      placeholder="Enter Password"
      secureTextEntry={true}
      onChangeText = {UserPassword => this.setState({UserPassword})}
      style={styles.textinput}
       />
      <Button
        title="Sign Up"
        style={styles.button}
        style={{backgroundColor:'#000000'}}
        onPress={() => navigate('My Mess')}
        //onPress={this.register}
      />
      <Text style={{marginTop: 70, marginBottom: -80,}} >Already Registered ?</Text>  
      <TouchableOpacity style={{marginTop: 100,}}
      onPress={() => navigate('login')}>
       <Text style={{color: '#0098eb',fontSize: 20,}} >Log In</Text>
       </TouchableOpacity>
    </View>
  );
}



}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',

    },
    textinput: {
        textAlign: 'center',
        marginBottom: 15,
        height: 40,
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        fontSize: 40,
        padding: 10,
        borderWidth: 1,
        width: 200,
        backgroundColor: '#000000',
        alignItems: 'center',

    },
})




export default SignUp ;