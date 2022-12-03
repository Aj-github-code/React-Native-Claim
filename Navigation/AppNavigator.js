import React, { useState, useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TitleScreen from '../Screens/TitleScreen';
import NewVehicle from '../Screens/NewVehicle';

import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ClaimDetails from '../Screens/ClaimDetails'

import ThemeContext from '../config/ThemeContext';
export default function AppNavigator() {

    const theme = useContext(ThemeContext);
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator >
        <Stack.Screen name="About us"  style={[{backgroundColor: theme.background}]} component= {TitleScreen}/>
        <Stack.Screen name="Profile" component= {ProfileScreen}/>
        <Stack.Screen name="Home" component= {HomeScreen}/>
        <Stack.Screen name="New Vehicle" component= {NewVehicle}/>
        <Stack.Screen name="Claim Details" component= {ClaimDetails}/>
    </Stack.Navigator>
  )
}
