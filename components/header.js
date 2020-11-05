import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
    <View style={styles.header}> 
        <Text style={styles.text}>SOCORRE</Text>
    </View>
    );}


const styles = StyleSheet.create({
header:{
    height: 80,
    backgroundColor: 'orangered',
    paddingTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
},

text:{
    fontWeight: 'bold',
    color: 'white'

}

});