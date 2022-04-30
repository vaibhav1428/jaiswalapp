import i18n from 'i18n-js'
import React from 'react'
import { Alert, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Divider, Icon, ListItem, Overlay } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import logoutUser from '../../context/actions/logoutUser'
import { GlobalContext } from '../../context/Provider'
import * as Localization from 'expo-localization';
import { ChangeLangAction } from '../../context/actions/ChangeLangAction'
import I18n from 'i18n-js'



const SettingHtml = () => {

    const {userState:{data},authDispatch,langDiaspatch} = React.useContext(GlobalContext);
        const [isovervisible, setoverVisible] = React.useState(false);

    const togglelangOverlay = () => {
        setoverVisible(!isovervisible);
    };
  
  


    const logoutuserbtn = () =>{

        if(Platform.OS == 'web'){
            logoutUser()(authDispatch)
        }
        else{
            Alert.alert(
              "Logout", 
              "DO you want to Logout !!",
              [
                {
                  text: "Cancel",
                  onPress: () =>{},
                  style: "cancel"
                },
                { text: "OK", onPress: () => (logoutUser()(authDispatch)) }
              ]
            );

        }


     }

     const languagechange = (lang) =>{


    ChangeLangAction(lang)(langDiaspatch)  ;
    togglelangOverlay();


      }
  
     
     React.useEffect(()=>{
       
     },[authDispatch])



    return (
        <View>
            <Pressable onPress={logoutuserbtn}>
                 <View style={{margin:heightPercentageToDP('2%'),display:'flex',flexDirection:'row',justifyContent:'space-between'}} > 
           
               <View>
                   <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600'}}>
                       {I18n.t('Logout')}
                   </Text>

               </View>
               <View>
                   <Icon
                    name='logout'
                    type='material'
                    size={heightPercentageToDP('4%')}
                    color='#517fa4'
                    
                    />
                   
               </View>
       
              
           </View>
           </Pressable> 

           <Pressable onPress={togglelangOverlay}>
        
                 <View style={{margin:heightPercentageToDP('2%'),display:'flex',flexDirection:'row',justifyContent:'space-between'}} > 
           
                    <View>
                        <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600'}}>
                        {I18n.t('Language')}
                        </Text>

                    </View>
                    <View>
                        <Icon
                            name='language'
                            type='entypo'
                            size={heightPercentageToDP('4%')}
                            color='#517fa4'
                            
                            />
                        
                    </View>          
                </View>

           </Pressable> 
     


           <Divider style={{ backgroundColor: 'blue' }} />

           <View style={{justifyContent:'center',alignItems:'center',marginTop:heightPercentageToDP('5%')}}>
               <Text>
                   Jaiswal sarwarigya
               </Text>
               <Text>
                   Copyright@ jaiswalSarwarighya
               </Text>
               <Text>
               {new Date().getFullYear()+ '-' + new Date().getFullYear()+1} 
               </Text>
           </View>



           <Overlay overlayStyle={{width:widthPercentageToDP('80%')}} isVisible={isovervisible} onBackdropPress={togglelangOverlay}>

                    <View style={{padding:heightPercentageToDP('2%')}}> 
                        <Text style={{fontSize:heightPercentageToDP('3.5%'),fontWeight:'600',textDecorationLine: 'underline',textAlign:'center'}}>
                            Language
                        </Text>

                     <TouchableOpacity onPress={()=>languagechange('en')} >
                        <ListItem bottomDivider>
                        <ListItem.Content>

                            <ListItem.Title style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600'}} >
                                English
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>languagechange('hi')} >
                         <ListItem bottomDivider>         
                            <ListItem.Content> 
                                <ListItem.Title style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600'}} >
                                    हिंदी
                            </ListItem.Title>
                            </ListItem.Content>
                         
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                        

                    </View>
                 
          
            </Overlay>
        </View>
    )
}

export default SettingHtml

const styles = StyleSheet.create({})
