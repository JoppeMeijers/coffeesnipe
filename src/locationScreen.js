import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';


class locationScreen extends Component {
    render() {
      return (
        <ScrollView>
          
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Location!</Text>
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
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      marginTop: 50,
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