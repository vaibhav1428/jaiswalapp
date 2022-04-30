import React, { useEffect } from 'react';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import GlobalProvider, { GlobalContext } from './src/context/Provider';
import Navigation from './src/Nevigation';
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
import NetInfo from '@react-native-community/netinfo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert, AppState, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Localization from 'expo-localization';


const firebaseConfig = {
  apiKey: "AIzaSyAVKSfu2qwWLx6wNsWUgDMb1UxcfDy4Kr4",
  authDomain: "jaiswalsarwarigya.firebaseapp.com",
  projectId: "jaiswalsarwarigya",
  storageBucket: "jaiswalsarwarigya.appspot.com",
  messagingSenderId: "32433042525",
  appId: "1:32433042525:web:7857f46ea4213449c9c9b4",
  measurementId: "G-40EHDEVMC9"
};

firebase.initializeApp(firebaseConfig);



export default function App() {
  




  React.useEffect(() => {

if(Platform.OS != "web"){
  if(AppState.currentState = "active"){
    Notifications.setNotificationHandler(null);
  
  }else{
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  
  }
   

}


    NetInfo.fetch().then(state => {
      if(state.isConnected == null){
        showMessage({
          message: "Oops! You Do Not Have Active Internet Connection",
          type: "danger",
          icon: "danger",
        });  
      }
    });   
  }, [])


//   React.useEffect(() => {
//     (async () => {
//       if (Platform.OS !== 'web') {
//         const { status } = await ImagePicker.getCameraPermissionsAsync();
//         if (status !== 'granted') {
//           alert('Sorry, we need camera  permissions to make this work!');
//         }
//       }
//     })();
//   }, []);




 
 


 

  return (
    <SafeAreaProvider>
    <GlobalProvider>
      <Navigation/>
    <FlashMessage position="bottom" hideOnPress={true} />
    </GlobalProvider>



    </SafeAreaProvider>
    
  );
}

