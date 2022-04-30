import React from 'react'
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Image, Input } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../../assets/theme/Customclr';
import { DEFAULT_IMAGE_URI } from '../../../Constants/general';
import axiosInstance from '../../../Helper/axiosInstance';

const ReposrtPost = ({route}) => {
    const {img,title,userid,postid} = route.params;

    const [isimg, setimg] = React.useState(DEFAULT_IMAGE_URI)
    const [istitle, settitle] = React.useState('')
    const [isuserid, setuserid] = React.useState('')
    const [ispostid, setpostid] = React.useState('')
    const [input, setinput] = React.useState('')
    const [loading, setloading] = React.useState(false)


    React.useLayoutEffect(() => {
        setimg(route.params.img);
        setpostid(route.params.postid);
        setuserid(route.params.userid);
        settitle(route.params.title)
       
    }, [route.params])


    const reportbutton =() =>{



        if(input == ""){
            showMessage({
            message: "please write valid reasion ",
            type: "danger",
            icon: "danger",
            });
        return false;
        }


        setloading(true);
        axiosInstance.post('/reportpost',{
            postid:ispostid,
            userid:isuserid                
            }).then((res) =>{
            let newarr = res.data.result;
            if( res.data.status == 1){
                showMessage({
                    message: res.data.message,
                    type: "success",
                  });
                  setloading(false);
            
               
            }
            if(res.data.status == 0){
                showMessage({
                    message: res.data.message,
                    type: "warning",
                  });
                  setloading(false);
            
            }
        }) 



    }

    return (
        <ScrollView >
            <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : null}
           style={{  flex:1}}
           keyboardVerticalOffset={90}>
               
               <Input label="Reason" multiline   onChangeText={(text)=>{setinput(text)}} onSubmitEditing={()=>{Keyboard.dismiss()}} placeholder="Write the valid Reasion For Report On This Post" style={{height:heightPercentageToDP('20%')}} containerStyle={{marginTop:heightPercentageToDP('5%')}}/>


                    <View style={{alignItems:'center',marginBottom:heightPercentageToDP('3%')}}> 

                        <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600',flexShrink: 1,marginLeft:widthPercentageToDP('1%'),marginBottom:heightPercentageToDP('0.5%')}}>
                            {istitle}

                        </Text>
                        
                        <Image  source={{uri:isimg}} containerStyle={{width:widthPercentageToDP('80%'),height:heightPercentageToDP('35%')}} />

                    </View>

                       
                        <Button loading={loading} title={"Report"} onPress={reportbutton} buttonStyle={{backgroundColor:Customclr.orangeshade0}} containerStyle={{ width:widthPercentageToDP('70%'),justifyContent:'center',alignSelf:'center',borderRadius:30}}/>
                    
              
                </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default ReposrtPost

const styles = StyleSheet.create({})

