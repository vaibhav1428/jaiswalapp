import React from 'react'
import { StyleSheet,  View ,Text} from 'react-native'
import { ScrollView } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import axiosInstance from '../../Helper/axiosInstance'

const Usermdet = ({data}) => { 

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
                <Text style={{fontWeight:'600' ,fontSize:widthPercentageToDP('8%')}}>
                About
                </Text>

                <Text style={{fontWeight:'500',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {isabout}
                </Text>
                
                
            </View>


            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'600' ,fontSize:widthPercentageToDP('8%')}}>
                 Skin Color
                </Text>

                <Text style={{fontWeight:'500',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {iscolor}
                </Text>
                
                
            </View>

            

            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'600' ,fontSize:widthPercentageToDP('8%')}}>
                   Height
                </Text>

                <Text style={{fontWeight:'500',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {isheight}
                </Text>
                
                
            </View>


            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'600' ,fontSize:widthPercentageToDP('8%')}}>
                   Time Of Birth
                </Text>

                <Text style={{fontWeight:'500',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {istob}
                </Text>
                
                
            </View>

            <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'600' ,fontSize:widthPercentageToDP('8%')}}>
                   Place Of Birth
                </Text>

                <Text style={{fontWeight:'500',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {ispob}
                </Text>
                
                
            </View>  
            
              <View style={{margin:widthPercentageToDP('3%')}}>
                <Text style={{fontWeight:'600' ,fontSize:widthPercentageToDP('8%')}}>
                Zodiac Sign
                </Text>

                <Text style={{fontWeight:'500',color:Customclr.blue,fontSize:widthPercentageToDP('5%'),marginTop:widthPercentageToDP('2.5%')}}>
                {rashi}
                </Text>
                
                
            </View>


            
        </ScrollView>
        </>
    )
}

export default Usermdet

const styles = StyleSheet.create({})
