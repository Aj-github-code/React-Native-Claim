// import React, { useEffect, useState } from 'react';

// import AppNavigator from './Navigation/AppNavigator';

// import { EventRegister } from "react-native-event-listeners"
// import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import ThemeContext from './config/ThemeContext';
// import Theme from './config/Theme';

// import HomeScreen from './Screens/HomeScreen';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   const [mode, setMode] = useState(false);
  
//   useEffect(() => {
//     let eventListener = EventRegister.addEventListener(
//       "changeTheme",
//       (data) => {
//         setMode(data);
//       }
//     );
//     return () => {
//       EventRegister.removeEventListener(eventListener);
//     };
//   })
//   return(
//     <ThemeContext.Provider value={mode=== true ? Theme.dark : Theme.light}>

// {/* <HomeScreen/> */}
//     <NavigationContainer theme = {mode === true ? DarkTheme : DefaultTheme}>
      
//     <Tab.Navigator 
//              screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
                
//                 if (route.name === 'Home') {
//                   iconName = focused
//                   ? 'ios-person-circle'
//                   : 'ios-person-circle-outline';
//                 } else if (route.name === 'Settings') {
//                   iconName = focused ? 'ios-list' : 'ios-list-outline';
//                 }
                
//                 // You can return any component that you like here!
//                 return <Ionicons name={iconName} size={size} color={color} />;
//               },
//               tabBarActiveTintColor: 'tomato',
//               tabBarInactiveTintColor: 'gray',
//             })}>
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Settings" component={AppNavigator} />
       
//             </Tab.Navigator>
            
     
//     </NavigationContainer>
//      </ThemeContext.Provider>
//   );
// }




import React, { useState, useContext, useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TitleScreen from './Screens/TitleScreen';
import NewVehicle from './Screens/NewVehicle';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import NewVehicleDetail from './Screens/NewVehicleDetail';
import {ClaimDetails} from './Screens/ClaimDetails';
import {ClaimFormDetails} from './Screens/ClaimDetails';
import AgentInspectionList from './Screens/AgentInspectionList';
import AgentReviewImages from './Screens/AgentReviewImages';


import ThemeContext from './config/ThemeContext';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native'
import { EventRegister } from "react-native-event-listeners"
import Ionicons from 'react-native-vector-icons/Ionicons';

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

    const theme = useContext(ThemeContext);
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme = {mode === true ? DarkTheme : DefaultTheme}>
 
    <Stack.Navigator screenOptions={({ route }) => ({
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
        <Stack.Screen name="Home" component= {HomeScreen}/>
        <Stack.Screen name="About us"  style={[{backgroundColor: theme.background}]} component= {TitleScreen}/>
        <Stack.Screen name="Profile" component= {ProfileScreen}/>
        <Stack.Screen name="New Vehicle" component= {NewVehicle}/>
        <Stack.Screen name="New Vehicle Detail" component= {NewVehicleDetail}/>
        <Stack.Screen name="Claim Form Details" component= {ClaimFormDetails} />
        <Stack.Screen name="Claim Details" >
          {() => <ClaimDetails title="Claim Details" />}
        </Stack.Screen>
        <Stack.Screen name="Agent Inspection List" >
          {() => <AgentInspectionList title="Agent Inspection List" />}
        </Stack.Screen>
        <Stack.Screen name="Agent Review Images" >
          {() => <AgentReviewImages title="Agent Review Images" />}
        </Stack.Screen>
        
    </Stack.Navigator>
    </NavigationContainer>
  )
}
