import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Button,
    Dimensions,
    Text,
    Animated,
    TouchableOpacity,
    TouchableHighlight,
    View,
  } from 'react-native';
  import { MapView } from 'expo';
  import { Icon } from 'native-base';


const { height, width } = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO



export default class Home extends Component {


   static navigationOptions = { header: null } 

    // static navigationOptions = ({navigation}) => {
    //     return {
    //     title: 'App Name',
    //     headerStyle: {
    //       backgroundColor: '#0B2D64',
    //     },
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //       fontSize: 22,
    //       color: 'white'
    //     },
    //     headerRight: (
    //         <TouchableOpacity onPress={()=> navigation.navigate('SettingsScreen')}>
    //             <Icon
    //           style={{ color: 'white', fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', backgroundColor: '#0B2D64', borderRadius: 30, padding: 5 }}
    //           name="build" />
    //         </TouchableOpacity>
            
         
    //          )
    //         }
    //   };


      constructor(props) {
        super(props);
        this.state ={
    
          region: {
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 10.0,
        longitudeDelta: 10.88
      },
      position: {
        latitude: 0.0,
        longitude: 0.0
      },
      markers: [
        {
          coordinate: {
            latitude: 21.2336,
            longitude: 78.9129
          },
          id: 1,
          name: "Service Centre"
        },
        {
          coordinate: {
            latitude: 21.2246,
            longitude: 78.9129
          },
          id:2,
          name : "Service Centre 2",
        },
        {
          coordinate: {
            latitude: 21.2333,
            longitude: 78.9112
          },
          id: 3,
          name: "Service Centre 3",
        },
        {
          coordinate: {
          latitude: 22.2338,
          longitude: 79.9115
        },
          id: 4,
          name: "Service Centre 4",
    
        },
      ]
    }
      }


      componentDidMount() {
        console.log(this.state.markers)
        navigator.geolocation.getCurrentPosition(
          ({coords}) => {
            const {latitude, longitude} = coords
            this.setState({
              region: {
                latitude,
                longitude,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
              },
              position: {
                latitude,
                longitude
              }
            })
          },
          (error) => alert('Error: Are location services on?'),
          {enableHighAccuracy: true}
        );
      }

  render() {
    return (

        <View style={{ flex: 1}}> 
         
        <MapView
        ref={map => this.map = map}
        provider="google"
        mapType="standard"
        zoomEnabled
        pitchEnabled
        showsUserLocation
        followsUserLocation
        showsCompass
        showsMyLocationButton
        showsBuildings
        toolbarEnabled
        showsTraffic
        showsIndoors
         style={styles.map}
         region={this.state.region}
       >
       
       <MapView.Marker
          coordinate={this.state.position}
          // pinColor="#0B2D64"
          image={require('../assets/usermap.png')}
          title="You"
  
        />
        {this.state.markers.map(marker => (
             <MapView.Marker
              key={marker.id}
              image={require('../assets/centreicon.png')}

              coordinate={marker.coordinate}
              title={marker.name}
             />
          ))}
        </MapView>
              
              <View style={styles.topCard}>
              <Text style={styles.headingStyle}>MotoService</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Account')}>
                 <Icon
                  style={{ color: 'white', marginRight: 5, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', backgroundColor: '#0B2D64', borderRadius: 30, padding: 5 }}
                  name="account" />
              </TouchableOpacity>
              </View>
            
  
             <View
                style={styles.cardStyle}
              >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Account',{ arr: this.state.markers})}>
                 <Icon style={{ color: 'white', fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', backgroundColor: '#0B2D64', borderRadius: 30, padding: 5 }} name="arrow-up" />
                 <Text style={{color: '#0B2D64', fontSize: 20, fontWeight: 'bold' }}> Select Service Centre</Text>
              </TouchableOpacity>
              </View>
       
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
    map: {
      flex: 1,
      left: 0,
      bottom: 0,
      right: 0,
      top: 0,
      position: 'absolute'
    },
    cardStyle: {
      width: '100%',
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'center',
      height: '15%',
      // backgroundColor: 'white',
      borderRadius: 30,
      bottom: 0,
      borderRadius: 10,
      marginBottom : 10
    },
  topCard: {
      width: '100%',
      alignItems: 'flex-end',
      position: 'absolute',
      justifyContent: 'space-between',
      height: '12%',
      borderRadius: 30,
      top: 0,
      borderRadius: 10,
      marginBottom : 10,
      flexDirection: 'row'
      // backgroundColor: 'white'
    },
    headingStyle: {
      color: '#0B2D64',
      fontSize: 24,
      marginLeft: 12,
      fontWeight: 'bold',

    }
  });