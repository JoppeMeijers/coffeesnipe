import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button,ImageBackground, StatusBar, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';



class Test extends Component {

    readUserData =() => {
        console.log('test oke');
        firebase.database().ref('Users/').on('value', function (snapshot) {
            test = snapshot.val();
           return test[1].Gebruikersnaam;
            console.log(username);
        });
    }
    render() {
        const username = firebase.database().ref('Users/').on('value', function (snapshot) {
                test = snapshot.val();
               return test[1].Gebruikersnaam;
             
            });
  
      return (
        <Text style={styles.container}>{username}</Text>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        marginTop: 200,
    },
  });

  
  export default Test;