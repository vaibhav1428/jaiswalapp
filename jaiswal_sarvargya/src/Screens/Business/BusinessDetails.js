import { Alert, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon, Image } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';
import { useNavigation } from '@react-navigation/core';


const BusinessDetails = ({route}) => {
    const shopdetail = route.params.shopdetail;
    const navigation = useNavigation(); 

    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title:shopdetail.shopname,
            headerTitleAlign:'center',
            headerTitle:shopdetail.shopname
        })
    }, [])

  return (
    <ScrollView>
      <View style={{paddingVertical:heightPercentageToDP('1.8%'),justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:Customclr.text}}>
          <Image source={{uri:shopdetail.shopimg}}  resizeMode='stretch' containerStyle={{borderRadius:2,width:widthPercentageToDP('99%'),height:heightPercentageToDP('33%')}}/>    
        </View>

        <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('3%'),justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
            <Text style={{fontSize:heightPercentageToDP('3%'),fontWeight:'700',textDecorationStyle:'double',textDecorationLine:'underline'}} >
                {shopdetail.shopname}

            </Text>
            
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Icon name="call" reverse size={widthPercentageToDP('4.2%')} color={Customclr.accent}
                onPress={()=>{
                    Alert.alert(
                      "Call..",
                      "Do You Really Want To Call Them", 
                      [
                        {
                          text: "Cancel",
                          onPress: () => { },
                          style: "cancel"
                        },
                        { text: "Yes", onPress: () =>Linking.openURL(`tel:${shopdetail.id}`) }
                      ]
                    )
                    
                    }}
                    
                    />
{
  shopdetail.whatsappno ===  null ? null :

                <Icon name="logo-whatsapp" type='ionicon'  reverse size={widthPercentageToDP('4.2%')} color={Customclr.green}  onPress={()=>{
                      Alert.alert(
                        "Whats App Contact",
                        "Do You Really Want To Contact Them Through Whats App", 
                        [
                          {
                            text: "Cancel",
                            onPress: () => { },
                            style: "cancel"
                          },
                          { text: "Yes", onPress: () => Linking.openURL(`https://wa.me/${shopdetail.whatsappno}`) }
                        ]
                      )
                      
                      }}/>}
            </View>

           
        </View>


        <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('3%'),flexDirection:'row'}}>

        <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
                Shop Description 

            </Text>
                
            <Text style={{fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            :  {shopdetail.shopdesc}..
                    
            </Text>
        </View> 
        
        <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}}>

            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
                Shop Location 

            </Text>
                
            <Text style={{fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            :  {shopdetail.shoplocation}
                    
            </Text>
            
        </View>   

        <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}}>

            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
               Shop State

            </Text>
                
            <Text style={{fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {'       '} {shopdetail.state}
                    
            </Text>
            
        </View> 

        <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}}>

            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Shop City

            </Text>
                
            <Text style={{fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {'           '}  {shopdetail.city}
                    
            </Text>
            
        </View> 



        
        <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'column'}}>

            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Shop Open And Close Time

            </Text> 

            <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}} >
            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              monday
            </Text>
                
            <Text style={{color:shopdetail.monopen == 1 ? Customclr.text : Customclr.red, fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {shopdetail.monopen == 1 ? 
                  shopdetail.monopentime + '  -  ' +   shopdetail.monclosetime      
                : "closed"}
                    
            </Text>

            </View>

            

            <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}} >
            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Tuesday
            </Text>
                
            <Text style={{color:shopdetail.tueopen == 1 ? Customclr.text : Customclr.red, fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {shopdetail.tueopen == 1 ? 
                  shopdetail.tueopentime + '  -  ' +   shopdetail.tueclosetime      
                : "closed"}
                    
            </Text>

            </View>
            
         
            <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}} >
            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Wednesday
            </Text>
                
            <Text style={{color:shopdetail.webopen == 1 ? Customclr.text : Customclr.red, fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {shopdetail.webopen == 1 ? 
                  shopdetail.webopentime + '  -  ' +   shopdetail.wedclosetime      
                : "closed"}
                    
            </Text>

            </View>
            
         
            <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}} >
            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Thusday
            </Text>
                
            <Text style={{color:shopdetail.thusopen == 1 ? Customclr.text : Customclr.red, fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {shopdetail.thusopen == 1 ? 
                  shopdetail.thusopentime + '  -  ' +   shopdetail.thusclosetime      
                : "closed"}
                    
            </Text>

            </View>
            
         
            <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}} >
            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Friday
            </Text>
                
            <Text style={{color:shopdetail.friopen == 1 ? Customclr.text : Customclr.red,fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {shopdetail.friopen == 1 ? 
                  shopdetail.friopentime + '  -  ' +   shopdetail.frishopopen      
                : "closed"}
                    
            </Text>

            </View>
            
         
            <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}} >
            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Saturday
            </Text>
                
            <Text style={{color:shopdetail.satopen == 1 ? Customclr.text : Customclr.red,fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {shopdetail.satopen == 1 ? 
                  shopdetail.setshopopen + '  -  ' +   shopdetail.setshopclose      
                : "closed"}
                    
            </Text>

            </View>
              
         
            <View style={{marginTop:heightPercentageToDP('2%'),paddingHorizontal:widthPercentageToDP('5%'),flexDirection:'row'}} >
            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'600',textDecorationStyle:'solid',textDecorationLine:'underline'}} >
              Sunday
            </Text>
                
            <Text style={{color:shopdetail.sunopen == 1 ? Customclr.text : Customclr.red,fontSize:heightPercentageToDP('1.8%'),fontWeight:'500',marginLeft:widthPercentageToDP('1%'),flex:1,flexWrap:'wrap'}} >
            : {shopdetail.sunopen == 1 ? 
                  shopdetail.sunshopopen + '  -  ' +   shopdetail.sunshopclose      
                : "closed"}
                    
            </Text>

            </View>
            
            
            
        </View> 





        <View style={{marginBottom:heightPercentageToDP('10%')}}>

        </View>
        

    </ScrollView>
  ); 
};

export default BusinessDetails;

const styles = StyleSheet.create({});
