import React, { useState, useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import ThemeContext from '../config/ThemeContext';
export default function AppNavigator() {

    const theme = useContext(ThemeContext);
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator >
        <Stack.Screen name="Home"  style={[{backgroundColor: theme.background}]} component= {HomeScreen}/>
        <Stack.Screen name="Profile" component= {ProfileScreen}/>
    </Stack.Navigator>
  )
}
