import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';
import SafeAreaView from 'react-native-safe-area-view';
import { Avatar } from 'react-native-elements';





class profileScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: []
    }
  }

  getUserData = () => {
    let ref = firebase.database().ref('Users');
    ref.on('value' , snapshot =>{
      const state = snapshot.val();
      this.setState({users: state});
    })
   
  }

  componentDidMount(){
    this.getUserData();
  }

  render() {
    const {users} = this.state;
      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.container}>
        <Avatar
        rounded
        size="xlarge"
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
     
          />
          <View>
          {
            users
            .map((user, i) =>
              <View style={styles.welcome} key={i}>
              <Text style={styles.userName}>{user.Naam}</Text>
              <Text style={styles.user}>@{user.Gebruikersnaam}</Text>
              </View>
              
           )
          }
          </View>
        </View>
        </SafeAreaView>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    welcome:{
      marginTop: 15,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName:{
      fontWeight: '800',
    }
    

  });
  
  export default profileScreen;