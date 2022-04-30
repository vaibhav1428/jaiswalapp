import React from 'react'
import { View, Text, Alert, Clipboard } from 'react-native'
import Loginhtml from './loginhtml'
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { OTP } from '../../Nevigation/RoutesName';
import axiosInstance from '../../Helper/axiosInstance';
import { KeyboardAvoidingView } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Platform } from 'react-native';
 

  
const Login = () => {

    
    const [form,setForm] =React.useState({});
    const [confirm, setConfirm] =React.useState(null);
    const [data, setdata] =React.useState(null);
    const [loading, Setloading] =React.useState(false);
    const [token, Settoken] =React.useState('fU09c7BeRL63mD8LwqEdDj:APA91bE2tuEnvKDK89-gjkKHIO-vgDvnG08FAZqtMa5K1ofgmF9kGqcrn0casvdtIW8QPUCCwlx2HhSbU9Y2ZN5yaaJQd8snuu39d5vLi8wAmQdVoxSWSMVgxodsIPO3UfBE-4Rr-GAR');

    const navigation = useNavigation();
    const [error,setError] =React.useState({});



    



    const onchange = ({name,value}) =>{
        setForm({...form,[name]:value});
        
          if(value !== ''){
            if(name === 'phoneno'){              
                if(value.length < 10 ) {
                    setError(prev=>{
                        return {...prev,[name]:'number should be 10 digite'}
                    })
                   }
                else{
                    setError(prev=>{
                     return {...prev,[name]:null}
                    })
                }
            }
            else{
            setError(prev=>{
                return {...prev,[name]:null}
            })

        }}
        else{
            setError(prev=>{   return {...prev,[name]:'this field is required'} });
        }
         }



         const onsubmit = () =>{
            if(!form.phoneno){
                showMessage({
                message: "please enter Your Phone Number ",
                type: "danger",
                icon: "danger",
                });
            return false;
            }
            else if(form.phoneno.length < 10){
                showMessage({
                    message: "Phone Number Must be 10 Dedit ",
                    type: "danger",
                    icon: "danger",
                    });
                return false;

            }
            else{
                Setloading(true);
              
             
                axiosInstance.post('/GetOtp',{
                    phoneno: form.phoneno,                    
                      }).then((res) =>{

                       let  data = res.data;    
                        if(data.status == 1){
                          Setloading(false);
                           showMessage({
                            message: data.message,
                             type: "success",
                             icon: "success",  
                          });

                          if(Platform.OS == 'web'){
                            alert('this is just for testing please copy your otp at here ' + data.otp);
                            navigation.navigate(OTP,{"phoneno":form.phoneno});

                          }
                          else{
                            Alert.alert(
                                "Otp This app is for testing please copy otp from here",
                               "Your Otp is ---->" + data.otp ,
                                [{
                                  text: "Cancel",
                                  style: "cancel"
                                },
                                  { text: "Copy", onPress: () => {Clipboard.setString(data.otp.toString()); showMessage({
                                    message: "number coppied successfully",
                                    type: "success",
                                    icon: "success",
                                  });navigation.navigate(OTP,{"phoneno":form.phoneno});}

                                  
                                
                                }
                                ]
                              );

                             

                          }
                          
                        

                        
                     
                        }                        
                        if(data.status == 0){
                          Setloading(false);
                          showMessage({
                            message: "sometjhing went wrong ",
                              type: "Danger",
                             icon: "Danger",  
                             });
                           }
                        
    
                      }
                
                      )
           
            }

         }


      


    return (


        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : null}>
            <Loginhtml onchange ={onchange} error={error} isloading={loading} onsubmit = {onsubmit}/>
   
        </KeyboardAvoidingView>
        
    )
}

export default Login
