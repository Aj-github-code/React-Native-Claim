import React from 'react'
import { Text, StatusBar, Button, StyleSheet, View, SafeAreaView, TouchableOpacity, Pressable , ScrollView, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';


const Separator = () => (
    <View style={styles.separator} />
  );

export  function ClaimFormDetails(props) {
    const navigation = useNavigation();
    const Data = {
        "Date of Accident": "21-05-2018",
        "Time of Accident": "10:00",
        "Place of Accident": "Mumbai",
        "Driver Name": "Ritesh",
        "Damage": "Front side damaged",
        "Initial Estimate": 12000,
        "Towing Required": "No",
        "Vehicle Reported Date":"21-05-2018"
    };
  return (
      <View style={[styles.container]}>

        <View style={[styles.row,  {width: "95%", height:"80%", padding:20, flexDirection:"column"}]} >
        {Object.entries(Data).slice(0).map(([key, value])=>{
            return(

                <View style={[{display:"flex",justifyContent:"space-between",flexDirection:"row",marginBottom:5}]}> 
                <Text style={{fontSize:20, width:"42%"}}>{key}</Text>  
                <Text style={{fontSize:30,  width:"1%"}}>:</Text>  
                <Text style={{marginTop:10, fontSize:15, width:"36%", textAlign:"right"}}>{value}</Text>
             </View>
            )
            })}
           
          
          
        </View>
        <View  style={[styles.footer]}>
        <TouchableOpacity style={[styles.button]} onPress= {()=> navigation.navigate("Claim Details")}>
        <Text style={[styles.buttonText]}>Submit</Text>
       </TouchableOpacity>
        </View>
    </View>
  )
}


export function ClaimDetails(props){
    const navigation = useNavigation();
    const Questions = {
        "0": "Has Accident been reported to police",
        "1": "Has Punchnama been Carried Out",
        "2": "Injury to Driver/ Occupant(if any)",
        "3": "Was Any Third Party Involved In Accident",
        "4": "Particulars of Third Party Injury/Loss",
        "5": "Was Any Third Party Involved In Accident",
        "6": "Particulars of Third Party Injury/Loss",

    };
    return(
        <SafeAreaView style={[styles.container]}>
            <ScrollView style={[{width:"100%", flexGrow: 1}]} >
                <View style={[styles.container]}>
                    {Object.entries(Questions).slice(0).map(([key, value])=>{
                        return(
                            <View>
                        <View style={[styles.rows]} >

                            <View style={[{width: "100%", padding:10,display:"flex", flexDirection:"row", justifyContent:"space-between"}]}>
                                <Text style={[styles.text]}>{value}{props.title}</Text>
                                <Pressable style={[{textAlign:"right",}]} onPress={()=>{alert('You Clicked No')}}><Text style={[{color:"#1FD9CA",  fontSize:20}]} >No</Text></Pressable>
                            </View>
                            <TextInput  multiline   numberOfLines={2}   style={{padding: 10, backgroundColor:"white", borderRadius:20}} editable />
                        </View>
                            {/* <Separator/> */}
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
        // justifyContent:"center",
        alignItems:"center",
        width:"100%",
        
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
        width:"90%",
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
     
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: "#FCC89F",
        padding:8,
        borderColor: "coral",
        marginBottom: 15,
        marginTop: 18,
    },
    rows: {
        width: "93%", 
        height:"auto", 
        padding:20, 
        flexDirection:"column",
        // alignSelf: "flex-start",
        // borderWidth: 4,
        borderRadius: 10,
        backgroundColor: "#37E9DA14",
        padding:8,
        borderColor: "coral",
        // marginBottom: 10,
        marginTop: 10,
    },
   
})
