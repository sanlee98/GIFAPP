/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
export class TestFlatList extends Component {

    constructor(props){
        super(props);
    }

   
    renderItem = ( item ) => {
        return (
            <TouchableOpacity 
            style={styles.imageContainer}
            onPress={() => this.props.viewDetailsScreen(item.item.images.original.url)}>
                <Image
                    resizeMode="stretch"
                    //width={150}
                    style={styles.image}
                    source={{ uri: item.item.images.original.url }}
                />
            </TouchableOpacity>
            
        );
    };
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.props.renderData}
                    renderItem={(item) => this.renderItem(item)}
                    keyExtractor={(item)=> item.id}
                    numColumns={2}
                    removeClippedSubviews={false}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => this.props.scrollEndFUnction()} 
                />              
            </View>
        );
    }
}

export default TestFlatList;
const styles = StyleSheet.create({
    image: {
        width: (windowWidth/2) - 20,
        height: 150,
        
    },
    imageContainer:{
        borderRadius : 10,
        borderWidth:2,
        margin:5,
        overflow:"hidden"
    }
});
