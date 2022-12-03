

import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useIsFocused  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';

const Separator = () => (
    <View style={styles.separator} />
  );

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
          <View style={[styles.row]}>
          <TouchableOpacity style={[styles.card, styles.elevation]} title="View Profile" onPress= {()=> navigation.navigate("New Vehicle")}>
            <View  style={[styles.heading]}>
   
           
            <FontAwesome name='circle-thin' size={120}  color={'coral'} />
              <Text style={{ color:"white", fontSize:10,position: 'absolute', right:"25%", top:"22%", zIndex: 110, borderRadius:40, padding:"5%", backgroundColor: "blue"}}>12</Text> 
            <FontAwesome name={"circle-thin"} color={'blue'} style={{}} light size={1} >
              </FontAwesome>
              <Icon name={"list-alt"} color={'coral'} style={{position: 'absolute', zIndex: 99}} light size={60} >
              </Icon>
              
           
            </View>
            <Text  adjustsFontSizeToFit style={[styles.title]}>
             NEW INSPECTION
            </Text>
      
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.elevation]} >
            <View style={[styles.heading]}>
   

            <FontAwesome name='circle-thin' size={120} color={'coral'} />
              <Icon name={"list-alt"} color={'coral'} style={{position: 'absolute', zIndex: 99}} light size={60} >
              </Icon>
            
            </View>
            <Text style={[styles.title]}>
              INPROGRESS
            </Text>
     
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.elevation]}>
            <View style={[styles.heading]}>
   
            <FontAwesome name='circle-thin' size={120} color={'coral'} />
              <Icon name={"list-alt"} color={'coral'} style={{position: 'absolute', zIndex: 99}} light size={60} >
              </Icon>
           
            </View>
            <Text style={[styles.title]}>
              COMPLETED
            </Text>
      
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.elevation]} >
            <View style={[styles.heading]}>
   
            <FontAwesome name='circle-thin' size={120} color={'coral'} />
              <Icon name={"list-alt"} color={'coral'} style={{position: 'absolute', zIndex: 99}} light size={60} >
              </Icon>
           
            </View>
            <Text style={[styles.title]}>
            ADDITIONAL CLAIM
            </Text>
     
          </TouchableOpacity>
        
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    row: {  flex:2, justifyContent: 'center', flexDirection: "row", flexWrap: "wrap"},
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 40,
      alignSelf: "flex-start",
      textAlign: "center",
      // paddingHorizontal: 25,
      width: '38%',
      margin: "2%",
      height:"30%",
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
    heading: {
      position:'relative',
      justifyContent:'center',
      alignItems:'center',
      padding:"10%",
      marginTop:"-30%",

    },
    title: {
      fontSize: 20,
      color: "coral",
      textAlign: "center",
      marginBottom: "10%",
      flex: 3,
      fontWeight: '700',

    },   
     icon: {
      position: 'absolute', zIndex: 102,
      // alignSelf: 'flex-end',
      right:"-4%",
      borderRadius:60,
      backgroundColor: "#fff",
      marginBottom: "-50%",
      // zIndex: 5
    },
    iconcircle: {
      position: 'absolute', zIndex: 100,
      // alignSelf: 'flex-end',
      right:"-10%",
      borderRadius:60,
      backgroundColor: "#fff",
      marginBottom: "-50%",
    }
  });

