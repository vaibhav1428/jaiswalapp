import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Table, Row, Rows } from 'react-native-table-component';
import Customclr from '../../assets/theme/Customclr';
import i18n from 'i18n-js';

const ContactUs = () => {
    return (
        <View style={{flex:1}}>
            <Text style={{fontSize:hp('4.5%') ,textAlign:'center',fontWeight:'800',marginTop:hp('1%')}}> {i18n.t('For_Help_Contact_US')} </Text>
           
           
           <View style={{marginTop:hp('10.5%'),justifyContent:'center'}}>
            <Text style={{fontSize:hp('3.5%'),fontWeight:'800',padding:hp('2%'),borderWidth:1}}>  {i18n.t('Name')} : {i18n.t('kalaar_pariwaar')} </Text>
            <Text style={{fontSize:hp('2.5%'),fontWeight:'800',padding:hp('2%'),borderWidth:1}}>  {i18n.t('Email')} :  kalaarpariwaar@gmail.com </Text>
            <Text style={{fontSize:hp('2.5%'),fontWeight:'800',padding:hp('1%'),borderWidth:1}}>  {i18n.t('Addressfull')} </Text> 
            <Text style={{fontSize:hp('3.5%'),fontWeight:'800',padding:hp('2%'),borderWidth:1}}>  {i18n.t('Helping_No')} </Text>
         
            </View>
 

        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({})
