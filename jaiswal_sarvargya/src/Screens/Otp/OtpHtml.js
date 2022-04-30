
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Button, Input ,Text} from 'react-native-elements'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr'
import { LOGIN, PREPROFILE } from '../../Nevigation/RoutesName';
import { useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import CountDown from 'react-native-countdown-component';

const OtpHtml = ({onchange,error,isloading,onsubmit,resendotpfun,phoneno}) => {
    const navigation = useNavigation();


    const [btndisable, setbtndisable] = React.useState(true)
    return (
       <View style={{backgroundColor:Customclr.secondary,flex:1}}>
           <View style={{alignSelf:'center',marginTop:hp('10%')}}>
                <Text style={{fontSize:hp('5%'),fontWeight:'700',textAlign:'center'}}>
                        {I18n.t('OTP_Verification')}
                      
                       
                     
               </Text>
               <Text style={{fontSize:hp('2%'),fontWeight:'700',marginTop:hp('2.5%'),textAlign:'center'}}>
                    {I18n.t('The_Otp_is_send_to')}{'    '}{  phoneno}
               </Text>
           </View>

           <View style={{width:wp('80%')  , marginTop:hp('6%'), marginBottom:hp('5%'),borderColor:Customclr.dark,borderWidth:1,alignSelf:'center'}}>
                <Input   placeholder={I18n.t('Enter_Otp')}  placeholderTextColor="#000"  
                        keyboardType="number-pad"  inputContainerStyle={{borderBottomWidth:0}}
                        inputStyle={{fontSize:hp('2.5%'),textAlign:'center',fontWeight:'700'}}  
                        onChangeText={(value)=>{onchange({name:"otp",value })}}
                        renderErrorMessage={false}
                        errorMessage={error.phoneno}
                        maxLength={6}
                        errorStyle={{fontSize:hp('2.3%')}} 
                        autoFocus={true}
                        onSubmitEditing={onsubmit}
                        />
            </View>


            <View style={{flexDirection:'row',display:'flex',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
                <Text style={{fontSize:hp('2.7%')}} >
                {I18n.t('Havent_get_otp')}
                </Text>
                { 
                    btndisable ?  
                    <CountDown
                    style={{paddingTop:hp('1.5%')}}
                    timeLabelStyle={{fontWeight:'800'}}
                    until={30}
                    size={wp('4%')}
                    onFinish={() => {setbtndisable(false)}}
                    digitStyle={{backgroundColor: Customclr.secondary}}
                    digitTxtStyle={{color:  Customclr.text}}
                    timeToShow={['S']}
                    timeLabels={{m: ' ', s: ' '}}
                    />
                    
                    :
                    <TouchableOpacity onPress={()=>{resendotpfun();setbtndisable(true)}}>
                    <Text  style={{fontWeight:'700',fontStyle:'normal',fontSize:hp('3.1%')}}>
                    {I18n.t('Resent_otp')}
                    </Text>
    
                    </TouchableOpacity>

                }
                


            </View>

            <Button buttonStyle={{width:wp('75%'),borderRadius:50,backgroundColor:Customclr.orange,alignSelf:'center',marginTop:hp('5%')}}
                title={I18n.t('Submit')} onPress={onsubmit} loading={isloading} 
            />


          
           
       </View>
    )
}

export default OtpHtml
