import React, { useState , useContext} from 'react';
import { Text, StatusBar, Button, StyleSheet, View, Image, TouchableOpacity, Switch  } from 'react-native';

import car from '../img/car.png';
export default function NewVehicle({navigation}) {
  return (
    <View style={[styles.container]}>
         <TouchableOpacity style={[styles.row, styles.elevation]} title="View Profile" onPress= {()=> navigation.navigate("New Vehicle Detail")}>

      
                <Image style={[imgStyles.img]} source={car}/>

            
            <View style={[styles.details]}>
            <Text>Claim No:  Clm 12345</Text>
            <Text>Reg No:  MH 06 98</Text>
            <Text>Work Shop:  Nano</Text>
            <Text>Location:   Western Express</Text>
            </View>
            

        </TouchableOpacity>
          <TouchableOpacity style={[styles.row, styles.elevation]} title="View Profile" onPress= {()=> navigation.navigate("New Vehicle Detail")}>
        <Image style={[imgStyles.img]} source={car}/>

            
            <View style={[styles.details]}>
            <Text>Claim No:  Clm 12345</Text>
            <Text>Reg No:  MH 06 98</Text>
            <Text>Work Shop:  Nano</Text>
            <Text>Location:   Western Express</Text>
            </View>
            {/* </View>
            <View style={[]}> */}
            </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 20
    },
    button:{
        paddingTop: 20
    },
    row: {
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: "#FCC89F",
        padding:20,
        borderColor: "coral",
        marginBottom: 15,
        // alignItems: "right",
        width:"95%",
        marginTop: 18,
        // textAlign:"left",
        flexDirection:"row",
        display:"flex",
        // justifyContent:"space-between"
       
    },
    details:{marginLeft: "10%"}
})

const imgStyles = StyleSheet.create({
    container: {
      paddingTop: 10,
    },
    img: {
        width: "30%",
        height: "100%",
        alignSelf: 'flex-start'
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