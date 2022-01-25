/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef} from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import MasonryList from '@react-native-seoul/masonry-list';
import ContentScreen from './ContentScreen';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen(props) {
    
    return (
        <View style={{flex:1}}>
             <ContentScreen dataType = {"GIF"} parentProps = {props} screenType = {"main"}/>
        </View>
    );
}
