import React from 'react'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Button, Divider, Icon } from 'react-native-elements';

import { TouchableOpacity } from 'react-native';
import Customclr from '../../assets/theme/Customclr';

const DirectoryDetails = ({route}) => {
    // const { id } = route.params;
    const localuri = 'https://www.lifewire.com/thmb/P856-0hi4lmA2xinYWyaEpRIckw=/1920x1326/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg';


    // console.log(id);

    return (
        <ScrollView>
        <View style={{marginTop:heightPercentageToDP('3%'),alignItems:'center'}}>
            <Image source={{uri: localuri}} style={{width: widthPercentageToDP('20%'),height:widthPercentageToDP('20%'),borderRadius:widthPercentageToDP('20%')}} />
        </View>
        <View  style={{marginTop:heightPercentageToDP('1%'),alignItems:'center',marginVertical:heightPercentageToDP('2%')}}>
            <Text style={{fontSize:heightPercentageToDP('3.2%'),fontWeight:'700'}}>Vaibhav pandey</Text>
            <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600',}}>Bhilai,Chhattisgarh</Text>
            <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'300',marginHorizontal:heightPercentageToDP('6%'),textAlign:'center'}}>this is test from data wheere i'm full stacyk developer  </Text>

        </View>

        <View style={{width:widthPercentageToDP("30%"),alignSelf:'center',display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:heightPercentageToDP('1%')}}>
            <Button
              icon={
                <Icon
                  name='message'
                  type='entypo'
                  color= {Customclr.blue}
                />
              }
              type="outline"
              title="Message"
            />

            <Button
              type="outline"
              icon={
                <Icon
                  name='share-square-o'
                  type='font-awesome'
                  color= {Customclr.blue}
                />

                
              }
              title=""
            />
        </View>
        <Divider style={{ backgroundColor: Customclr.Lightgray,height:heightPercentageToDP('0.4%')}} />

        <View style={{marginBottom:heightPercentageToDP('2%'),paddingHorizontal:heightPercentageToDP('2%')}}>
            <Text style={{fontSize:heightPercentageToDP('4%'),fontWeight:'bold'}}>
              Work 
            </Text>

            <Text style={{fontSize:heightPercentageToDP('2.4%'),fontWeight:'600',color:Customclr.blue}}>
              Software Engineer at Infosys
            </Text>
        </View>
         <Divider style={{ backgroundColor: Customclr.Lightgray, height:heightPercentageToDP('0.4%') ,marginTop:heightPercentageToDP('2%')}}  />

        <View style={{marginBottom:heightPercentageToDP('2%'),paddingHorizontal:heightPercentageToDP('2%')}}>

          
            <Text style={{fontSize:heightPercentageToDP('4%'),fontWeight:'bold'}}>
               Education 
            </Text>

            <Text style={{fontSize:heightPercentageToDP('2.4%'),fontWeight:'600',color:Customclr.blue}}>
              
              went from Krishna Public School
              {"\n"}
              Class of 2015

            </Text>
              
              <Text style={{fontSize:heightPercentageToDP('2.4%'),fontWeight:'600',color:Customclr.blue}}>
              
              went from Krishna Public School
              {"\n"}
              Class of 2015

              </Text>
        
        </View>

        <Divider style={{ backgroundColor: Customclr.Lightgray, height:heightPercentageToDP('0.4%') ,marginTop:heightPercentageToDP('2%')}}  />
        <View style={{marginBottom:heightPercentageToDP('2%'),paddingHorizontal:heightPercentageToDP('2%')}}>

       
            <Text style={{fontSize:heightPercentageToDP('4%'),fontWeight:'bold'}}>
              Currently Living  in 
            </Text>

            <Text style={{fontSize:heightPercentageToDP('2.4%'),fontWeight:'600',color:Customclr.blue}}>
              Raipur Chhattisgarh
            </Text>
         

          
        </View>
        
        <View style={{marginBottom:heightPercentageToDP('2%'),paddingHorizontal:heightPercentageToDP('2%')}}>
        
            <Text style={{fontSize:heightPercentageToDP('4%'),fontWeight:'bold'}}>
           Contact Info
            </Text>

            <Text style={{fontSize:heightPercentageToDP('2.4%'),fontWeight:'600',color:Customclr.blue}}>
              +91-8440840080
            </Text>
         

        </View> 
        {/* ---------------------------------------------------------------------------------------------- */}
        <Divider style={{ backgroundColor: Customclr.Lightgray, height:heightPercentageToDP('0.4%') ,marginTop:heightPercentageToDP('2%')}}  />
        <View style={{marginBottom:heightPercentageToDP('2%'),paddingHorizontal:heightPercentageToDP('2%')}}>

            <Text style={{fontSize:heightPercentageToDP('4%'),fontWeight:'bold'}}>
              Birthday 
            </Text>

            <Text  style={{fontSize:heightPercentageToDP('2.4%'),fontWeight:'600',color:Customclr.blue}}>
             20-04-2020
            </Text>

        </View>
      

        
            
        </ScrollView>
    )
}

export default DirectoryDetails
