import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView, Alert} from 'react-native';
import RNShake from 'react-native-shake';


class locationScreen extends Component {
  componentWillMount() {
    RNShake.addEventListener('ShakeEvent', () => {
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    });
  }
 
  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }



  render() {
      return (
        <ScrollView>
          
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>Shake it</Text>
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