import React from 'react'
import { View, Text } from 'react-native'
import  Ionicons   from 'react-native-vector-icons/Ionicons';
import  Entypo   from 'react-native-vector-icons/Entypo';
import  MaterialIcons   from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Customclr from '../assets/theme/Customclr';

import People from '../Screens/PeoPle/People';
import Msg from '../Screens/Message/Msg';
import Notification from '../Screens/Notification/Notification';
import Menu from '../Screens/menu/Menu';
import Home from '../Screens/Home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../Helper/axiosInstance';
import i18n from 'i18n-js';




const Tab = createBottomTabNavigator();

const TabNavigation = () => {


    const [badge,setbadge] = React.useState(null);
    React.useEffect(() => {
          _asyncstoragedsta(); 
  
    }, []);


  const _asyncstoragedsta = async() =>{
        
 
      var value = await AsyncStorage.getItem('users');
      var parsed = JSON.parse(value);
      axiosInstance.post('/get_notification',{
          userid:parsed.userid,
       }).then((res) =>{
           if(res.data.status == 1 ){               
            setbadge(res.data.length);             
           }
           
           if(res.data.status == 0){    
            setbadge(null);
           }

        
                 
       })         
  
  }


    return (
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor:Customclr.orange,
        lazy:true,
        
      }}
      barStyle={{ backgroundColor: Customclr.light }}
    >
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{headerShown: false,
          tabBarLabel: i18n.t('menu'),
          tabBarIcon: ({ color }) => (
            <Entypo name="menu" size={32} color={color} />
          ),
        
        }}
      />
      <Tab.Screen
        name="friend" 
        component={People}
        options={{
          tabBarLabel: i18n.t('friends'),
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: i18n.t('Home'),
          tabBarIcon: ({ color }) => (
           <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="message"
        component={Msg} 
        options={{
          tabBarLabel: i18n.t('Message'),
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="message" size={32} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Notification"
        component={Notification}
        listeners={({ navigation, route }) => ({
            tabPress: e => {
              setbadge(null)

            },
          })}
        
        options={{
          headerShown: false,
          tabBarBadge:badge,
          tabBarLabel: i18n.t('Notification'),
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
        
        
    )
} 

export default TabNavigation
