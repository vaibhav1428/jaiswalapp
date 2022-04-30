import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import {  widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';
import { Table, Row, Rows } from 'react-native-table-component';
import i18n from 'i18n-js';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../Helper/axiosInstance';




const PointRule = () => {
    const nevigation = useNavigation();

    const [ispoint, setpont] = React.useState(0)
    React.useEffect(() => {
   const unsubscribe = nevigation.addListener('focus', () =>           
   _getponit()
     );    
   return unsubscribe;
 }, [nevigation]);


 const _getponit = async() =>{      
       var value = await AsyncStorage.getItem('users');
       var parsed = JSON.parse(value);
       axiosInstance.post('/getppoint',{
         userid:parsed.userid                 
           }).then((res) =>{
           let newarr = res.data.result;
           if( res.data.status == 1){
             setpont(res.data.result[0].point)
           }
          
       }) 
           
   
   }


    return (
        <View style={{backgroundColor:Customclr.Lightgray,flex:1}}>
            <View style={{backgroundColor:Customclr.light}}>
                    <Icon name="trophy" type="font-awesome"  color={Customclr.yellow} size={hp('7%')} />
                    
                    <Text style={{fontSize:hp('2.8%'),fontWeight:'600',margin:wp('3%'),justifyContent:'center',alignItems:'center',textAlign:'center',color:Customclr.danger,}}>
                    {i18n.t('your_prestigious_point_is')}: {
                        ispoint == 0 ?(
                          <View>
                            <ActivityIndicator size='small' color={Customclr.orangeshade0} />
                          </View>

                        ):(
                          ispoint

                        )
                      }
                    </Text> 
             </View>



            <View style={{marginTop:hp('2%')}}>
             <Table borderStyle={{borderWidth: 1, borderColor: Customclr.text }}>
            <Row  data={
                         [i18n.t('Rule')]
                    } style={{backgroundColor:Customclr.lawngreen}}  textStyle={styles.text,{fontSize:hp('3.5%'),fontWeight:'800',textAlign:'center',marginTop:hp('1%'),marginBottom:hp('1.5%')}} />  
                    
                    
                     <Row flexArr={[2, 12]} data={
                         ['1.', i18n.t('ruleone')]
                    }  textStyle={styles.text} />  
                    
                    
            <Row flexArr={[2, 12]} data={
                         ['2.', i18n.t('ruletwo')] 
                    }  textStyle={styles.text}/>  
            <Row flexArr={[2, 12]} data={
                         ['3.', i18n.t('rulethree')]
                    }  textStyle={styles.text}/>  
            <Row flexArr={[2, 12]} data={
                         ['4.', i18n.t('ruleone')]
                    }  textStyle={styles.text}/> 
                    
                  
            </Table>

            </View>


        

        </View>
    )
}

export default PointRule

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { fontSize:hp('2.2%'),fontWeight:'600',color:Customclr.text,padding:hp('2%') }
})

