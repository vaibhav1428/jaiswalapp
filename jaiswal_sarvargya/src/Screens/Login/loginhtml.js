import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import { Input,Button, Overlay, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { OTP } from '../../Nevigation/RoutesName';
import { useNavigation } from '@react-navigation/native';
import i18n from 'i18n-js';
import { GlobalContext } from '../../context/Provider';
import { ChangeLangAction } from '../../context/actions/ChangeLangAction';

const Loginhtml = ({onchange,error,isloading,onsubmit,recaptcha}) => {

    const {userState:{data},authDispatch,langDiaspatch} = React.useContext(GlobalContext);
    const [isovervisible, setoverVisible] = React.useState(false);

    const togglelangOverlay = () => {
        setoverVisible(!isovervisible);
    };


    const languagechange = (lang) =>{


        ChangeLangAction(lang)(langDiaspatch)  ;
        togglelangOverlay();
    
    
          }

    
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:Customclr.secondary,flex:1,justifyContent:'center'}}>
            <View>
                 <Image  style={{height: heightPercentageToDP('40%'),width: widthPercentageToDP('80%'),alignSelf: 'center',}}  source={require('../../assets/images/logo.png')}   alt="logo" />
            </View>
            <View style={{alignSelf:'center', width:widthPercentageToDP('70%'),marginTop:widthPercentageToDP('5%')}}>
            <Input  placeholder={i18n.t('Enter_phone_no')}  placeholderTextColor="#000"
                    // autoFocus={true}  
                    inputContainerStyle={{borderBottomWidth:0}}
                    containerStyle={{borderColor:Customclr.dark,borderWidth:1 }} 
                    inputStyle={{marginLeft:widthPercentageToDP('2%'),fontSize:heightPercentageToDP('3%')}}   
                    leftIcon={  <Icon name='phone' size={widthPercentageToDP('7%') } color='black' />}
                    onChangeText={(value)=>{onchange({name:"phoneno",value:value})}}
                    renderErrorMessage={false}
                    errorMessage={error.phoneno}
                    maxLength={10}
                    errorStyle={{textAlign:'center',fontSize:heightPercentageToDP('2.3%')}}
                    onSubmitEditing={onsubmit}
                    />
            </View>
            <View>
            <Button buttonStyle={{width:widthPercentageToDP('70%'),borderRadius:50,backgroundColor:Customclr.orange,alignSelf:'center',marginTop:heightPercentageToDP('5%')}}
                title={`${i18n.t('Submit')}`} onPress={onsubmit} loading={isloading}
            />

            <View>
                <TouchableOpacity onPress={togglelangOverlay}>
                    <Text style={{textAlign:'center',margin:heightPercentageToDP('2%'),fontSize:heightPercentageToDP('2.2%'),fontWeight:'700',color:Customclr.text}}>

                    {i18n.t('Change_Language')}
                    </Text>
                </TouchableOpacity>
            </View>



    
            
           

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

export default Loginhtml
