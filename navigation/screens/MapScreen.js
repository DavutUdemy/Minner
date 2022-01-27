import * as React from "react"
import { useState, useEffect } from 'react';
import Toast from 'react-native-simple-toast';

import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import * as Location from 'expo-location';

export default function MapScreen() {


 	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
  
		
	const [ pin, setPin ] = React.useState({
		latitude: 0,
		longitude:0
	})
	const [ pin1, setPin2 ] = React.useState({
		latitude: 41.7316197,
		longitude:44.7530542
	})
	const [ region, setRegion ] = React.useState({
		latitude: 0,
		longitude: 0,
	})
	const [camera,setCamera] = React.useState({
		center:region,
		heading: 0,
		pitch: 0,
		zoom: 0,
		altitude: 0
	


	})
 
  
 useEffect(() => {
		(async () => {
	  	  let { status } = await Location.requestForegroundPermissionsAsync();
		  if (status !== 'granted') {
		setErrorMsg('Permission to access location was denied');
	 		return;

	 	  }
	
		  let location = await Location.getCurrentPositionAsync({});
		  setLocation(location);
		  console.log(location)
	 	 console.log(location.coords.latitude)
	 	  setPin({latitude:location.coords.latitude,longitude:location.coords.longitude})
	 	 console.log(pin)
	 	  setRegion({latitude:location.coords.latitude,longitude:location.coords.longitude})
		  console.log(region)
		  setCamera({center:region,heading:location.coords.heading,pitch:5,zoom:20,altitude:location.coords.altitude})
	 	})();
	   }, []);


	
 
 function Onclick(){
	Toast.show('HELP ME! I NEED HELPPP PLEASE', Toast.LONG, [
		'UIAlertController',
	  ]);
	  

	
 
 }


	return (

		<View style={{ marginTop: 50, 
        height:100,width:100}}>
		
		<TouchableOpacity onPress={Onclick} > 
		<Image   source={require('../../assets/panic.png')} style={{marginBottom:10
				,borderRadius:15,height:90,width:90}}></Image>
		</TouchableOpacity>
		
			
			<MapView
				style={styles.map}
				marginTop={10}
				zoomEnabled={false}
				scrollEnabled={true}
				
				zoomEnabled={true}
				initialRegion={{
					latitude: region.latitude,
					longitude: region.longitude
				}}
                
				provider="google"
			>
				<Marker  icon={require('../../assets/sifir.png')} coordinate={ { latitude: region.latitude, longitude: region.longitude }} />
				<Marker
                icon={require('../../assets/sifir.png')}
                
               
					coordinate={pin1}
					pinColor="black"
					draggable={true}
                    
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {

					}}
				><Marker
                icon={require('../../assets/puppu2.png')}
                
               
					coordinate={pin}
					pinColor="black"
					draggable={true}
                    
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {

					}}
				></Marker>
					<Callout>
						<Text>I'm here</Text>
					</Callout>
				</Marker>
               
             
				<Circle center={pin} radius={30} />
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
        marginTop:40,   
		width: 500,
		height: 500
	}
})

