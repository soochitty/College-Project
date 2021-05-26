import React, {Component} from 'react';
import { Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform  } from 'react-native';


class Login extends Component{


constructor(props) {
 
    super(props)
 
    this.state = {

      UserEmail: '',
      UserPassword: '',
       
    }
 
  }


  login = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('https://a14project2.000webhostapp.com/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
          alert(UserEmail);
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('My Mess', { Email: UserEmail });
 
        }
        else{
 
          alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 }
 
  

render(){
const {navigate} = this.props.navigation;
return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Image source={require('../images/logo3.png')} style={{ marginBottom: 40,}} />

<TextInput 
      placeholder="User Email"
      onChangeText = {UserEmail => this.setState({UserEmail})}
      style={styles.textinput}
       />

       <TextInput 
      placeholder="Enter Password"
      secureTextEntry={true}
      onChangeText = {UserPassword => this.setState({UserPassword})}
      style={styles.textinput}
       />

       <Button
        title="Login"
        style={styles.button}
        style={{backgroundColor:'#000000', borderRadius: 5, width: 200,}}
        //onPress={() => navigate('home')}
        // will work on this later !
        onPress={this.login}
      />

      <Text style={{marginTop: 70, marginBottom: -80, fontSize: 15,}} >New User ?</Text>  
      <TouchableOpacity style={{marginTop: 100,}}
      onPress={() => navigate('signup')}>
       <Text style={{color: '#0098eb',fontSize: 15,}} >Click Here to Sign up</Text>
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
   
})

export default Login;