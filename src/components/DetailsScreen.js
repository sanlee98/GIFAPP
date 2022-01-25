/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef} from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Text, TouchableOpacityComponent } from 'react-native';
import { Dimensions } from 'react-native';
import ContentScreen from './ContentScreen';

import AutoHeightImage from 'react-native-auto-height-image';
import MasonryList from '@react-native-seoul/masonry-list';


const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen(props) {
    return (
        <View style={styles.view}>
          <View style={styles.dtImageContainer}>
                <Image style={styles.dtImage} source={{ uri: props.route.params.url }} resizeMode="contain"/>
          </View>
          <View style={styles.dtlistContainer}>
            <View style={styles.dtText}>
               <Text style={styles.textStyle}>Trending Items</Text>
            </View>
            <ContentScreen dataType={props.route.params.dataType} parentProps={props} screenType={"details"}/>
          </View>        
        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#505050',
    },
    textStyle: { 
        color : "white",
        fontSize : 25,
        fontWeight:"bold",
        
    },
    dtImage: {
        width:200,
        height: 250,
         backgroundColor:"white"
    },
    dtlistContainer:{
        flex:3
    },
    dtImageContainer:{
        flex:3 , 
        justifyContent:"center",
        alignItems:"center"
    },
    dtText:{
        alignItems:"center",
        padding:10
    }
});
