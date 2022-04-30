import React,{useContext} from 'react'
import { TextInput,Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View,ScrollView } from 'react-native'
import { Avatar ,Text,Icon,Divider } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styles from './HomeCss'
import PostHtml from './Post/PostHtml';
import  FontAwesome5   from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';
import {  CREATEPOST, PEOPLE, PROFILE } from '../../Nevigation/RoutesName';
import { GlobalContext } from '../../context/Provider';
import logoutUser from '../../context/actions/logoutUser';
import { DEFAULT_IMAGE_URI } from '../../Constants/general';
import Customclr from '../../assets/theme/Customclr';


const HomeHtml = () => {
    const [prefile,setprefile] = React.useState(DEFAULT_IMAGE_URI);
    const navgation = useNavigation();

    const {authDispatch,userState:{data}} = React.useContext(GlobalContext);


    React.useEffect(() => {
   
            if(data != ""){
                setprefile(data.profilepic);
            }    
    }, [data])


    React.useEffect(() => {
       
    }, [navgation])

    



    const logoutuserbtn = () =>{

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

   
   React.useEffect(()=>{
     
   },[logoutuserbtn])



    return (

        // <ScrollView>
        
        <View style={styles.HomeScroll}>
            <View style={styles.HomeContainer}>
              
                    <View style={styles.HomeLogo}>
                      <TouchableOpacity onPress={logoutuserbtn}>
                    <Image  style={styles.PostTop_oneImage}  source={require('../../assets/images/logo.png')}   alt="logo" />

                   
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.HomeSearch}  onPress={()=>{navgation.navigate('friend')}}> 
                        <TextInput editable={false}  style={styles.HomeSearchTextInput} placeholder="Search"/>
                        <TouchableOpacity style={styles.HomeSearch_Button} on onPress={()=>{navgation.navigate('friend')}}>
                        <FontAwesome5 name="search" size={widthPercentageToDP('5%')} color="black" />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{navgation.navigate(CREATEPOST)}} style={styles.Homeavatar}>
                    <Icon reverse color={Customclr.orangeshade0} name="create" type="material" size={widthPercentageToDP('5.5%')} />
                    </TouchableOpacity>
            </View> 

            {/*-------------------------------------------------------------- create post -=------------------- */}
            {/* <TouchableOpacity style={styles.HomeUpload} onPress={()=>navgation.navigate(CREATEPOST)}>
                    <View style={styles.HomeUpload_one}>
                        <View style={styles.HomeuploadAvatar}>
                        <Icon name="create" type="ionicon" size={widthPercentageToDP('8%')} color="black" />
                         </View>
                        
                        <View style={styles.HomeUpload_TextView}>
                           <Text  style={styles.HomeSearchTextInput} > Create A Post Here... </Text>
                        </View>
                   </View> 
                   <Divider style={{ backgroundColor: Customclr.Lightgray,marginTop:10 }} />
                  <View style={styles.Homeupload_photo_Comtainer}>
                       <View style={styles.Homeupload_photo}>
                           <Icon type="font-awesome-5"  name='image'     color={Customclr.green}/>
                           <Text h5 style={{fontWeight:'600',marginLeft:10}}>
                               Post Photo's
                           </Text>
                           
                       </View>
                       <View style={styles.Homeupload_photo}>
                       <Icon type="font-awesome"  name='video-camera'      color={Customclr.red}/>
                           <Text h5 style={{fontWeight:'600',marginLeft:10}}>
                               Post Photo's
                           </Text>
                       </View>
                   </View>
               </TouchableOpacity> */}
            
          


            {/* ---------------------------------Posts------------------------------------------ */}

            <View>


               <PostHtml type={1}/>

            </View>
       
            
        </View>

        // </ScrollView>
    )
}

export default HomeHtml
