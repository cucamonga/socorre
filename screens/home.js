import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Button,Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/header';

export default function HomeScreen({navigation}) {
    return (
    <View style={styles.container}>
   

     <View style={{flexDirection:'row',
                  height: 100,
                  margin: 20
    }}>
       <TouchableOpacity style={styles.tinyButton} onPress={() => navigation.navigate('Map')}>
      <Image
        source={require('../assets/ambulance.png')}
        style={styles.sosIcon}
        />
        <Text>Ambulância</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tinyButton}>
      <Image
        source={require('../assets/bombeiros.png')}
        style={styles.tinyIcon}
        />
        <Text>Bombeiros</Text>
      </TouchableOpacity>
      </View> 
      <TouchableOpacity style={styles.tinyButton}>
      <Image
        source={require('../assets/sos.png')}
        style={styles.sosIcon}
        />
        <Text>SOCORRO</Text>
        
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    textMain:{
      alignItems: 'center',
  
    },
    tinyButton:{
      paddingBottom:20,
      padding: 20,
    },
  
    tinyIcon: {
     
      width: 75,
      height: 75,
    },
    sosIcon: {
      width: 75,
      height: 75,
    }
  });
  