import React, { useContext } from 'react'
import { View, Text, Platform } from 'react-native'
import AuthNavigation from './AuthNavigation'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import { GlobalContext } from '../context/Provider';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Customclr from '../assets/theme/Customclr';
import Constants from 'expo-constants';
import i18n from 'i18n-js';
import english from '../lang/english';
import hindi from '../lang/hindi';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const Navigation = () => {

    const {authState: {isLoggedIn,loading},langstate: {mylang},userState:{data}} = useContext(GlobalContext);


    const [isauthenticated,setauthenticated] = React.useState(isLoggedIn); 
    const [authLoaded, setAuthLoaded] = React.useState(false);
    const [langloading, setlangloading] = React.useState(false);
    const [mainload, setmailload] = React.useState(loading);
  



    i18n.translations = {
      en: english,
      hi: hindi,
    };
    
    
    i18n.fallbacks = true;

    React.useEffect(() => {
      setlangloading(true);
      asynclang();
      setTimeout(() => {
      setlangloading(false)}, 1000) 
      
     
    }, [loading])


    React.useEffect(() => {
        setlangloading(true);
      asynclang();
      setTimeout(() => {
        setlangloading(false)}, 1000)
      
    }, [mylang])


    



    const asynclang = async() =>{

      const changelang = await AsyncStorage.getItem('crrtlanguage');
      const parsedchange = JSON.parse(changelang);
      if(parsedchange == null){
       i18n.locale = mylang.trim();
      }
      else{
        i18n.locale = parsedchange.trim();
      }




    }






    
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('users');
        if (user) {
          
            setAuthLoaded(true);  
            setauthenticated(true);          
        } 
        else {
          setAuthLoaded(true);  
          setauthenticated(false);
        }
      } catch (error) {}
    };


     React.useLayoutEffect(() => {
        getUser();
        
      }, [isLoggedIn]);


      React.useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          if (status !== 'granted') {
                      alert('camera permission is necessory for image');
                    }
        })();
      }, []);
    
    
        React.useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.getCameraPermissionsAsync();
            if (status !== 'granted') {
              console.log('camera permission is necessory for image');
            }
        })();
      }, []);
    
    



    return (
      <>
      {
         langloading ? 
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}>
          <ActivityIndicator  color={Customclr.orangeshade0} size='large' />
        </View>
            :  
      
      authLoaded && data ? (
        <NavigationContainer >
          {isauthenticated ? <MainNavigation/>:  <AuthNavigation/>}
        </NavigationContainer>
        ) : (
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}>
          <ActivityIndicator  color={Customclr.orangeshade0} size='large'  />
        </View>
     
      )}
   


    </>
    )
}

export default Navigation
