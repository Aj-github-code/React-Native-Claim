import React from 'react'

import { Text, StatusBar, Button, StyleSheet, View, SafeAreaView, TouchableOpacity, Pressable , ScrollView, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SelectList } from 'react-native-dropdown-select-list';

import CameraCapture from './CameraCapture';

export default function AgentReviewImages() {
    const navigation = useNavigation();

    const Data = {
        "Metal":[{
                "title":"Wheel Rim LHS FR",
                "estimated_amt":"15400",
                "dealer_remark":"replacement",
        }],
        "Labour Charges": [{
                "title":"Tie Rod End LHS",
                "estimated_amt":"6661",
                "dealer_remark":"repair",
            },
            {
                "title":"Resonator Box",
                "estimated_amt":"640",
                "dealer_remark":"repair",
            },
            {
                "title":"W/S Glass Laminated FR",
                "estimated_amt":"6000",
                "dealer_remark":"repair",
            },
            {
                "title":"Tie Rod End LHS",
                "estimated_amt":"1500",
                "dealer_remark":"repair",
        }]
    }
  return (
    <SafeAreaView style={[styles.container]}>
    
        <ScrollView style={[{width:"100%", flexGrow: 1}]} >
            <View style={[styles.container]} >

                {Object.entries(Data).map(([key, value])=>{
                    return(
                        <View style={[{width:"100%"}]}>

                            <Text style={[styles.text,{padding:8, marginLeft:10,fontSize:18}]}>
                                {key}
                            </Text>
                            {Object.entries(value).map(([keys, values])=>{

                                return(
                                        <View style={[styles.container]}>

                                            <View style={[styles.rows]}>
                                                <View style={[{display:"flex", flexDirection:"row",width:"100%",   borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor:"#FCBD46", padding:10}]}>
 

                                                <Text style={[{marginLeft:10, fontWeight:"bold", fontSize:16, marginVertical:"1%"}]}>{values.title}</Text>
                                                </View>
                                                <View style={[{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:10, padding:10,width:"100%", height:"auto"}]}>
                                                    <CameraCapture />
                                                </View>
                                            </View>
                                        </View>
                                    )
                            })}

                        </View>
                    )
                })}
                 </View>
            <View style={[{height:80}]}></View>
        </ScrollView>
        <View style={[styles.footer]}>
            <TouchableOpacity style={[styles.button]} onPress= {() => navigation.navigate("Agent Inspection List")}>
                <Text style={[styles.buttonText]}>Submit</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>

  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
        
    },
    categoryContainer: {
        display:"flex", flexDirection:"column",
    },
    separator: {
        
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text:{
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 10,
        width:"100%",
    },
    label: {
        fontSize:12, 
        color:"#939796",
    },
    footer:{
        position:"absolute", 
        left:0, 
        right:0, 
        bottom:0,
        flex:0.1, 
        display: "flex", 
        justifyContent:"space-around",
        backgroundColor:"#333333", 
        width:"100%", 
        height:70, 
        flexDirection:"row", 
        borderTopRightRadius: 40, 
        borderTopLeftRadius: 40,
        paddingTop : "-2%",
        paddingBottom : "-2%"
    },
    button:{
        alignItems:"center",
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
        height:"100%",
        width:"100%",
    
    },
    buttonText:{
        fontSize:20, 
        fontWeight:"bold", 
        color:"white", 
        margin:10
    },
    row: {
        width: "100%", 
    },
    rows: {
        width: "95%", 
        height:"auto", 
        flexDirection:"column",
        // alignSelf: "flex-start",
        // borderWidth: 4,
        borderRadius: 10,
        backgroundColor: "#FFF7E8",
        // padding:8,
        // borderColor: "coral",
        // marginBottom: 10,
        marginTop: 10,
    }, 
})

