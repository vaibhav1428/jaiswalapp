import I18n from 'i18n-js'
import React from 'react'
import { StyleSheet,  View ,Text} from 'react-native'
import { ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'

const Details = ({data}) => {

const [isphone, setphone] = React.useState('');
const [iscity, setcity] = React.useState('');
const [isstate, setstate] = React.useState('');
const [isdob, setdob] = React.useState('');
const [isword,setwork ] = React.useState('');


React.useEffect(() => {
    if(data !== null){
        setphone(data.phone)
        setcity(data.city)
        setstate(data.state)
        setdob(data.dob)
        setwork(data.work);


    }

  
}, [data])







    return (
        <>
        <ScrollView >
            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('6%')}}>
                {I18n.t('Work')}
                </Text> 
                <Text  style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                    {isword}
                </Text>
            </View>
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>
            

            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('6%')}}>
                   {I18n.t('Address')}
                 
                  
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                  {iscity},{isstate}
                </Text>
                
                
            </View>
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>
            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('6%')}}>
                {I18n.t('Contact')}
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                  +91-{isphone}
                </Text>
                
                
            </View>
            <Divider color={Customclr.text}   width={heightPercentageToDP('0.2%')} />

            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('6%')}}>
                {I18n.t('Date_Of_Birth')}
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {isdob}
                </Text>
                
                
            </View>

            <Divider color={Customclr.text}   width={heightPercentageToDP('0.2%')} />



            
        </ScrollView>
        </>
    )
}

export default Details

const styles = StyleSheet.create({})
