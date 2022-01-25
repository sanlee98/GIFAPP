/* eslint-disable prettier/prettier */
import React from 'react';
import { View} from 'react-native';import { Dimensions } from 'react-native';
import ContentScreen from './ContentScreen';

export default function StickerScreen(props) {
    return (
        <View style={{flex:1}}>
             <ContentScreen dataType = {"STICKER"} parentProps = {props} screenType = {"main"} />
        </View>
    );
}