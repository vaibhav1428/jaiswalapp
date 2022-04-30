import React, { useContext } from 'react'
import {  Pressable, ScrollView, StyleSheet, Text, TextInput, View,Permissions, KeyboardAvoidingView } from 'react-native'
import { Button,Divider,FAB, Icon, Image, Input, Overlay   } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Video, AVPlaybackStatus } from 'expo-av';
import firebase from "firebase/app";
import { showMessage } from 'react-native-flash-message'
import { GlobalContext } from '../../context/Provider'
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../../Helper/axiosInstance'
import { DEFAULT_IMAGE_URI } from '../../Constants/general' 
import i18n from 'i18n-js';

const CreatePostHtml = () => {
    const [image, setImage] = React.useState(DEFAULT_IMAGE_URI);
    const [video, setvideo] = React.useState("");
    const [uploadoverlay, setuploadoverlay] = React.useState(false);
    const [uploadvideooverlay, setuploadvideooverlay] = React.useState(false);
    const [changetype, setchangetype] = React.useState('image');  
    const [playstatus, setplayStatus] = React.useState({});
    const [btnloading, setbtnloading] = React.useState(false);
    const [btndisable, setbtndisable] = React.useState(true);
    const [posttitle,setposttitle] = React.useState(" ");
    const [isimagefile, setisimagefile] = React.useState();
  
    const navigation = useNavigation();
    const {userState:{data}} = useContext(GlobalContext); 
      const toggleuploadoverlay = () => {
        setuploadoverlay(!uploadoverlay);
    };


    const toggleuploadvideooverlay= () => {
        setuploadvideooverlay(!uploadvideooverlay);
      };





      const imageupload = async(value) =>  {
          if(value == 1 ){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.1,
              });          
              console.log(result);          
              if (!result.cancelled) {

                
                setbtndisable(false);
                setImage(result.uri);
                setuploadoverlay(false);
                setchangetype('image')
              }

           

          } 
          
          if(value == 2 ){
            
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.1,
              });          
              console.log(result);          
              if (!result.cancelled) {
                // //-----------------------------
                //   setisimagefile({
                //     uri:result.uri,
                //     type:`image/${result.uri.split(".")[1]}`,
                //     name:`myimage.${result.uri.split(".")[1]}`
                //   }
                //  )

                // //-----------
                setbtndisable(false);
                setImage(result.uri);
                setuploadoverlay(false);
                setchangetype('image')
              }
              
          }
         

      } 
      
      const vidoeupload = async(value) =>  {
        

        if(value == 1 ){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes:'Videos',
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.2,
              });          
              console.log(result);          
              if (!result.cancelled) {






                setbtndisable(false);
                setvideo(result.uri);
                setuploadvideooverlay(false);
                setchangetype('video')
              }

           

          } 
          
          if(value == 2 ){
            
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:'Videos',
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.2,
              });          
              console.log(result);          
              if (!result.cancelled) {
                setbtndisable(false);
                setvideo(result.uri);
                setuploadvideooverlay(false);
                setchangetype('video')
              }
              
          }
       

      }


      // const uploadpost123 = () =>{

      //   const frmbody = new FormData();
      //   frmbody.append('file',isimagefile);

      //   axiosInstance.post('/checkimage_upload',{
      //     image:frmbody,
      // }).then((res) =>{
      //       axiosInstance.post('/Create_Post',{
      //         title:posttitle.trim(),
      //         type:changetype,
      //         posturl:url,
      //         userid:userid
      //       }).then((res) =>{
      //          if(res.data.status ==  1){
      //            showMessage({
      //           message: res.data.message,
      //           type: "success",
      //           icon: "success",
      //         }); 
      //         navigation.goBack();
      //       } 
      //        if(res.data.status ==  0){
      //         showMessage({
      //           message: res.data.message,
      //           type: "danger",
      //           icon: "danger",
      //           });
            

      //         }
      //        setbtnloading(false);
      //        setbtndisable(false);             
              
      //     })
        
       

      // })





    //  }


      const uploadpost = async(changetype,userid) => {



        if(posttitle.length  > 200){

          showMessage({
            message: "Title Lenght shoul not be greater then 200",
            type: "danger",
            icon: "danger",
            }); 
  
            return false ; 
        }
        setbtnloading(true);
        setbtndisable(true);
       const upladname =  Date.now() ; 
       if(changetype ==="image"){

           const response = await fetch(image);
          const blob = await response.blob();
          var ref = firebase.storage().ref().child(`post/postimage/${upladname}`);
          ref.put(blob).then(()=>{
            ref.getDownloadURL().then((url)=>{
              console.log(url)
              axiosInstance.post('/Create_Post',{
                title:posttitle.trim(),
                type:changetype,
                posturl:url,
                userid:userid
            }).then((res) =>{
              if(res.data.status ==  1){
                showMessage({
                  message: res.data.message,
                  type: "success",
                  icon: "success",
                }); 
                navigation.goBack();
              } 
              if(res.data.status ==  0){
                showMessage({
                  message: res.data.message,
                  type: "danger",
                  icon: "danger",
                  });
               

              }
              setbtnloading(false);
              setbtndisable(false);             
                
            })


            
            })
          });


        }
        if(changetype ==="video"){
          const response = await fetch(video);
          const blob = await response.blob(); 
           var ref = firebase.storage().ref().child(`post/postimage/${upladname}`);
          ref.put(blob).then(()=>{
            ref.getDownloadURL().then((url)=>{
              console.log(url);
              axiosInstance.post('/Create_Post',{
                title:posttitle.trim(),
                type:changetype,
                posturl:url,
                userid:userid
            }).then((res) =>{
              if(res.data.status ==  1){
                showMessage({
                  message: res.data.message,
                  type: "success",
                  icon: "success",
                }); 
                navigation.goBack();
              } 
              if(res.data.status ==  0){
                showMessage({
                  message: res.data.message,
                  type: "danger",
                  icon: "danger",
                  });
               

              }

              setbtnloading(false);
              setbtndisable(false);
                 
                
            })

            })
          });
        }
       
       


      }

     const  postchangefun = (value) =>{

      if(value.length >200 ){
        showMessage({
          message: "Title Lenght shoul not be greater then 200",
          type: "danger",
          icon: "danger",
          });
      }
        setposttitle(value);



     }
      
     




    return (
        <ScrollView style={{display:'flex',flexDirection:'column'}}>
           <KeyboardAvoidingView>

            <View>
            {/* <TextInput placeholder="Please write something" style={{height:heightPercentageToDP("30%"),fontSize:heightPercentageToDP('3%')}}  multiline="true"/> */}
            
            <Input placeholder="Please write something" 
            onChangeText={(val)=>{postchangefun(val)}} 
            keyboardType="ascii-capable"           
            style={{height:heightPercentageToDP("30%"),fontSize:heightPercentageToDP('3%'),textAlignVertical: 'top'}}
            multiline={true} />
            </View>

            <View style={{height:widthPercentageToDP('50%'),borderWidth:0.5,flexDirection:'row',display:'flex'}}>
                <View style={{width:widthPercentageToDP('40%'),height:widthPercentageToDP('50%'),borderWidth:0.5}}>
                    {
                        changetype == "image" ? <Image source={{ uri:image }}  resizeMode="stretch" style={{ width:widthPercentageToDP('40%'), height: widthPercentageToDP('50%') }}/>
                        : 
                        <Video
                        style={{ width:widthPercentageToDP('40%'), height: widthPercentageToDP('50%') }}
                        source={{
                          uri: video,
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setplayStatus(() => status)}
                      />
                    }

                </View>
                <View>

                <View style={{width:widthPercentageToDP('60%'),height:widthPercentageToDP('50%'),alignContent:'center',justifyContent:'center',backgroundColor:Customclr.orangeshade0}}>

                    <TouchableOpacity onPress={toggleuploadoverlay}>
                
                    <View style={{display:'flex',flexDirection:'row',marginLeft:widthPercentageToDP('2%'),alignSelf:'center',alignItems:'center'}}>
                        <FontAwesome5
                            name="camera"
                            size={widthPercentageToDP('4%')}
                            color={Customclr.dark}
                            />
                        <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'700',marginLeft:widthPercentageToDP('2%') , textDecorationLine:'underline'}}>
                           {i18n.t('Upload_image')}
                            

                        </Text> 
                    
                    </View>

                    </TouchableOpacity>
                    {/* <Divider orientation='horizontal' width={2} color={Customclr.dark} />  */}

                    {/* <TouchableOpacity onPress={toggleuploadvideooverlay} style={{display:'none'}}>

                    <View style={{height:widthPercentageToDP('28%'),display:'flex',flexDirection:'row',marginLeft:widthPercentageToDP('2%'),alignSelf:'center',alignItems:'center'}}>
                        <FontAwesome5
                            name="video-camera"
                            size={widthPercentageToDP('4%')}
                            color={Customclr.dark}
                            />
                        <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'700',marginLeft:widthPercentageToDP('2%')}}>
                        {i18n.t('Upload_Video')}

                        </Text> 

                    </View>

                    </TouchableOpacity> */}

                



                </View>
            </View>
                
        </View>

            <View style={{display:'flex',alignItems:'center'}} >
            <Button loading={btnloading} disabled={btndisable}   title= {i18n.t('Post')} onPress={()=>{uploadpost(changetype,data.id)}} buttonStyle={{width:widthPercentageToDP('70%'),borderRadius:50,backgroundColor:Customclr.orange,alignSelf:'center',marginTop:heightPercentageToDP('5%')}} />
           
            </View>

            <View>





        

        </View>
       </KeyboardAvoidingView>

 {/* -------------------------------------------------Photo oevrlay----------------------------------------------------- */}
        <Overlay  overlayStyle={{alignSelf:'center',justifyContent:'center',display:'flex',borderWidth:3}} isVisible={uploadoverlay} onBackdropPress={toggleuploadoverlay}>

        <Pressable onPress={()=>imageupload(1)}>
        <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600',margin:heightPercentageToDP('2%'),textAlign:'center'}}>
           {<Icon  name='camera'  type='entypo'  />} 
           {' '}
           
           {i18n.t('Take_An_Image')}

        </Text> 

        </Pressable>
        <View>

        <Divider
                orientation="horizontal"
                width={2}
        />
            </View>
        <Pressable onPress={()=>imageupload(2)}>
        <Text style={{fontSize:heightPercentageToDP('2%'),fontWeight:'600',margin:heightPercentageToDP('2%'),textAlign:'center'}}>
        {<Icon  name='photo'  type='font-awesome'  />}
        {' '}
        {i18n.t('Upload_From_Gallary')}
            
        </Text>
        </Pressable>

        </Overlay>


  {/* ------------------------------------------------------------------video overlay----------------------------------------------------- */}

         <Overlay overlayStyle={{alignSelf:'center',justifyContent:'center',display:'flex',borderWidth:3}}  isVisible={uploadvideooverlay} onBackdropPress={toggleuploadvideooverlay}>
        
        <Pressable  onPress={()=>{vidoeupload(1)}}>
         <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600',margin:heightPercentageToDP('2%'),textAlign:'center'}}>
           {<Icon  name='video'  type='entypo'  />} 
           {' '}
           
           { i18n.t('Take_A_Video')}

        </Text>
        </Pressable> 
        <View>

        <Divider
                orientation="horizontal"
                width={2}
        />
            </View>

        <Pressable onPress={()=>{vidoeupload(2)}}>
        
        <Text style={{fontSize:heightPercentageToDP('2.3%'),fontWeight:'600',margin:heightPercentageToDP('2%'),textAlign:'center'}}>
        {<Icon  name='photo-video'  type='font-awesome-5'  />}
        {' '}
        {i18n.t('Upload_From_Gallary')}
            
        </Text>

        </Pressable>
        </Overlay>

        </ScrollView>
        
    )
}

export default CreatePostHtml

const styles = StyleSheet.create({})
