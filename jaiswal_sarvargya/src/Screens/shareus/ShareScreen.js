import React from 'react'
import { StyleSheet, View,Platform ,Text, Clipboard } from 'react-native'
import { Button, Divider, Image} from 'react-native-elements';
// import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';
import ViewShot from "react-native-view-shot";
import * as Sharing from 'expo-sharing';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';
import i18n from 'i18n-js';
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../Helper/axiosInstance';
import { Share } from 'react-native';


const ShareScreen = () => {
    const [islink, setlink] = React.useState('')
    const viewShot = React.useRef();
    const {userState:{data}} = React.useContext(GlobalContext); 



    React.useEffect(() => {

                axiosInstance.post('/UserDetails',{
                    id:data.id              
                    }).then((res) =>{
                    if( res.data.status == 1){
                      setlink(res.data.link[0].value);
                    }
                    if(res.data.status == 0){
                        setlink(res.data.link[0].value);
                    }
                }) 

      
    }, [])



   const captureAndShareScreenshot = async() => {
        viewShot.current.capture().then((uri) => {


        const url = "file://" + uri;
        const messageText = `${data.name} is invited you to this app please click here to join us           ${islink}`;
        const options = {
        dialogTitle: messageText,
        };
        Sharing.shareAsync(url,options);
         
        }),
        (error) => console.error("Oops, snapshot failed", error);
        };

        const sharelinkpage =async() =>{
            Share.share({
                message:
                  `${data.name} is invited you to this app please click here to join us           ${islink}`,
              });

            
        }


    


    return (
        <View style={{ flex: 1,backgroundColor:Customclr.dark}}>
            <Text style={{color:Customclr.light,fontSize:heightPercentageToDP('3.5%'),textAlign:'center',fontWeight:'800',marginBottom:heightPercentageToDP('1%')}}> Your ID</Text>
            <ViewShot  ref = {viewShot} options={{ format: "jpg", quality: 0.9 }} >
                <View style={{height:heightPercentageToDP('35%'),width:widthPercentageToDP('100%'),borderWidth:4,borderColor:Customclr.orangeshade0,backgroundColor:Customclr.light}}>
                    <View style={{paddingHorizontal:widthPercentageToDP('3%'),paddingVertical:widthPercentageToDP('3%'),display:'flex',flexDirection:'row'}}>
                        <Image source={require('../../assets/images/logo.png')} containerStyle={{width:heightPercentageToDP('10%'),height:heightPercentageToDP('10%')}} />
                         <Text style={{textAlign:'center',fontSize:heightPercentageToDP('3%'),alignSelf:'center',fontWeight:'800'}}>Kalar Pariwaar</Text>                  
                    </View>

                    <Divider width={1.5} color={Customclr.orangeshade0} style={{padding:0}}/>
                    <View style={{flexDirection:'row',marginVertical:widthPercentageToDP('5%'),paddingHorizontal:widthPercentageToDP('3%'),paddingVertical:widthPercentageToDP('3%')}}>
                        <View>
                            <Image source={{uri: data.profilepic }} style={{width: widthPercentageToDP('25%'), height:  widthPercentageToDP('25%'), borderRadius:18}}  />
                        </View>                   
                        
                         <View style={{margin:widthPercentageToDP('5%')}}>
                             <Text style={{fontSize:heightPercentageToDP("2.5%"),fontWeight:'600'}}>
                                 {data.name}
                             </Text>

                             <Text style={{fontSize:heightPercentageToDP("2%"),fontWeight:'600',color:Customclr.orangeshade0}}>
                                 Member
                                 
                             </Text>
                             
                             <Text style={{fontSize:heightPercentageToDP("2.2%"),fontWeight:'600',color:Customclr.orangeshade0}}>
                                 {data.city},{data.state}
                                 
                             </Text>
                             
                            
                        </View>

                    </View>
                         

                </View>
               

            </ViewShot>

                <Button title="share app step: 1" onPress={captureAndShareScreenshot}  containerStyle={{marginVertical:heightPercentageToDP('3%'),width:widthPercentageToDP('90%'),alignSelf:'center'}} buttonStyle={{borderRadius:30}}/>
              
                <Button title="share app step: 2" onPress={sharelinkpage}  containerStyle={{marginVertical:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignSelf:'center'}} buttonStyle={{borderRadius:30,backgroundColor:Customclr.orangeshade3}}/>
    



      </View>
    )
}

export default ShareScreen

const styles = StyleSheet.create({
   

})


// import React from 'react'
// import { StyleSheet, Text, View,Share } from 'react-native'
// import { Button } from 'react-native-elements';

// const ShareScreen = () => {


//     const onShare = async () => {
//         try {
//           const result = await Share.share({
//             message: 'React Native | A framework for building native apps using React',
//           });
//           if (result.action === Share.sharedAction) {
//             if (result.activityType) {
//               // shared with activity type of result.activityType
//             } else {
//               // shared
//             }
//           } else if (result.action === Share.dismissedAction) {
//             // dismissed
//           }
//         } catch (error) {
//           alert(error.message);
//         }
//       };



//     return (
//           <View style={{ marginTop: 50 }}>
//       <Button onPress={onShare} title="Share" />
//     </View>
//     )
// }

// export default ShareScreen

// const styles = StyleSheet.create({})
