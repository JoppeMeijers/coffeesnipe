import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';


class profileScreen extends Component {
    username = firebase.database().ref('Users/').on('value', function (snapshot) {
        test = snapshot.val();
       return test[1].Gebruikersnaam;
     
    });
  render() {

      return (
        <ScrollView>
          
        <View style={styles.container}>
          <View>
           <Text>{this.username}</Text>

          </View>
        </View>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome:{
        marginTop: 300,
        color: 'black',
    }
  });
  
  export default profileScreen;