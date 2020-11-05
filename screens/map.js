import React,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Button,Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { onChange } from 'react-native-reanimated';


export default function MapScreen({route, navigation}) {
    
    const [place, setPlace] = useState(null);
    const [location, setLocation] = useState(null);
    const [position, setPosition] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.05,
      longitudeDelta: 0.04,
    });
    const [latitude, setLatitude] = useState(-22.5255007);
    const [longitude, setLongitude] = useState(-50.8796892);

   
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          let location = await Location.getCurrentPositionAsync({});
          
          setLocation(location);
          setPosition(location.coords);
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
          //setPlace(getAddressFromApi);

        })();
      }, []);
     
      const getPosition = async () =>{
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
          setPosition(location.region);
      }

      const getAddressFromApi = async() => {
        return fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+position.latitude+'&lon='+position.longitude,{
        method: 'GET',
        headers: {
        'Accept': 'application/json'
        }
      })
          .then((response) => response.json())
          .then((json) => {
             setPlace(json);
       
    
             console.log(json);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      


    return (
        <View style={styles.container}>
            <MapView style={styles.map}  showsUserLocation={true} followUserLocation={true} zoomEnabled={true}    onPress={e =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })

          
        }>

          <Marker
          coordinate={position}
          title={'Marcador'}
          description={'Testando o marcador no mapa'}
        />

        </MapView>

          <View style={styles.positonBox}>

            <Text style={styles.positonBoxTitle}>Sua Localização</Text>

            <View style={styles.positonBoxLatLon}>
              <Text style={{fontSize: 18}}>Lat.</Text>
              <Text style={{fontSize: 18}}>{position.latitude}</Text>
            </View>

            <View style={styles.positonBoxLatLon}>
              <Text style={{fontSize: 18}}>Lon.</Text>
              <Text style={{fontSize: 18}}>{position.longitude}</Text>
            </View>

          </View>

          <TouchableOpacity style={styles.locationButton} onPress={() => {}}>
            <Icon name="my-location" color={'#fff'} size={30} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Call',{
            latitude: position.latitude,
            longitude: position.longitude,
            place: place})}>
            <Icon name="check-circle" color={'#fff'} size={30} />
            
          </TouchableOpacity>

          <View style={styles.logo}>
            <Text style={styles.logoText}>Socorre</Text>
            <Text style={[styles.logoText, {color: '#e74c3c'}]}>Map</Text>
          </View>

        </View>
    );}


    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      map: {
        height: '100%',
        width: '100%',
      },
      logo: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 15,
        elevation: 5,
        marginTop: -730,
        alignSelf: 'center',
        marginRight: 10,
        flexDirection: 'row',
      },
      logoText: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      positonBox: {
        backgroundColor: '#fff',
        borderRadius: 20,
        opacity: 0.75,
        marginTop: -170,
        marginHorizontal: 40,
        padding: 25,
        shadowColor: '#000',
        elevation: 5,
      },
      positonBoxTitle: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#e74c3c',
      },
      positonBoxLatLon: {flexDirection: 'row', justifyContent: 'space-between'},
      locationButton: {
        backgroundColor: '#e74c3c',
        borderRadius: 150,
        marginTop: -25,
        width: 50,
        height: 50,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 8,
      },
      nextButton: {
        backgroundColor: '#e74c3c',
        borderRadius: 150,
        marginTop: -50,
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 8,
      },
    });