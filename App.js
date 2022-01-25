/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import StickerScreen from './src/components/StickerScreen';
import ProfileScreen from './src/components/ProfileScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import DetailsScreen from './src/components/DetailsScreen';


const HomeStack = createNativeStackNavigator();
const headerStyle = {
  headerTitleAlign: 'center' ,
  headerStyle: {
    flex: 1,
    textAlign: 'center',
  }};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={HomeScreen}  options={headerStyle}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} options={headerStyle} />
    </HomeStack.Navigator>
  );
}

const StickerStack = createNativeStackNavigator();

function StickerStackScreen() {
  return (
    <StickerStack.Navigator>
      <StickerStack.Screen name="Stickers" component={StickerScreen} options={headerStyle}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} options={headerStyle}/>
    </StickerStack.Navigator>
  );
}

const profileStack = createNativeStackNavigator();

function profileStackScreen() {
  return (
    <profileStack.Navigator>
      <profileStack.Screen name="Profile" component={ProfileScreen} options={headerStyle}/>
    </profileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
        <Tab.Navigator 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = 'home';
              size = focused ? 25 : 20;
            } else if (route.name === 'StickersTab') {
              iconName = 'sticky-note';
              size = focused ? 25 : 20;
            }else if (route.name === 'ProfileTab') {
              iconName = 'user';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          },
		    headerShown: false,
        tabBarShowLabel : false,
        })}
        >
            <Tab.Screen name="HomeTab" component={HomeStackScreen} />
            <Tab.Screen name="StickersTab" component={StickerStackScreen} />
            <Tab.Screen name="ProfileTab" component={profileStackScreen} />
          </Tab.Navigator>
         
    </NavigationContainer>
  );
  
}