import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';


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
          
        <View style={styles.container}>
          <View>
          {
            users
            .map((user, i) =>
              <View style={styles.welcome} key={i}>
              <Text >{user.Naam}</Text>
              <Text >{user.Gebruikersnaam}</Text>
              <Text >{user.Mail}</Text>
              <Text >{user.Telefoon}</Text>
              <Text >{user.Locatie}</Text>
              </View>
              
           )
          }
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