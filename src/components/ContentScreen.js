/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef} from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { Dimensions } from 'react-native';
import TestFlatList from './TestFlatList';
import AutoHeightImage from 'react-native-auto-height-image';
import MasonryList from '@react-native-seoul/masonry-list';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ContentScreen(props) {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [limitValue, setLimitValue] = useState(15);
    const [initialIndex, setInitialIndex] = useState(0);
    const [isFilter, setIsFilter] = useState(false);
    var DATA_KEY = props.dataType === "GIF" ? "gifs" : "stickers";
    var detailsDataType = props.dataType === "GIF" ? "GIF" : "STICKER";
    var placeHolder = DATA_KEY === "gifs" ? "Search Giphy" : "Search Stickers";
    var isMainScreen = props.screenType === "main" ? true : false ;

    const fetchData = async () => {
        try {
            const API_KEY = "pFL1lVTnSVlOezOWbJTigeLpEkMoTTpw";
            const BASE_URL = "https://api.giphy.com/v1/";
            const resJson = await fetch(`${BASE_URL}${DATA_KEY}/trending?api_key=${API_KEY}&limit=${limitValue}&offset=${initialIndex}`);
            const res = await resJson.json();
            var newData = data.concat(res.data)
            setData(newData);
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {     
        //setLimitValue(limitValue);
        fetchData();
    }, []);

    const viewDetailsScreen = ( data ) => {
          props.parentProps.navigation.navigate("Details",{"url":data, "dataType":detailsDataType});
    };
    
    const getFilteredGifData = async (initialFilter) => {
        try {
            const API_KEY = "pFL1lVTnSVlOezOWbJTigeLpEkMoTTpw";
            const BASE_URL = "http://api.giphy.com/v1/";
            var resJson;
            if(searchValue == ""){
                 resJson = await fetch(`${BASE_URL}${DATA_KEY}/trending?api_key=${API_KEY}&limit=${limitValue}&offset=${initialIndex}`);
            } else{
                 resJson = await fetch(`${BASE_URL}${DATA_KEY}/search?api_key=${API_KEY}&q=${searchValue}&limit=${limitValue}&offset=${initialIndex}`);
            } 
            const res = await resJson.json();
           if(initialFilter){
                setData(res.data); 
            } else{
                var newData = data.concat(res.data);
                setData(newData);
           } 
        } catch (error) {
            console.warn(error);
        }
    };
    const scrollEndFUnction = () => {
        setInitialIndex(initialIndex + 15);
        if (isFilter) {
            getFilteredGifData(false);
        } else {
            fetchData();
        }
    };
    return (
        <View style={styles.view}>
          {isMainScreen ? (<View style={styles.searchContainer}>
                <TextInput
                    placeholder = {placeHolder}
                    placeholderTextColor = "black"
                    style = {styles.textInput}
                    onChangeText = {setSearchValue}
                    value = {searchValue}
                />                      
                <TouchableOpacity 
                    style={styles.btnStyle}
                    onPress = {()=> {
                        setIsFilter(true);
                        setInitialIndex(0);
                        getFilteredGifData(true);
                    }}
                >
                    <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
          </View>) : <View></View>}
          <View style={styles.listContainer}>
          {isMainScreen ? 
            (<View style={styles.headerBg}>
                <Text style={styles.headingText}>{`${DATA_KEY} collection`}</Text>
            </View>) : <View></View>}
            {data.length > 0 ? <TestFlatList renderData={data} viewDetailsScreen={viewDetailsScreen} scrollEndFUnction={scrollEndFUnction}/> : <View></View>}         
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
    searchContainer:{
        width: "100%",
        padding : 5,
        flexDirection : "row",
        backgroundColor:"#505050"
    },
    btnText: { 
        color : "white",
        fontWeight:"bold",
        fontSize:14,
    },
    btnStyle: {
        width: "30%",
        height:40,
        backgroundColor : "black",
        justifyContent : "center",
        alignItems : "center",
        
    },
    textInput: {
        width: "70%",
        backgroundColor : 'white',
        height:40,
        borderWidth:1,
    },
    image: {
        width: (windowWidth/2) - 20,
        height: 150,
        
    },
    headingText: {
        fontSize : 25,
        fontWeight : "bold",
        color : "white",
        padding :10,
    },
    listContainer:{
        flex:1,
        backgroundColor: "#505050"
    },
    
});
