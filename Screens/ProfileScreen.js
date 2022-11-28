import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button, Switch } from 'react-native';

import ThemeContext from '../config/ThemeContext';

export default function ProfileScreen() {
    const theme = useContext(ThemeContext);
    const [mode, setMode] = useState(false);
    return(

        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text  style={[styles.text, {color: theme.color}]}>This is a Profile Screen</Text>

           
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