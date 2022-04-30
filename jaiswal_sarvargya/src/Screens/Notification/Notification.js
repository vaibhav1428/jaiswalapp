import React from 'react'
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { StyleSheet , View } from 'react-native'
import { Avatar ,Divider,Icon,Text} from 'react-native-elements'
import Customclr from '../../assets/theme/Customclr'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LCnotif from './LCnotif'
import Requestnotif from './Requestnotif'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import i18n from 'i18n-js';

const Notification = () => {

    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView  style={{backgroundColor:Customclr.light,flex:1,marginVertical:heightPercentageToDP('2%')}}>
        <Tab.Navigator screenOptions={{lazy:true}}>
            <Tab.Screen name={i18n.t('Notification')} component={LCnotif} />
            <Tab.Screen name={i18n.t('Request')} component={Requestnotif}   />

        </Tab.Navigator>
        
        </SafeAreaView>
    )
}

export default Notification


