import React,{useEffect, useState} from 'react';
import { TouchableOpacity, Button,Image, StyleSheet, Text, View, Dimensions,TextInput } from 'react-native';

export default function CallScreen({route, navigation}) {
    const {latitude, longitude, place} = route.params;
    const [data, setData] = useState({"place_id":152914989,"licence":"Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":280940520,"lat":"-34.440723129053","lon":"-58.70516228096825","place_rank":26,"category":"highway","type":"motorway","importance":0.09999999999999998,"addresstype":"road","name":"Autopista Pedro Eugenio Aramburu","display_name":"Autopista Pedro Eugenio Aramburu, El Triángulo, Partido de Malvinas Argentinas, Buenos Aires, 1.619, Argentina","address":{"road":"Autopista Pedro Eugenio Aramburu","village":"El Triángulo","state_district":"Partido de Malvinas Argentinas","state":"Buenos Aires","postcode":"1.619","country":"Argentina","country_code":"ar"},"boundingbox":["-34.44159","-34.4370994","-58.7086067","-58.7044712"]});
    useEffect(() =>{
        fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+latitude+'&lon='+longitude,{
            method: 'GET',
            headers: {
            'Accept': 'application/json'
            }
          })
              .then((response) => response.json())
              .then((json) => {
                
                 setData(json);
        
                 console.log(json);
              })
              .catch((error) => {
                console.error(error);
              });
  }, []);

    
    return(
    <View>
        <Text>Nome:</Text>
        <TextInput style={styles.input} ></TextInput>
        <Text>Telefone:</Text>
        <TextInput style={styles.input} ></TextInput>
        <Text>Estado:</Text>
        <TextInput style={styles.input} value={data['address']['state']}></TextInput>
        <Text>Cidade:</Text>
        <TextInput style={styles.input} value={data['address']['city']}></TextInput>
        <Text>Bairro:</Text>
        <TextInput style={styles.input} value={data['address']['village']}></TextInput>
        <Text>Rua:</Text>
        <TextInput style={styles.input} value={data['address']['road']}></TextInput>

        <Button title={'Abrir Chamado'}/>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    textInput:{
        backgroundColor: 'white'
    },
    input:{
        padding: 5,
        margin: 5,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        //borderBottomColor: '#000000', 
       // borderBottomWidth: 1, 
        width: '80%'
      },
    

});