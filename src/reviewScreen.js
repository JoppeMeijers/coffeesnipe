import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Avatar, Divider,Button, List, ListItem, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';





class reviewScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: []
    }
  }

  name = this.props.navigation.getParam('name');
  location = this.props.navigation.getParam('location');
  subject = this.props.navigation.getParam('subject');
  desc = this.props.navigation.getParam('desc');
  date = this.props.navigation.getParam('date');
  rating = this.props.navigation.getParam('rating');

  
  render() {
    const {users} = this.state;
    let username = 'MeijersNL';

      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.container}>

          <Text style={styles.locationName}>{this.name}</Text>  
          <Text style={styles.date}>{this.date}</Text>
           <Rating type='star' ratingCount={5} imageSize={10} startingValue={this.rating} readonly style={styles.rating} />

             <Divider style={styles.divider} />
              <Text style={styles.subjectName}>{this.subject}</Text>
            <Text>{this.desc}</Text>

            <Divider style={styles.divider} />
            <View style={styles.locationDetails}>
            <Text style={styles.location}> <Icon name="map-marker" size={18} color="#d85454" /> {this.location}</Text>
            <Text style={styles.right}>Routebeschrijving  <Icon name="arrow-right" size={13} color="#0000FF" /> </Text>
            </View>
            <Button style={styles.changeButton}  title="Bewerk review" />
            <Button style={styles.changeButton}  title="Voeg foto toe" />

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
        paddingTop: 20,
    },
    welcome:{
      marginTop: 15,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName:{
      fontWeight: '800',
    },
      information:{
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,

    },
    block:{
      marginLeft: 35,
      marginRight: 35,
      alignItems: 'center',
      textAlign: 'center',
    },
    counting:{
      marginTop: 10,
      fontWeight: '800',
      fontSize: 21,
    },
    title:{
      color: '#000',  
      textAlign: 'left',
      fontSize: 15,
      fontWeight: '600',
      marginTop: 30,
      marginLeft: 20,
    },
    reviews :{
      marginLeft: 10,
    },
    rating:{
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'flex-start',
      },
  });
  
  export default reviewScreen;