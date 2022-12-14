import React, { useState , useContext} from 'react';
import { Text, View, StyleSheet, Button, Switch } from 'react-native';

import {EventRegister} from "react-native-event-listeners"

import ThemeContext from '../config/ThemeContext';


export default function TitleScreen({navigation}) {
    const theme = useContext(ThemeContext);
    const [mode, setMode] = useState(false);
    return(

        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={[styles.text, {color: theme.color}]}>Hello there</Text>
            <Switch value={mode} 
            onValueChange={(value)=>{
                setMode(value)
                EventRegister.emit("changeTheme", value);
            }} />
            <View style={styles.button}>
                <Button title="View Profile" onPress= {()=> navigation.navigate("Profile")} />
                <Button title="Home" onPress= {()=> navigation.navigate("Home")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 20
    },
    button:{
        paddingTop: 20
    }
})
