import React, {Component} from 'react';
import { Image, Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import DetailsScreen from './DetailsScreen';
import MyOrders from './MyOrders';
import ItemsList from '../../components/ItemsList';
import Cart from '../../components/Cart';

class Home extends Component{


  
render(){
  //const { navigation } = this.props;  
  //const user_name = this.props.navigation.getParam('Email','[]');
  //alert(UserEmail);  

  const Tab = createMaterialBottomTabNavigator();

return(
<Tab.Navigator
  activeColor="#ffffff"
  inactiveColor="#f0edf6"
  barStyle={{ backgroundColor: '#000000' }}>
        <Tab.Screen name="ItemsList" component={ItemsList} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}/>
        <Tab.Screen name="cart" component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={30} />
          ),
        }} />
        <Tab.Screen name="detaillscreen" component={DetailsScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}/>
        <Tab.Screen name="order" component={MyOrders} 
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({ color }) => (
            <Fontisto name="shopping-bag" color={color} size={20} />
          ),
        }}/>
        
      </Tab.Navigator>
    
	);
}
}


export default Home;