import I18n from 'i18n-js'
import React from 'react'
import { StyleSheet,  View ,Text} from 'react-native'
import { ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import axiosInstance from '../../Helper/axiosInstance'

const AllMetriMonyUser = ({data}) => { 

const [isphone, setphone] = React.useState('');
const [iscity, setcity] = React.useState('');
const [isstate, setstate] = React.useState('');
const [isabout, setabout] = React.useState('');
const [gotra, setgotra] = React.useState('');
const [isheight, sethight] = React.useState('');
const [ispob, setpob] = React.useState('');
const [rashi, setrashi] = React.useState('');
const [iscolor, setcolor] = React.useState('');
const [istob, settob] = React.useState('');
const [isdob, setdob] = React.useState('');


React.useEffect(() => {
    if(data !== null){
        setphone(data.phone)
        setcity(data.city)
        setstate(data.state)
        setdob(data.dob)

        console.log(data.city);

    }


    axiosInstance.post('/Get_matrimonial',{
        phoneno:data.phone,
      })         
       .then((res) =>{ 

        if(res.data.status == 1){
            const newdta = res.data.result[0];
            setrashi(newdta.rashi);
            setpob(newdta.pob);
            settob(newdta.tob);
            sethight(newdta.height);
            setcolor(newdta.skinclr);
            setabout(newdta.about);


           
        } 


         })

  
}, [data])







    return (
        <>
        <ScrollView >
        


            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('8%')}}>
                {I18n.t('About_You')}
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {isabout}
                </Text>
                
                
            </View>
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>



            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('8%')}}>
                {I18n.t('Skin_color')}
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {iscolor}
                </Text>
                
                
            </View>
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>


            

            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('8%')}}>
                {I18n.t('Height')}
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {isheight}
                </Text>
                
                
            </View>
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>



            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('8%')}}>
                {I18n.t('Time_Of_Birth')}
               
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {istob}
                </Text>
                
                
            </View>
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>


            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('8%')}}>
                {I18n.t('Place_Of_Birth')}
               
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {ispob}
                </Text>
                
                
            </View>  
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>

            
              <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'700' ,fontSize:widthPercentageToDP('8%')}}>
                {I18n.t('Rashi')}
                </Text>

                <Text style={{fontWeight:'600',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {rashi}
                </Text>
                
                
                </View>
            <Divider color={Customclr.text}  width={heightPercentageToDP('0.2%')}/>



            
        </ScrollView>
        </>
    )
}

export default AllMetriMonyUser

const styles = StyleSheet.create({})

