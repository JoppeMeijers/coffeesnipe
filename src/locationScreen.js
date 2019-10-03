import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';
import {getUser} from './api/usersApi';


class locationScreen extends Component {
  state = {
    username: ""
  };



  onTestClick = ()=>{
   const dbRef = firebase.database().ref("testdata")
    dbRef.set("hello worlf from app")
  }

  readUserData =() => {
    console.log('test oke');
    firebase.database().ref('/Users/1').on('value', function (snapshot) {
        test = snapshot.val();
        this.setState({ username: test });
        console.log(this.state.username);
    });
  }


componentDidMount() {

}





  render() {
      return (
        <ScrollView>
          
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>{this.state.username}</Text>
            <Button title={"Create test record"} onPress={this.readUserData}></Button>
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
      marginTop: 300,
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