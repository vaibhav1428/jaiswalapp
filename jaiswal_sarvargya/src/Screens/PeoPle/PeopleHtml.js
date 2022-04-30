import React from 'react'
import {  FlatList, SafeAreaView, StyleSheet,  TextInput,  View } from 'react-native'
import {Icon ,SearchBar,Text} from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import axiosInstance from '../../Helper/axiosInstance'
import { ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PeopleData from './Peopledata'
import { ActivityIndicator } from 'react-native'
import i18n from 'i18n-js';

const PeopleHtml = () => {

    const [people, setpeople] = React.useState([]);
    const [isloading, setloading] = React.useState(false);
    const [showfilter,setshowfilter] = React.useState(false);
    const [isfilterload,setfilterload] = React.useState(false);
    const [isvalue, setvalue] = React.useState('');    


    const filterhideshow = () =>{
        setshowfilter(!showfilter);
    }
 

        React.useEffect(() => {
            asyncstoragedsta()    
            }, [])



            


           const asyncstoragedsta = async() =>{
               setloading(true);
                var value = await AsyncStorage.getItem('users');
                var parsed = JSON.parse(value);
                    
             axiosInstance.post('/all_people',{
                userid :parsed.userid,
                username:'',
             }).then((res) =>{
                 if(res.data.status == 1){

                     setpeople(res.data.result); 
                     setloading(false);              
                 }
                 else{
                     setloading(false);
                     alert('Something went wrong');
                 }
                       
             }) 
            }


            const filterdataofsearch = async(val) =>{
                setfilterload(true)
                var value = await AsyncStorage.getItem('users');
                var parsed = JSON.parse(value);
                    
                axiosInstance.post('/all_people',{
                    userid :parsed.userid,
                    username:val,
                }).then((res) =>{
                    if(res.data.status == 1){

                        setpeople(res.data.result); 
                        setfilterload(false)
                               
                    }
                    if(res.data.status == 0){
                        setfilterload(false)
                        setpeople(res.data.result); 
                    }
                        
                }) 

            }
            



    




    return (
    <>

    {

        isloading ? 

        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <ActivityIndicator color={Customclr.orangeshade0} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
        </View>
   

        :
    <SafeAreaView>
   
    
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:heightPercentageToDP('2%')}}>


            <View>
                <Text h4 style={{fontWeight:'600'}}>
                    {i18n.t('members')}
                </Text>            


            </View> 
            <View>
                <Icon
                name={showfilter ?  'cancel' : 'search'}
                type='material'
                color={Customclr.dark}
                onPress={filterhideshow}
                />

            </View>

        </View>

        <View style={{height:heightPercentageToDP('5%'),borderWidth:1,borderColor:Customclr.text,justifyContent:'center',alignItems:'center',display:showfilter?'flex':'none',flexDirection:'row'}}>
            <TextInput placeholder='Are Your Looking For SomeOne.....'   onChangeText={(val)=>{ filterdataofsearch(val.toUpperCase()) ,setvalue(val.toUpperCase())}} placeholderTextColor={Customclr.text} style={{width:widthPercentageToDP('80%')}}/>
            <Icon name="search"/>            
        </View>
        <View>
            
        {
            
            people == "" ?  
            <View style={{justifyContent:'center',alignSelf:'center'}}>
                <Text>
                    No Data Found
                </Text>
            </View>         
            
            :
            isfilterload ? 
            
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <ActivityIndicator color={Customclr.orangeshade0} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
                </View>



            :

            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={people}
            renderItem={({ item,index })=>{
                return(
                    <PeopleData post={item} index={index} key={index}  />

                )
            }}
            />


        }

        
        



        </View>


            </SafeAreaView>
            
            
    }
</>

    
    )
}

export default PeopleHtml

const styles = StyleSheet.create({
    PostTop_oneImage:{
        width:widthPercentageToDP('8%'),
        height:widthPercentageToDP('8%'),
        borderRadius:widthPercentageToDP('8%')/2,
        justifyContent:'center',
        alignSelf:'flex-end',
        marginRight:widthPercentageToDP('3.5%')
    },
})
