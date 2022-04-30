import React, { useContext } from 'react'
import { View, Text ,FlatList,TouchableOpacity, SafeAreaView, Pressable, ActivityIndicator, Platform} from 'react-native'
import styles from './MenuCss'
// import Feather  from 'react-native-vector-icon/Feather';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import {  widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Avatar, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core'; 
import { BLOODGROUP, BUSINESS, CONTACTUS, DIRECTORY, EVENTS, METROMONY, POINTRULE, PROFILE, SETTING, SHARESCREEN } from '../../Nevigation/RoutesName';
import { GlobalContext } from '../../context/Provider';
import Customclr from '../../assets/theme/Customclr';
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../Helper/axiosInstance';





const Item = ({ title,icon,Nevigation,aldta,scrb }) => 
{
  const nevigation = useNavigation();
  
  return(
    <View style={styles.item}>

    {
      scrb == 1 ? null  : 

      <View style={{alignSelf:'flex-end',paddingRight:wp('2%')}}> 
        <Icon name="lock"  color={Customclr.red} size={wp('3%')}/>
      </View>

    }      

      <TouchableOpacity onPress={()=>{scrb !== 1 ? alert('please Subscribe to access this feature'):  nevigation.navigate(Nevigation)}}>
           <View style={{justifyContent:'center',alignItems:'center',opacity:0.8}}>{icon}</View> 
          <Text style={styles.title}>{i18n.t(title)}</Text>
      </TouchableOpacity>

    </View>
  )
};


const MenuHtml = () => {

  
  const nevigation = useNavigation();

  

  const {userState:{data}} = useContext(GlobalContext); 
  

  

const DATA = [
  {
    id: '1', 
    title: 'Directory',
    icon:<AntDesign name="contacts" size={wp('10%')} color="#DA6C0A" />,
    Nevigation:DIRECTORY,
    aldta:0,
    scrb:1
   
  },
  {
    id: '2',
    title: 'MetriMony',
    icon:<MaterialCommunityIcons name="ring" size={wp('10%')} color="#0B7834" />,
    Nevigation:METROMONY,
    aldta:0,
    scrb:1


  },
  {
    id: '3',
    title: 'Business',
    icon:<FontAwesome5 name="business-time" size={wp('10%')} color="#0053AB" />,
    Nevigation:BUSINESS,
    aldta:0,
    scrb:1
    // scrb:data.subscribtion

  },
  {
    id: '4',
    title: 'Events',
    icon:<MaterialIcons name="event-available" size={wp('10%')} color='#6E1F88' />,
    Nevigation:EVENTS,
    aldta:0,
    scrb:1
  },
  {
    id: '5',
    title: 'Blood_Donation',
    icon:<MaterialCommunityIcons name="blood-bag" size={wp('10%')} color='#DA0B05' />,
    Nevigation:BLOODGROUP,
    aldta:0,
    scrb:1
   
  }, 
  {
    id: '6',
    title: 'Profile',
    icon:<FontAwesome name="user" size={wp('10%')} color="#B4806B" />,
    Nevigation:PROFILE, 
    aldta:0,
    scrb:1
    
  },
  {
    id: '7',
    title: 'Shareapp',
    icon:<FontAwesome name="share" size={wp('10%')} color="#4BA2BE" />,
    Nevigation:SHARESCREEN,
    aldta: Platform.OS ==  0 ,
    scrb:1
    // aldta: Platform.OS == 'android' ? 0 : 1


  }, 
  {
    id: '8',
    title: 'Contact_Us',
    icon:<MaterialCommunityIcons name="contacts" size={wp('10%')} color="#AE03B4" />,
    Nevigation:CONTACTUS,
    aldta:0,
    scrb:1
   
  }, 
  {
    id: '9',
    title: 'Setting',
    icon:<Ionicons name="settings" size={wp('10%')} color="#FD5C61" />,
    Nevigation:SETTING,
    aldta:0,
    scrb:1
  },

];





      const _renderItem = ({ item,Nevigation }) => (
        <Item title={item.title} icon={item.icon} Nevigation={item.Nevigation} aldta={item.aldta} scrb={item.scrb}/>
      );


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
       
      const handlepayment = () =>{
     
      }
      

      
    
    return (
   
        <SafeAreaView style={styles.menucontainer}>
            <View style={styles.menutop}>
                         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:hp('1%')}}>

                         

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>


                      <Avatar source={require('../../assets/images/logo.png')} containerStyle={{justifyContent:'center',margin:wp('1%')}} size={hp('4%')}  />  
                     <Text style={{fontSize:wp('4.3%'),justifyContent:'center',margin:wp('1%'),alignSelf:'center',fontWeight:'700'}}>  {i18n.t('kalaar_pariwaar')}  {i18n.t('India')} </Text> 

                    </View>

                    

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                    <FontAwesome name="trophy"  size={wp('6%')} style={{justifyContent:'center',margin:wp('1%')}} color="black"  /> 
                        

                     
                    <Text  style={{fontSize:wp('5%'),justifyContent:'center',margin:wp('1%')}}>
                      {
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

                </View>
            </View>

            {/* contain part 02 */}


            <View style={{marginVertical:hp('2%')}}>
                      <View style={{width:wp('100%'),height:hp('5%'),backgroundColor:Customclr.orangeshade1,justifyContent:'center',alignContent:'center'}}>
                        <Text style={{textAlign:'center',alignSelf:'center',fontSize:hp('2.5%'),fontWeight:'800',color:Customclr.light}}>नई परिकल्पना , नई सोच  </Text>

                      </View>




            </View>


            <View style={styles.menumid}>

            <FlatList
                 data={DATA}
                 renderItem={_renderItem}
                 keyExtractor={item => item.id} 
                 numColumns={3}
              />
            </View>
            <View style={styles.menubottom}>

            <View style={{display:'flex',flexDirection:'column'}}>
              <Icon name="trophy" type="font-awesome"  color={Customclr.yellow} size={hp('5%')} />
             
              <Text style={{fontSize:hp('2.8%'),fontWeight:'600',margin:wp('3%'),justifyContent:'center',alignItems:'center',textAlign:'center',color:Customclr.text}}>
              {i18n.t('your_prestigious_point_is')} : 
              {
                        ispoint == 0 ?(
                          <View>
                            <ActivityIndicator size='small' color={Customclr.orangeshade0} />
                          </View>

                        ):(
                          ispoint

                        )
                      }
                      
              </Text>
              
              <Pressable onPress={()=>{nevigation.navigate(POINTRULE)}}>
              <Text style={{fontSize:hp('1.8%'),fontWeight:'600',justifyContent:'center',alignItems:'center',textAlign:'center',color:Customclr.Lightgray,opacity:0.8}}>
              {i18n.t('click_here_to_know_more')}
              </Text>

              </Pressable>
              </View>

              {/* <Text style={styles.menubottom_text}>
                Unlock all the features of this app when you Subscribe for just 499/- per year
              </Text>


              <Button style={styles.menubottom_button} title="Subsucrbe" onPress={handlepayment}/> */}

            </View>
        </SafeAreaView>

    )




  
}




export default MenuHtml



//bakeup




// <SafeAreaView style={styles.menucontainer}>
// <View style={styles.menutop}>
//     <View style={styles.meutop_leftcontainer}>
      

//         {/* <Text style={{fontSize:wp('4%'),margin:wp('1%')}}>{data.state+','+data.city}</Text>
//         <Icon  type="material"  name="location-pin" containerStyle={{margin:wp('1%'),marginTop:hp('0.8%')}} size={wp('4%')} color={Customclr.red} />
//         <Avatar rounded source={{uri:data.profilepic}} /> */}
//     </View>
//     <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:hp('3%')}}>

//         <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>


//         <Avatar source={require('../../assets/images/logo.png')} containerStyle={{justifyContent:'center',margin:wp('1%')}} size={wp('6%')}  />  
//          <Text style={{fontSize:wp('4%'),justifyContent:'center',margin:wp('1%')}}>  {i18n.t('kalaar_pariwaar')}  {i18n.t('India')} </Text> 

//         </View>

//         <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
//         <FontAwesome name="trophy"  size={wp('5%')} style={{justifyContent:'center',margin:wp('1%')}} color="black"  /> 
            

         
//         <Text  style={{fontSize:wp('4%'),justifyContent:'center',margin:wp('1%')}}>
//           {
//             ispoint == 0 ?(
//               <View>
//                 <ActivityIndicator size='small' color={Customclr.orangeshade0} />
//               </View>

//             ):(
//               ispoint

//             )
//           }
          
//           </Text> 
//         </View>

//     </View>
// </View>


// <View style={styles.menumid}>

// <FlatList
//      data={DATA}
//      renderItem={_renderItem}
//      keyExtractor={item => item.id} 
//      numColumns={3}
//   />
// </View>
// <View style={styles.menubottom}>

// <View style={{display:'flex',flexDirection:'column'}}>
//   <Icon name="trophy" type="font-awesome"  color={Customclr.yellow} size={hp('5%')} />
 
//   <Text style={{fontSize:hp('2.8%'),fontWeight:'600',margin:wp('3%'),justifyContent:'center',alignItems:'center',textAlign:'center',color:Customclr.accent,}}>
//   {i18n.t('your_prestigious_point_is')} : 
//   {
//             ispoint == 0 ?(
//               <View>
//                 <ActivityIndicator size='small' color={Customclr.orangeshade0} />
//               </View>

//             ):(
//               ispoint

//             )
//           }
          
//   </Text>
  
//   <Pressable onPress={()=>{nevigation.navigate(POINTRULE)}}>
//   <Text style={{fontSize:hp('1.8%'),fontWeight:'600',justifyContent:'center',alignItems:'center',textAlign:'center',color:Customclr.Lightgray,opacity:0.8}}>
//   {i18n.t('click_here_to_know_more')}
//   </Text>

//   </Pressable>
//   </View>

//   {/* <Text style={styles.menubottom_text}>
//     Unlock all the features of this app when you Subscribe for just 499/- per year
//   </Text> */}


//   {/* <Button style={styles.menubottom_button} title="Subsucrbe"/> */}

// </View>
// </SafeAreaView>
 