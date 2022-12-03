import React, { useState , useContext} from 'react';
import { Text, StatusBar, Button, StyleSheet, View, Image, TouchableOpacity, Switch  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';

import car from '../img/car.png';

export default function NewVehicleDetail({navigation}) {
  return (
    <View style={[styles.container]}>
        <View style={{display:"flex", justifyContent:"space-between", flexDirection:"row", width:"95%", flexWrap:"wrap", height:"20%"}}>
            <TouchableOpacity style={[styles.row, styles.elevation, styles.imageTab]} title="View Profile" onPress= {()=> navigation.navigate("New Vehicle")}>
                <Image style={[imgStyles.img]} source={car}/>
            </TouchableOpacity>
            <View style={[styles.row,  {width: "62%", padding:20}]} >
                <Text style={{fontSize:30}}>Ritesh</Text>
                <Text style={{marginTop:10, fontSize:15}}>Mumbai</Text>
            </View>
        </View>
        
        <TouchableOpacity style={[styles.row, styles.elevation, styles.detailTab]} title="View Profile" onPress= {()=> navigation.navigate("New Vehicle")}>
            {/* <Image style={[imgStyles.img]} source={car}/> */}

        
                <Text  style={{fontSize:20, fontWeight:"bold"}}>Claim No        :   Clm 12345</Text>
          <Text  style={{fontSize:20, fontWeight:"bold"}}>Reg No            :   MH 06 98</Text>
          <Text  style={{fontSize:20, fontWeight:"bold"}}>Work Sho        :   Nano</Text>
            <Text  style={{fontSize:20, fontWeight:"bold"}}>Location          :   Western Express</Text>
            <View style={[styles.details]}>
            </View>
          <View style={[styles.details]}>
            </View>
            <View style={[styles.details]}>
            </View>
            <View style={[styles.details]}>
            </View>
            {/* </View>
            <View style={[]}> */}
       </TouchableOpacity>

       <View style={{display: "flex", justifyContent:"space-between", flexDirection:"row", width:"95%", position:"absolute", bottom:10}}>
       <TouchableOpacity style={[styles.button, {}]}>
        <FontAwesome name={"phone"} size={30} color={'green'} />
        <Text style={{fontSize:12, fontWeight:"bold"}}>Call User</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.button]}>
       <FontAwesome name={"phone"} size={30} color={'green'} />
        <Text style={{fontSize:12, fontWeight:"bold"}}>Call Dealer</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.button]} onPress= {()=> navigation.navigate("Claim Form Details")}>
        <Text style={{fontSize:12, fontWeight:"bold"}}>Claim Details</Text>
       </TouchableOpacity>
       </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 20
    },
    button:{
        // paddingTop: 20,
        borderRadius:8,
        width:"32%",
        paddingTop:15,
        paddingBottom:15,
        alignItems:"center",
        backgroundColor: "coral",
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
    },
    row: {
      
        // alignSelf: "flex-start",
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: "#FCC89F",
        padding:8,
        borderColor: "coral",
        marginBottom: 15,
        marginTop: 18,
    },
    imageTab: {
        width:"35%",
    },
    detailTab: {
        width:"95%",
        height:"50%",
        alignSelf:"center",
    },
    details:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
        // alignItems:"right",
        marginLeft: "5%"}
})

const imgStyles = StyleSheet.create({
    container: {
      paddingTop: 10,
   
    },
    img: {
        width: "100%",
        height: "100%",
        // alignSelf: 'flex-start'
    },
    tinyLogo: {
      width: 66,
      height: 58,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });