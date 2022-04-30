import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity,ActivityIndicator } from 'react-native'
import { Avatar, Button, Divider,  } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import  FontAwesome   from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostHtml from '../Home/Post/PostHtml'
import { useNavigation } from '@react-navigation/native';
import {  EDITPROFILE, PERSONALMSG } from '../../Nevigation/RoutesName'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Famliy from './Family'
import Details from './Details'
import { GlobalContext } from '../../context/Provider'
import { DEFAULT_IMAGE_URI } from '../../Constants/general'
import axiosInstance from '../../Helper/axiosInstance'
import CachedImage from '../../Components/FaseImage/Index'
import I18n from 'i18n-js'
import Firends from './Firends'

const Tab = createMaterialTopTabNavigator();

const ProfileHtml = ({isshowmsg,iseditprof,route}) => {
    const navigation = useNavigation();
    const [name, setname] = React.useState("loading..");
    const [profilepic, setprofilepic] = React.useState(DEFAULT_IMAGE_URI);
    const [age, setage] = React.useState(null);
    const [iscity, setcity] = React.useState(null);
    const [isstate, setstate] = React.useState(null);
    const [isotherdata, setotherdata] = React.useState(null);
    const [isid, setid] = React.useState(null);
    const [isjob, setjob] = React.useState(null);

    const {authDispatch,userState:{data}} = React.useContext(GlobalContext);



      React.useEffect(() => {
     
          if(route.params && route.params.id !== undefined){
              
        axiosInstance.post('/UserDetails',{ 
            id: route.params.id
             })        
        .then((res) =>{
            if(res.data.status == 1 ){ 
            setotherdata(res.data.result[0]);
            setname(res.data.result[0].name);
            setprofilepic(res.data.result[0].profilepic);
            setage(`${res.data.result[0].age} Year`); 
            setstate(res.data.result[0].state); 
            setcity(res.data.result[0].city); 
            setid(res.data.result[0].id); 
            setjob(res.data.result[0].work); 
            }
            else{
                alert('Please Check Your Network Connection')
            }

         })

          }else{
               
            setname(data.name);
            setprofilepic(data.profilepic);
            setage(data.age);
            setstate(data.state); 
            setcity(data.city); 
            setjob(data.work); 


          }
       
              
      }, [data]);



      const sendmsg = () =>{
          navigation.navigate(PERSONALMSG,{isuser:data.id,idt:isid,chatname:name,logo:profilepic,userpic:data.profilepic})
    }

      


      


    return (
        <View style={{flex:1}}>

            <View style={{marginTop:heightPercentageToDP('3%')}}>
                {
                    iseditprof ?
                    <TouchableOpacity onPress={() =>  navigation.navigate(EDITPROFILE,{phoneno:data.phone,editdata:2})}> 
                        <FontAwesome name="pencil" size={heightPercentageToDP('3%')}  style={{ display:'flex',alignSelf:'flex-end',marginRight:widthPercentageToDP('28%') }} />
                    </TouchableOpacity>

                : null

                }
                
                <View style={{alignSelf:'center'}}>
                
                 <Image 
                    source={{uri: profilepic }} PlaceholderContent={<ActivityIndicator/>}  style={{width: widthPercentageToDP('25%'), height:  widthPercentageToDP('25%'), borderRadius:  widthPercentageToDP('25%')/ 2}} 
                />
                
                
                 </View>
                <View style={{display:'flex',alignSelf:'center',marginTop:heightPercentageToDP('1%')}}>
                    <Text style={{textAlign:'center',fontSize:heightPercentageToDP('2.5%'),fontWeight:'700'}}>
                      {name}
                    </Text>
                    <Text  style={{textAlign:'center',fontSize:heightPercentageToDP('2%')}}>
                        {`${iscity},${isstate}`} 
                        
                    </Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',alignSelf:'center',marginTop:heightPercentageToDP('0.5%')}}> 
                    <Text style={{textAlign:'center',fontSize:heightPercentageToDP('2.5%'),fontWeight:'600'}}>
                        {age}{' .    '}
                    </Text>
                    
                     <Text style={{textAlign:'center',fontSize:heightPercentageToDP('2.5%'),fontWeight:'600'}}>
                         {isjob}
                        
                    </Text>
                </View>

                {
                    isshowmsg
                    ?
                    <View style={{marginVertical:heightPercentageToDP('2%'),width:widthPercentageToDP('25%'),justifyContent:'center',alignSelf:'center'}}>
                    <Button title="message" type="outline" onPress={sendmsg} />
                    </View>                
                    
                    : null
                }

               

            </View> 
             {/* tabs in react native  */}
             <View  style={{backgroundColor:Customclr.light,flex:1}}>

                <Divider style={{ backgroundColor: Customclr.Lightgray, height:heightPercentageToDP('0.4%') ,marginTop:heightPercentageToDP('2%')}}  />
                 <Tab.Navigator>

                    {
                        route.params ? null :
                        <Tab.Screen name={I18n.t('Post')} component={Posts}  />

                    }
                    
                    <Tab.Screen name={I18n.t('Family')}  children={()=><Famliy route={route} />}  options={{lazy:true, optimizationsEnabled:true}}  />
                    <Tab.Screen name={I18n.t('Details')}  children={()=><Details data={route.params ? isotherdata :  data}/>}  />
                    <Tab.Screen name={I18n.t('friends')}  children={()=><Firends route={route} />}  options={{lazy:true, optimizationsEnabled:true}} />

                </Tab.Navigator>
                
                </View>
             
        </View>
    )
}






const Posts = () =>(
    <>
       <PostHtml  type={2}/>
    </>
)


export default ProfileHtml

const styles = StyleSheet.create({})
