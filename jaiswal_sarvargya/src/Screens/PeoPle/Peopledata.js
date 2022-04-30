import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator } from 'react-native'
import { Avatar, Button, Image } from 'react-native-elements'
import { showMessage } from 'react-native-flash-message'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import { GlobalContext } from '../../context/Provider'
import axiosInstance from '../../Helper/axiosInstance'
import { useNavigation } from '@react-navigation/native';
import { PROFILE } from '../../Nevigation/RoutesName'
import I18n from 'i18n-js';


const PeopleData = ({post,index}) => {
    const [isRequest,setIsRequest]  = React.useState(false);
    const [isfriend,setfriend]  = React.useState(true);
    const {userState:{data}} = React.useContext(GlobalContext);
    
    const navgation = useNavigation();

    React.useLayoutEffect(() => {
        asyncstoragedsta()    
      
        }, [])


       const asyncstoragedsta = async() =>{
          
            var value = await AsyncStorage.getItem('users');
            var parsed = JSON.parse(value);
            axiosInstance.post('/get_Friendreq',{
                userid:parsed.userid,
                firendid:post.id,
             }).then((res) =>{
                 if(res.data.status == 1 ){               
                    setIsRequest(true);

                 }
              
                       
             })


             axiosInstance.post('/check_friend',{
                userid:parsed.userid,
                firendid:post.id,
             }).then((res) =>{
                 if(res.data.status == 1 ){               
                    setfriend(true);

                 } 
                 if(res.data.status == 0 ){               
                    setfriend(false);

                 }
              
                       
             })




                
        
        }




    const sendfrndreq = (id) =>{

        axiosInstance.post('/friend_req',{
            userid:data.id,
            firendid:id,
         }).then((res) =>{
             showMessage({
                message:"req sended successfully",
                type: "success",
                icon: "success",
              }); 
            setIsRequest(!isRequest)
                   
         })




    }


    return (                
        <View style={{padding:widthPercentageToDP('3%'),backgroundColor:Customclr.light}} key={index}>
        <View style={{display:'flex',flexDirection:'row',width:widthPercentageToDP('95%'),justifyContent:'space-between'}}>
        <TouchableOpacity style={{display:'flex',flexDirection:'row'}}  onPress={()=>{navgation.navigate(PROFILE,{'id':post.id})}}>
                <View>
                    <Image    PlaceholderContent={<ActivityIndicator />} containerStyle={{width:widthPercentageToDP('10%'),height:widthPercentageToDP('10%')}} source={{uri:post.profilepic}} />
                </View>


                <View style={{marginLeft:widthPercentageToDP('3%')}}>

                    <Text style={{color:Customclr.dark,fontSize:widthPercentageToDP('2.8%')}}>
                        {post.name}                                      
                    </Text>
                    <Text  style={{color:Customclr.Lightgray}}>
                        {post.city + ','}{post.state}
                    </Text>                       
                </View> 
        </TouchableOpacity> 

        <View>     
            {
               
                <Button buttonStyle={{backgroundColor: isRequest? Customclr.red : Customclr.orangeshade0}} onPress={()=>{sendfrndreq(post.id)}} disabled={isfriend ? true : false} containerStyle={{width:widthPercentageToDP('25%'),height:heightPercentageToDP('6%')}}  titleStyle={{fontSize:heightPercentageToDP('2%')}}
                title={isfriend ? I18n.t('friends') : isRequest ? 'requested':'connect'} />   

            }                    

        </View> 



        </View>
        </View>
      
    )
}

export default PeopleData

const styles = StyleSheet.create({})



