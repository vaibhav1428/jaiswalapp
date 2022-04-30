import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import Login from '../Screens/Login/login';
import Otp from '../Screens/Otp/Otp';
import PreProfile from '../Screens/PreProfile/PreProfile';
import { LOGIN, OTP, PREPROFILE } from './RoutesName';


const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

    
    const horizontalAnimation = {
        gestureDirection: 'horizontal',
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      };

    return (
        <Stack.Navigator screenOptions={horizontalAnimation}> 
            
            <Stack.Screen name={LOGIN} component={Login}   options={{headerShown: false}} />  
             <Stack.Screen name={OTP} component={Otp}   options={{headerShown: false}} />
             <Stack.Screen name={PREPROFILE} component={PreProfile}   options={{headerShown: false}} />
      </Stack.Navigator>
    )
}

export default AuthNavigation

