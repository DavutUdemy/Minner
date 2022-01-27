import React from 'react';
import { View, Image, Text } from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
export default function SplashScreen({navigation}) {
    useEffect(() => {
		(async () => {
            
         let { status } = await Location.requestForegroundPermissionsAsync();

		  if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
            
			return;
		  }
	
		  let location = await Location.getCurrentPositionAsync({});
          console.log(location)
        
        
		})();
	  }, []);

    setTimeout(ChangeScreen,
        1500
    )
    function ChangeScreen(){
         navigation.navigate('Home')
     }
  


    
    return(
    <View  style={{backgroundColor:'purple', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
            fontSize:34,
            color:'yellow',
            alignItems:'center',
            fontStyle:'bold',
            marginBottom:50

        }}>Miner Tracker</Text>
    <Image   
    style={{height:300,width:450
        ,resizeMode: 'cover'}}
    source={require('../../assets/Miners_Helmet.png')}
 ></Image>
</View>
    )
}
