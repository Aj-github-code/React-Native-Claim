import React, { useEffect, useState } from 'react';

import AppNavigator from './Navigation/AppNavigator';

import { EventRegister } from "react-native-event-listeners"
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ThemeContext from './config/ThemeContext';
import Theme from './config/Theme';

import TitleScreen from './Screens/TitleScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [mode, setMode] = useState(false);
  
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  })
  return(
    <ThemeContext.Provider value={mode=== true ? Theme.dark : Theme.light}>

    <NavigationContainer theme = {mode === true ? DarkTheme : DefaultTheme}>
      
    <Tab.Navigator 
             screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                
                if (route.name === 'Home') {
                  iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
                
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={TitleScreen} />
            <Tab.Screen name="Settings" component={AppNavigator} />
              {/* <Tab.Screen name="Feed" component={Feed} />
              <Tab.Screen name="Notifications" component={Notifications} /> */}
            </Tab.Navigator>
            
     
    </NavigationContainer>
     </ThemeContext.Provider>
  );
}


