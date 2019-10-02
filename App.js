import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './src/homeScreen';
import LocationScreen from './src/locationScreen';
import CoffeeScreen from './src/coffeeloversScreen';
import ProfileScreen from './src/profileSceen';

import IconHome from './src/assets/images/home.png'
import IconLocation from './src/assets/images/location.png'

import Logotitle from './src/components/logo';




const HomeStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: Logotitle,
        headerStyle: {
          backgroundColor: '#7E4338',
  
        },
    
       
       
        //header: null //this will hide the header
      },
    },
    Snipe: {
      screen: CoffeeScreen,
      navigationOptions:{
        headerTitle: Logotitle,
        headerStyle: {
          backgroundColor: '#7E4338',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
  });
  
  const AppNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions:({navigation})=>({
        tabBarIcon:({focused,horizontal,tintColor})=>{
        const {routeName} = navigation.state;
  
        return <Image source={IconHome} style={{width:15,height:15}} />
      },
      header: null //this will hide the header
      })
    },
    Location: {
      screen: LocationScreen,
      navigationOptions:({navigation})=>({
        tabBarIcon:({focused,horizontal,tintColor})=>{
        const {routeName} = navigation.state;
  
        return <Image source={IconLocation} style={{width:15,height:15}} />
      },
      })
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions:({navigation})=>({
          tabBarIcon:({focused,horizontal,tintColor})=>{
          const {routeName} = navigation.state;
    
          return <Image source={IconLocation} style={{width:15,height:15}} />
        },
        })
      },
  },{
    initialRouteName: 'Home'
  }) 
  

  export default createAppContainer(AppNavigator);