import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';

class locationScreen extends Component {
  onTestClick = ()=>{
   const dbRef = firebase.database().ref("testdata")
    dbRef.set("hello worlf from app")
  }
  
  render() {
      return (
        <ScrollView>
          
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
            <Button title={"Create test record"} onPress={this.onTestClick}></Button>
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
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 15,
    },
    button: {
  
    }
  });
  
  export default locationScreen;