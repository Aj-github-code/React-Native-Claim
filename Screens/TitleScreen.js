import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet, View, Image } from 'react-native';
import { NavigationContainer, useIsFocused  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Separator = () => (
    <View style={styles.separator} />
  );

export default function TitleScreen() {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
          <View style={imgStyles.container}>
          <Text style={imgStyles.title}>
            The title and onPress handler are required. 
          </Text>
          <Image
              style={imgStyles.logo}
              source={{ 
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fTYCrDWWum41jUkgW3Aj6fomIkfOAotAqvHjwIIk6eL6G2WnkTasnz7tRLrR-5SHA_Q&usqp=CAU',
              }}
            />
          </View>
          <Separator />
          <View style={imgStyles.container}>
          <Text style={imgStyles.title}>
            The title and onPress handler are required. 
          </Text>
            <Image
                style={imgStyles.logo}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBl1KmBxy4xkyDTq7LHachkhgR1u32WJrfNec_Dt4dLAjGiCzlaBfP6JijhmnQqrXeKg&usqp=CAU',
                }}
              />
          </View>
          <Separator />
          <View style={imgStyles.container}>
          <Text style={imgStyles.title}>
            The title and onPress handler are required. 
          </Text>
          <Image
              style={imgStyles.logo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5US-kRRPYXAsEqyEj81wMyv21F0AElx3aEXTsCMbwNbSg_3AeukasllNSHUsTDOTd8k&usqp=CAU',
              }}
            />
          </View>
    
          
          
            
          </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });

  const imgStyles = StyleSheet.create({
    container: {
      paddingTop: 10,
    },
    logo: {
      width: 150,
      height: 120,
  
       alignSelf: 'center'
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