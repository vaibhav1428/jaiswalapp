import React from 'react'
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import RNPickerSelect from 'react-native-picker-select';
import axiosInstance from '../../Helper/axiosInstance'
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message'
import * as ImagePicker from 'expo-image-picker';
import firebase from "firebase/app";
import I18n from 'i18n-js'

const EditMetrimonial = ({route}) => {

    const [istimage1, settimage1] = React.useState("https://cdn-icons.flaticon.com/png/512/4024/premium/4024553.png?token=exp=1638646458~hmac=e0737dfd6d600d25f77af0b3f1b2e4f5");
    const [istimage2, settimage2] = React.useState("https://cdn-icons.flaticon.com/png/512/4024/premium/4024553.png?token=exp=1638646458~hmac=e0737dfd6d600d25f77af0b3f1b2e4f5");
    const [istimage3, settimage3] = React.useState("https://cdn-icons.flaticon.com/png/512/4024/premium/4024553.png?token=exp=1638646458~hmac=e0737dfd6d600d25f77af0b3f1b2e4f5");
    const [IsGotra, setGotra] = React.useState([])
    const [form,setForm] =React.useState({});
    const [loading, Setloading] =React.useState(false);
    const [Imageloading, SetImageloading] =React.useState(false);
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



   React.useEffect(() => {

    Setloading(true);
    axiosInstance.post('/get_gotra',{
      })         
       .then((res) =>{ 

        if(res.data.status == 1){
            setGotra(res.data.result);
        } 

         })
         
    axiosInstance.post('/Get_matrimonial',{
        phoneno:phoneno,
      })         
       .then((res) =>{ 

        if(res.data.status == 1){
            const data= res.data.result[0];
              setForm({
                Weight:data.Weight,
                about:data.about,
                gotra:data.gotra,
                height:data.height,   
                pob:data.pob,   
                rashi:data.rashi,   
                skinclr:data.skinclr,   
                tob:data.tob,   
              });

              settimage1(data.img1);
              settimage2(data.img2);
              settimage3(data.img3);
        } 

        Setloading(false);

         })
    }, [])





    const onsubmit = async() =>{
        if(!form.Weight){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }
          if(!form.about){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }
          if(!form.gotra){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }
          if(!form.height){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }
          if(!form.pob){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }
          if(!form.rashi){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }
          if(!form.skinclr){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }
          if(!form.tob){
            showMessage({
                message: "please fill all the filds",
                type: "danger",
                icon: "danger",
                });
            return false;
          
          }                       
        axiosInstance.post('/metrimonialprofile',{
                        img1 : istimage1.trim(),
                        img2:istimage2.trim(),
                        img3:istimage3.trim(),
                        Weight: form.Weight,                    
                        about: form.about.trim(),                    
                        gotra: form.gotra,                    
                        height: form.height,                    
                        pob: form.pob,                    
                        rashi: form.rashi,                    
                        skinclr: form.skinclr,                    
                        tob: form.tob,  
                        phoneno:phoneno,                  
                          }).then((res) =>{
                           let  data = res.data;    
                            if(data.status == 1){
                              Setloading(false);
                               showMessage({
                                message: data.message,
                                 type: "success",
                                 icon: "success",  
                              });}
          }) 
               

        
    }

    
    const uploadimage = async(id)=>{
        SetImageloading(true);
        Setloading(true)

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.1,
          });   

          

          if (!result.cancelled) {           
            const upladname =  Date.now() ; 
            const response = await fetch(result.uri);
            const blob = await response.blob();
            var ref = firebase.storage().ref().child(`metrimonialProfile/${phoneno}/${upladname}`);
            ref.put(blob).then(()=>{
            ref.getDownloadURL().then((url)=>{         
               if(id == 1 ){
                    settimage1(url);    
            }
              if(id == 2 ){
                  settimage2(url)
                } 
                if(id == 3 ){
                    settimage3(url)
                }
                
                
         
            }).then(()=>{
                Setloading(false);
                SetImageloading(false);  
            })
        })   
    }
        

    
   
    
    }

    








    return (
        <>
        {
            loading ?
            <View style={{display:'flex',flex:1,alignSelf:'center',justifyContent:'center'}}>
                <ActivityIndicator  color={Customclr.orange} style={{justifyContent:'center',alignSelf:'center'}}  />
                {
                    Imageloading ?  <Text>  Uploading Image.. </Text> : null  
                }

            </View>
            
            
            
            :

        <ScrollView style={{flex:1}}>
       
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightPercentageToDP('3%')}}>

                <TouchableOpacity style={styles.ticontainer} onPress={()=>uploadimage(1)}>
                    <Image source={{uri: istimage1}} style={styles.timage}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.ticontainer} onPress={()=>uploadimage(2)}>
                    <Image source={{uri: istimage2}} style={styles.timage}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.ticontainer} onPress={()=>uploadimage(3)}>
                    <Image  source={{uri: istimage3}} style={styles.timage}/>
                </TouchableOpacity>
 
            </View>

            <View style={{marginVertical:heightPercentageToDP('5%')}}>
                
                <Input 
                    label={I18n.t('About_You')}
                    labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                    containerStyle={styles.inputcontainer} 
                    placeholder={"Please Write about yourSelf"}
                    multiline={true}
                    maxLength={250}
                    onChangeText={(value)=>{onchange({name:"about",value })}}
                    value={form.about ? form.about: '' }
                />


                <Input 
                    label={I18n.t('Height')}
                    labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                    containerStyle={styles.inputcontainer} 
                    placeholder={"Please enter your height in feet"}
                    onChangeText={(value)=>{onchange({name:"height",value })}}
                    rightIcon={()=>(
                        <View>
                            <Text style={{fontSize:heightPercentageToDP('2.5%'),color:Customclr.gray}}>
                            {I18n.t('FT')}
                            </Text>
                        </View>)
                    }
                    value={form.height ? form.height: '' }

                    
                />

                <Input
                    label={I18n.t('Weight')}
                    labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                    containerStyle={styles.inputcontainer} 
                    placeholder={"Please enter your Weight in kg"}
                    onChangeText={(value)=>{onchange({name:"Weight",value })}}
                    rightIcon={()=>(
                        <View>
                            <Text style={{fontSize:heightPercentageToDP('2.5%'),color:Customclr.gray}}>
                            {I18n.t('kg')}
                            </Text>
                        </View>)

                    }
                    value={form.Weight ? form.Weight: '' }
                />

                <Input
                    label={I18n.t('Place_Of_Birth')}
                    labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                    containerStyle={styles.inputcontainer} 
                    onChangeText={(value)=>{onchange({name:"pob",value })}}
                    placeholder={"Please enter your Place Of Birth"}
                    value={form.pob ? form.pob: '' }
               />

                <Input
                    label={I18n.t('Time_Of_Birth')}
                    labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                    containerStyle={styles.inputcontainer} 
                    onChangeText={(value)=>{onchange({name:"tob",value })}}
                    placeholder={"Please enter your Time Of Birth"}
                    value={form.tob ? form.tob: '' }
               />


                <View style={styles.mypicker}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={styles.pickerlabel}>{I18n.t('Your_Gotra')}</Text>
                    </View>

                    <RNPickerSelect
                        onValueChange={(itemValue, itemIndex) => {} }
                        placeholder={{
                            label: 'please select your Gotra',
                            value: null,
                        }}
                       onValueChange={(itemValue, itemIndex) => { onchange({name:"gotra",value:itemValue })} }

                        style={{ inputAndroid: styles.pickerselect, inputIOS:styles.pickerselect}}
                        
                        items={IsGotra}  value={ form.gotra ? form.gotra : null}    />  
                           
                </View>

                <View style={styles.mypicker}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={styles.pickerlabel}>{I18n.t('Skin_color')}</Text>
                    </View>

                    <RNPickerSelect
                        onValueChange={(itemValue, itemIndex) => {} }
                        placeholder={{
                            label: 'please select your Skin Color',
                            value: null,
                        }}
                        style={{ inputAndroid: styles.pickerselect, inputIOS:styles.pickerselect}}
                        onValueChange={(itemValue, itemIndex) => { onchange({name:"skinclr",value:itemValue })} }                        
                        items={[
                            { label: I18n.t('Light'), value: 'Light'  , key:'1'     },
                            { label: I18n.t('Fair'), value: 'Fair'   , key:'2'    },
                            { label: I18n.t('Medium'), value: 'Medium'  , key:'3'    },
                            { label: I18n.t('Dark'), value: 'Dark'  , key:'4'    },
                            ]}    value={ form.skinclr ? form.skinclr : null}  />     
                </View>


                <View style={styles.mypicker}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={styles.pickerlabel}>{I18n.t('Rashi')}</Text>
                    </View>

                    <RNPickerSelect
                        onValueChange={(itemValue, itemIndex) => {} }
                        placeholder={{
                            label: 'please select your Rashi',
                            value: null,
                        }}
                        onValueChange={(itemValue, itemIndex) => { onchange({name:"rashi",value:itemValue })} }
                        style={{ inputAndroid: styles.pickerselect, inputIOS:styles.pickerselect}}
                        
                        items={[
                            { label: I18n.t('Aries'), value: 'Aries'  , key:'1'},
                            { label: I18n.t('Taurus'), value: 'Taurus'   , key:'2'},
                            { label: I18n.t('Gemini'), value: 'Gemini'  , key:'3'},
                            { label: I18n.t('Cancer'), value: 'Cancer'  , key:'4'},
                            { label: I18n.t('Leo'), value: 'Leo'  , key:'5'},
                            { label: I18n.t('Virgo'), value: 'Virgo'  , key:'6'},
                            { label: I18n.t('Libra'), value: 'Libra'  , key:'7' },
                            { label: I18n.t('Scorpio'), value: 'Scorpio'  , key:'8'},
                            { label: I18n.t('Sagittarius'), value: 'Sagittarius'  , key:'9'},
                            { label: I18n.t('Capricorn'), value: 'Capricorn'  , key:'10'},
                            { label: I18n.t('Aquarius'), value: 'Aquarius'  , key:'11'},
                            { label: I18n.t('Pisces'), value: 'Pisces'  , key:'12'}
                            ]}   value={ form.rashi ? form.rashi : null}    />     
                </View>


            </View>

            <View style={{marginVertical:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),borderRadius:widthPercentageToDP('10%'),justifyContent:'center',alignSelf:'center'}}>
                <Button  title="submit"  buttonStyle={{backgroundColor:Customclr.orangeshade0,borderRadius:30}} onPress={onsubmit} containerStyle={{ width:widthPercentageToDP('90%'),borderRadius:10,height:heightPercentageToDP('10%'),justifyContent:'center',}}/>

            </View> 
        
        </ScrollView>
}

</>
    )
}

export default EditMetrimonial 

const styles = StyleSheet.create({
    ticontainer:{
        width:heightPercentageToDP('13%'),
        height:heightPercentageToDP('13%'),
        backgroundColor:Customclr.Lightgray,
        justifyContent:'center'
    },
    timage:{
        width:heightPercentageToDP('13%'),
        height:heightPercentageToDP('13%'),
        alignContent:'center',
        borderWidth:1

    },
    inputcontainer:{
        width:widthPercentageToDP('98%'),
        justifyContent:'center',
        alignSelf:'center'
    },
    mypicker:{
        marginTop:heightPercentageToDP('1.8%'),
        borderBottomColor:Customclr.gray,
        borderRadius:1,
        borderBottomWidth:1,
        width:widthPercentageToDP('93%'),
        alignSelf:'center'
    },
    pickerlabel:{
        fontSize:heightPercentageToDP('3%'),
        fontWeight:'700',

    },
    pickerselect:{       
        marginTop:heightPercentageToDP('1%'),
        borderRadius:1,
        borderBottomWidth:0.5,
        fontSize:heightPercentageToDP('2%'),
        color:Customclr.text,
    },
    pickererror:{
        fontSize:heightPercentageToDP('2%'),
        marginLeft : widthPercentageToDP('5%'),
         marginRight : widthPercentageToDP('5%'),
         color:Customclr.danger
    },
})
