import React from 'react'
import { ActivityIndicator, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper'
import { DEFAULT_IMAGE_URI } from '../../Constants/general';
import Customclr from '../../assets/theme/Customclr';
import axiosInstance from '../../Helper/axiosInstance';
import { Divider } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Famliy from '../Profile/Family';
import Details from '../Profile/Details';
import AllMetriMonyUser from './AllMetriMonyUser';
import I18n from 'i18n-js';




const MetrimonialDetails = ({route}) => {

    const { phoneno,name } = route.params;
    const  navigation    =   useNavigation();
    const [userdata, setuserdata] = React.useState(null);
    const [isloading, setloading] = React.useState(false);
    const [isimg1, setimg1] = React.useState(DEFAULT_IMAGE_URI);
    const [isimg2, setimg2] = React.useState(DEFAULT_IMAGE_URI);
    const [isimg3, setimg3] = React.useState(DEFAULT_IMAGE_URI);
    const Tab = createMaterialTopTabNavigator();

   

    React.useLayoutEffect(() => {
      navigation.setOptions({
          title:name.toUpperCase(),
          headerTitleAlign:'center',
      })
  }, [navigation])

  React.useEffect(()=>{
    return (
      getalldata()
    )
    
    
  },[])
    

  const getalldata = () =>{
    setloading(true);
    axiosInstance.post('/get_detailsofMetrimony',{
      phoneno:phoneno
      }).then((res) =>{
      let newarr = res.data.result;
     if(res.data.status == 1){
       setuserdata(res.data.result[0]);
       setimg1(res.data.result[0].img1);
       setimg2(res.data.result[0].img2);
       setimg3(res.data.result[0].img3);
       setloading(false)
      }

      if(res.data.status == 0){
        alert(res.data.message)
        navigation.goBack();
      }
}) 
  }


    return (
      <>
      {  
        isloading ?  

        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <ActivityIndicator color={Customclr.orangeshade0} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
        </View>
   
        
        
        :
      
      <SafeAreaView style={{display:'flex',flex:1}}>
           
           <View style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('40%')}}>
         {  
          Platform.OS !== 'web' ?
         
                  <Swiper style={styles.wrapper} showsButtons={false} horizontal={true} loop={true}>
                    <View style={styles.slide1}>
                    <Image resizeMode='contain' source={{uri:isimg1}} style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('40%')}}/>
                    </View> 
                    <View style={styles.slide2}>
                    <Image resizeMode='contain' source={{uri:isimg2}} style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('40%')}}/>
                    </View>
                    <View style={styles.slide3}>
                    <Image resizeMode='contain' source={{uri:isimg3}} style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('40%')}}/>
                    </View>
                </Swiper>
            :
            <Text> slider is not working on web </Text> 
             
            
            }

           </View>

          <View  style={{backgroundColor:Customclr.light,flex:1}}>

          <Divider style={{ backgroundColor: Customclr.Lightgray, height:heightPercentageToDP('0.4%') ,marginTop:heightPercentageToDP('2%')}}  />
          <Tab.Navigator>
              
              <Tab.Screen name={I18n.t('Family') } children={()=><Famliy route={ route} />}  options={{lazy:true, optimizationsEnabled:true}}  />
              <Tab.Screen name={I18n.t('Details')}  children={()=><Details data={userdata}/>}  />
              <Tab.Screen name={I18n.t('MetriMony')}  children={()=><AllMetriMonyUser data={userdata}/>}  />

          </Tab.Navigator>
          
          </View>








        </SafeAreaView>
        
        }


        </>
    )
}

export default MetrimonialDetails

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Customclr.text,
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:  Customclr.text
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:  Customclr.text
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
})
