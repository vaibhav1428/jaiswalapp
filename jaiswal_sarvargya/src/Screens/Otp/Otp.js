import React from 'react'
import { View, Text ,Platform, Clipboard} from 'react-native'
import { showMessage } from 'react-native-flash-message';
import axiosInstance from '../../Helper/axiosInstance';
import OtpHtml from './OtpHtml'
import { useNavigation } from '@react-navigation/native';
import { PREPROFILE } from '../../Nevigation/RoutesName';
import { KeyboardAvoidingView } from 'react-native';
import { Alert } from 'react-native';

const Otp = ({route}) => {


      
    const [form,setForm] =React.useState({});
    const [confirm, setConfirm] =React.useState(null);
    const [loading, Setloading] =React.useState(false);
    const navigation = useNavigation();
    const [error,setError] =React.useState({});
    const { phoneno } = route.params;




    const onchange = ({name,value}) =>{
        setForm({...form,[name]:value});
      
        if(value !== ''){
        setError(prev=>{
              return {...prev,[name]:""}
          })
  
      }
      else{
          setError(prev=>{   return {...prev,[name]:'this field is required'} });
      }
    }



         const onsubmit = () =>{
            if(!form.otp){
                showMessage({
                message: "please enter otp",
                type: "danger",
                icon: "danger",
                });
            return false;
            }
            else if(form.otp.length < 6){
                showMessage({
                    message: "Phone Number Must be 6 Dedit ",
                    type: "danger",
                    icon: "danger",
                    });
                return false;

            }
            else{
                // Setloading(true);
                axiosInstance.post('/CheckOtp',{
                    phoneno:phoneno,
                    otp: form.otp                    
                      }).then((res) =>{

                       let  data = res.data;    
                        if(data.status == 1){
                          Setloading(false);
                           showMessage({
                            message: data.message,
                             type: "success",
                             icon: "success",  
                          });
                          navigation.navigate(PREPROFILE,{phoneno:phoneno,editdata:1})
                  
                        }                        
                        if(data.status == 0){
                          Setloading(false);
                          showMessage({
                            message:  data.message,
                              type: "danger",
                             icon: "danger",  
                             });
                           }
                        
    
                      }
                
                      )
    
           
            }

         }


    const resendotpfun = () =>{

        axiosInstance.post('/GetOtp',{
            phoneno: phoneno,                    
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
                          });} 
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
    


    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : null}>
        <OtpHtml 
        onchange ={onchange} 
        error={error} 
        isloading={loading} 
        onsubmit = {onsubmit} 
        resendotpfun={resendotpfun}
        phoneno={phoneno}
        />
            
        </KeyboardAvoidingView>
    )
}

export default Otp
