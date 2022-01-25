/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function profileScreen(props) {

  const viewDetailsScreen = (screenType) => {
    props.navigation.navigate(screenType);
  }
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style={styles.name}>
                   Sanjay Rajalingam
                </Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>viewDetailsScreen("HomeTab")}>
                <Text style={styles.name}>Search GIF</Text>  
              </TouchableOpacity> 
            </View>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>viewDetailsScreen("StickersTab")}>
                <Text style={styles.name}>Search Sticker</Text>  
              </TouchableOpacity> 
            </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#505050",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:20
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:10,
    backgroundColor: "#505050",
  },
  name: {
    color:"white",
    fontWeight:"bold",
    fontSize:20,
  }
});
