import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View,Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Divider, Icon, Image, Input, ListItem, Overlay, Switch } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { DEFAULT_IMAGE_URI } from '../../Constants/general';
import Customclr from '../../assets/theme/Customclr';
import axiosInstance from '../../Helper/axiosInstance';
import I18n from 'i18n-js';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Linking } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import firebase from "firebase/app";

const Shopprofile = ({route}) => {


      const { phoneno} = route.params;
      const [isshopnumber, setshopnumber] = React.useState(''); 
      const [form,setForm] =React.useState({});
      const [image, setImage] = React.useState(DEFAULT_IMAGE_URI);
      const [loadingimage, setloadingimage] = React.useState(false); 
  // state city state
     
  const [stateoverlay, setstateoverlay] = React.useState(false); 
  const [labelstate, setlabelstate] = React.useState('');    
  const [getstatedata,setstatedata] = React.useState([]);
  const [Cityoverlay, setcityoverlay] = React.useState(false);   
  const [labelcity, setlabelcity] = React.useState(''); 

  const [uploadoverlay, setuploadoverlay] = React.useState(false);
  const [isstatename, setstatename] = React.useState('');
  const [iscityname, setcityname] = React.useState('');


  //category 


  const [categoryoverlay, setcategoryoverlay] = React.useState(false); 
  const [labelcategory, setlabelcategory] = React.useState('');    
  const [getcategorydata,setcategorydata] = React.useState([]);
  const [iscategoryid,setcategoryid] = React.useState('');


  
//   week showhide 


const [monshow, setmonshow] = React.useState(false);   
const [tueshow, settueshow] = React.useState(false);   
const [wedshoow, setwedshow] = React.useState(false);   
const [thus , setthusshow] = React.useState(false);   
const [frishow, setfrishow] = React.useState(false);   
const [satshow, setsatshow] = React.useState(false);   
const [sunshow, setsunshow] = React.useState(false);   


const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);





const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

     const [getcitydata,setcitydata] = React.useState([{
      label: 'No Data Avilable',
      value: '',
         }]);
    
      const togglecategoryeOverlay = () => {
          setcategoryoverlay(!categoryoverlay);
      }; 
      const toggleStateOverlay = () => {
          setstateoverlay(!stateoverlay);
      }; 
      
      const toggleCityOverlay = () => {
          setcityoverlay(!Cityoverlay);
      };




      React.useEffect(() => {
       

        if(route.params.shopdt !== ''){
           const  constmyform = route.params.shopdt ; 
            setForm({
                id:phoneno,
                city: constmyform.city,
                friopen: constmyform.friopen,
                friopentime: constmyform.friopentime,
                frishopopen: constmyform.frishopopen,
                monclosetime: constmyform.monclosetime,
                monopen: constmyform.monopen,
                monopentime:constmyform.monopentime,
                satopen: constmyform.satopen,
                setshopclose: constmyform.setshopclose,
                setshopopen: constmyform.setshopopen,
                shopdesc: constmyform.shopdesc,
                shopfblink: constmyform.shopfblink,
                shopinstalink:constmyform.shopinstalink,
                shoplocation: constmyform.shoplocation,
                shopname: constmyform.shopname,
                state: constmyform.state,
                sunopen: constmyform.sunopen,
                sunshopclose:constmyform.sunshopclose,
                sunshopopen:constmyform.sunshopopen,
                thusclosetime:constmyform.thusclosetime,
                thusopen: constmyform.thusopen,
                thusopentime:constmyform.thusopentime,
                tueclosetime: constmyform.tueclosetime,
                tueopen: constmyform.tueopen,
                tueopentime: constmyform.tueopentime,
                webopen: constmyform.webopen,
                webopentime: constmyform.webopentime,
                wedclosetime: constmyform.wedclosetime, 
              
              
            })
            setshopnumber(constmyform.shopid);
            setImage(constmyform.shopimg);
            setmonshow(constmyform.monopen == 1 ? true : false)
            settueshow(constmyform.tueopen == 1 ? true : false)
            setwedshow(constmyform.webopen == 1 ? true : false)
            setthusshow(constmyform.thusopen == 1 ? true : false)
            setfrishow(constmyform.friopen == 1 ? true : false)
            setsatshow(constmyform.satopen == 1 ? true : false)
            setsunshow(constmyform.sunopen == 1 ? true : false)
            setstatename(constmyform.statename);
            setcityname(constmyform.cityname);
            setcategoryid(constmyform.category);



            setTimeout(() => {
                setlabelcategory(constmyform.eng_shop_category)            
            }, 2000)



        }
      }, []);
      


    
      
    const onchange = ({name,value}) =>{
        setForm({...form,[name]:value});
         }




         const onsubmit = () =>{

             if(form.state == '' ){
                 showMessage({
                   message: "state is menditory",
                   type: "danger",
                   icon: "danger",
                   });
                   return false;
               }

            if(form.city == ''  ){
                showMessage({
                  message: "City is menditory",
                  type: "danger",
                  icon: "danger",
                  });
                  return false;
              } 

               if(form.shopname == ''  ){
                showMessage({
                  message: "shop name is menditory",
                  type: "danger",
                  icon: "danger",
                  });
                  return false;
              } 
               if(form.shopdesc == ''  ){
                showMessage({
                  message: "shop description is menditory",
                  type: "danger",
                  icon: "danger",
                  });
                  return false;
              }   
              if(form.whatsappno == ''  ){
                showMessage({
                  message: "Whats app Number is menditory",
                  type: "danger",
                  icon: "danger",
                  });
                  return false;
              } 
              
              if(iscategoryid == ''){
                showMessage({
                  message: "shop Category is menditory",
                  type: "danger",
                  icon: "danger",
                  });

                  return false;
              } 


            axiosInstance.post('/create_shopedit',{
                id:phoneno,
                shopnumber:isshopnumber,
                city: form.city,
                friopen: form.friopen,
                friopentime: form.friopentime,
                frishopopen: form.frishopopen,
                monclosetime: form.monclosetime,
                monopen: form.monopen,
                monopentime:form.monopentime,
                satopen: form.satopen,
                setshopclose: form.setshopclose,
                setshopopen: form.setshopopen,
                shopdesc: form.shopdesc,
                shopfblink: form.shopfblink,
                shopinstalink:form.shopinstalink,
                shoplocation: form.shoplocation,
                shopname: form.shopname.toUpperCase(),
                state: form.state,
                sunopen: form.sunopen,
                sunshopclose:form.sunshopclose,
                sunshopopen:form.sunshopopen,
                thusclosetime:form.thusclosetime,
                thusopen: form.thusopen,
                thusopentime:form.thusopentime,
                tueclosetime: form.tueclosetime,
                tueopen: form.tueopen,
                tueopentime: form.tueopentime,
                webopen: form.webopen,
                webopentime: form.webopentime,
                wedclosetime: form.wedclosetime, 
                category: iscategoryid, 
                shopimg:image,
                whatsappno:whatsappno              
              })         
               .then((res) =>{ 

                if(res.data.status  == 1 ){
                    showMessage({
                        message: "Shop Created Successfully",
                        type: "success",
                        icon: "success",
                        });
                }
                 if(res.data.status  == 0 ){
                    showMessage({
                        message: "Something Wen't wrong",
                        type: "danger",
                        icon: "danger",
                        });
                }
        
               
        
            })
                      


         }



  React.useEffect(() => {
      axiosInstance.post('/Filterstate',{
                  countryid:8
              }).then((res) =>{
                  let newarr = res.data.result;
                   setstatedata(newarr);
       })
    
    
       axiosInstance.post('/get_shopcategory',{
              }).then((res) =>{
                  let newarr = res.data.result;
                setcategorydata(newarr);
       })
    
    
    
    
    }, [])





       const getstatefun = (value) =>{
          setstateoverlay(false);
          setlabelcity('please select city');

          onchange({name:"state",value:value})
       
          axiosInstance.post('/FilterCity',{
              countryid:8,
              stateid:value
            }).then((res) =>{
              let newarr = res.data.result;
              if( res.data.status == 1){
                  setcitydata(newarr);
                  setcityoverlay(false);
              }
              if(res.data.status == 0){
                  setcitydata([]);

              }
               
               
             }) 
        }


        const imageupload = async(value) =>  {
            if(value == 1 ){
              let result = await ImagePicker.launchCameraAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  aspect: [4, 4],
                  quality: 0.1,
                });          
                console.log(result);          
                if (!result.cancelled) {

                    setloadingimage(true);
                    const upladname =  Date.now() ; 
                    const response = await fetch(result.uri);
                        const blob = await response.blob();
                        var ref = firebase.storage().ref().child(`shop/shopimage/${upladname}`);
                        ref.put(blob).then(()=>{
                            ref.getDownloadURL().then((url)=>{
                                setImage(url);
                                setloadingimage(false);   
                                toggleuploadoverlay()                         
                        })})
                    // setImage(result.uri)
                }
      
             
      
            } 
            
            if(value == 2 ){
              
              let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  aspect: [4, 4],
                  quality: 1,
                });          
                console.log(result);          
                if (!result.cancelled) {
                    setloadingimage(true);
                    const upladname =  Date.now() ; 
                    const response = await fetch(result.uri);
                        const blob = await response.blob();
                        var ref = firebase.storage().ref().child(`shop/shopimage/${upladname}`);
                        ref.put(blob).then(()=>{
                            ref.getDownloadURL().then((url)=>{
                                setImage(url)  ;
                                setloadingimage(false);   
                                toggleuploadoverlay()                       
                    })})       
                }
                
            }
           
      
        } 
      
      
        const handleConfirm = (currentDate) => {
            // let formatteddate = currentDate.getFullYear()+'-'+(currentDate.getMonth() + 1) +  '-' +  currentDate.getDate();

            console.log(currentDate)
           
            showDatePicker();
          };
    
      





      

  
      const keyExtractor = (item, index) => index.toString()
      
      const radercategoryItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{setlabelcategory(item.eng_shop_category),setcategoryid(item.cat_id),togglecategoryeOverlay()}}>
        <ListItem bottomDivider>
         
          <ListItem.Content>
          
            <ListItem.Title>{item.eng_shop_category}</ListItem.Title> 
          
          </ListItem.Content>
          
          <ListItem.Chevron />
          

    
          
        </ListItem>
        </TouchableOpacity>
      ) 




     const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{getstatefun(item.value);setlabelstate(item.label)}}>
        <ListItem bottomDivider>
         
          <ListItem.Content>
          
            <ListItem.Title>{item.label}</ListItem.Title> 
          
          </ListItem.Content>
          
          <ListItem.Chevron />
          

    
          
        </ListItem>
        </TouchableOpacity>
      ) 
      
      const renderCityItem = ({ item }) => (
          <>
           {/* <TouchableOpacity onPress={()=>{setlabelcity(item.label); setcityoverlay(false);}}> */}
           <TouchableOpacity onPress={()=>{setlabelcity(item.label); setcityoverlay(false); onchange({name:"city",value:item.value})}}>
                <ListItem bottomDivider>
                
                <ListItem.Content>
                
                    <ListItem.Title>{item.label}</ListItem.Title>
            
                </ListItem.Content>
                
                <ListItem.Chevron />
                
                </ListItem>
        </TouchableOpacity>

        </>
      )

       
      const toggleuploadoverlay = () => {
        setuploadoverlay(!uploadoverlay);
    };


    
    

  return (
    <>
   
        {
            loadingimage ? 
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                     <ActivityIndicator color={Customclr.orangeshade0} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
                     <Text style={{marginTop:heightPercentageToDP('1%'),fontWeight:'700'}}>...Image Uploading ..</Text>
                </View>

                :

                <ScrollView style={{backgroundColor:Customclr.light}}>


                
    

        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:heightPercentageToDP('2%')}} >
        <Image  source={{uri:image}} PlaceholderContent={<ActivityIndicator/>}  style={{width: widthPercentageToDP('35%'), height:  widthPercentageToDP('35%'), borderRadius:  widthPercentageToDP('25%')/ 2}} 
        />
        <Button title={'Upload Shop Logo'} 
        titleStyle={{fontWeight:'700'}}
         buttonStyle={{borderRadius:10,width:widthPercentageToDP('45%'),height:widthPercentageToDP('15%') }}
         onPress={toggleuploadoverlay}/>

        </View>


        <View style={{justifyContent:'center',alignItems:'center',marginTop:heightPercentageToDP('1.5%')}}>
            <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                            placeholderTextColor={Customclr.dark} 
                            containerStyle={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('1.8%') }}
                            inputContainerStyle={{borderColor: Customclr.dark}}
                            placeholder="Enter Your Shop NAme"
                            label="ShopName" 
                             onChangeText={(value)=>{onchange({name:"shopname",value })}}  
                            value={form.shopname||""}   
                            leftIcon={
                                <Icon
                                  name='shop'
                                  size={24}
                                  color={Customclr.orangeshade0}
                                  type="entypo"
                                />
                              }                     
                    />  
        </View>
        
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                            placeholderTextColor={Customclr.dark} 
                            containerStyle={{width:widthPercentageToDP('95%') }}
                            inputContainerStyle={{borderColor: Customclr.dark}}
                            placeholder="Enter Your shop description"
                            label="Shop description " 
                            multiline={true}
                             onChangeText={(value)=>{onchange({name:"shopdesc",value })}}  
                            value={form.shopdesc||""}    
                            leftIcon={
                                <Icon
                                  name='shopping-basket'
                                  size={24}
                                  color={Customclr.orangeshade0}
                                  type="entypo"
                                />
                              }
                              
                                                 
                    />  
        </View>
        
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                            placeholderTextColor={Customclr.dark} 
                            containerStyle={{width:widthPercentageToDP('95%')}}
                            inputContainerStyle={{borderColor: Customclr.dark}}
                            placeholder="0000000000"
                            maxLength={10}
                            label="What's app Number" 
                            multiline={true}
                             onChangeText={(value)=>{onchange({name:"whatsappno",value })}}  
                             leftIcon={
                                <Icon
                                  name='location-pin'
                                  size={24}
                                  color={Customclr.orangeshade0}
                                  type="entypo"
                                />
                              } 
                            value={form.whatsappno||""}                        
                    />  
        </View> 
        
        
        
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                            placeholderTextColor={Customclr.dark} 
                            containerStyle={{width:widthPercentageToDP('95%')}}
                            inputContainerStyle={{borderColor: Customclr.dark}}
                            placeholder="Shop Location"
                            label="Shop Location " 
                            multiline={true}
                             onChangeText={(value)=>{onchange({name:"shoplocation",value })}}  
                             leftIcon={
                                <Icon
                                  name='location-pin'
                                  size={24}
                                  color={Customclr.orangeshade0}
                                  type="entypo"
                                />
                              } 
                            value={form.shoplocation||""}                        
                    />  
        </View>
        
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                            placeholderTextColor={Customclr.dark} 
                            containerStyle={{width:widthPercentageToDP('95%')}}
                            inputContainerStyle={{borderColor: Customclr.dark}}
                            placeholder="Instagram Link"
                            label="Instagram Link" 
                            multiline={true}
                             onChangeText={(value)=>{onchange({name:"shopinstalink",value })}}  
                             leftIcon={
                                <Icon
                                  name='instagram'
                                  size={24}
                                  color={Customclr.orangeshade0}
                                  type="entypo"
                                />
                              } 
                            value={form.shopinstalink||""}                        
                    />  
        </View> 
        
         <View style={{justifyContent:'center',alignItems:'center'}}>
            <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                            placeholderTextColor={Customclr.dark} 
                            containerStyle={{width:widthPercentageToDP('95%')}}
                            inputContainerStyle={{borderColor: Customclr.dark}}
                            placeholder="Facebook Link"
                            label="Facebook Link" 
                            multiline={true}
                             onChangeText={(value)=>{onchange({name:"shopfblink",value })}}  
                             leftIcon={
                                <Icon
                                  name='facebook'
                                  size={24}
                                  color={Customclr.orangeshade0}
                                  type="entypo"
                                />
                              } 
                            value={form.shopfblink||""}                        
                    />  
        </View>


        <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View>
                <Text style={{ fontSize:heightPercentageToDP('3%'),fontWeight:'700',}}>
                   Category
                </Text> 
                </View>                 
                <View style={{borderBottomColor:Customclr.dark,borderBottomWidth:1}}>
                <Pressable onPress={togglecategoryeOverlay} >
                <Text style={{fontSize:heightPercentageToDP('2%'),margin:heightPercentageToDP('1%')}}>
                    
                    {labelcategory || "Please Select shopcategory"}
                </Text> 
                </Pressable> 
                </View>         


            </View>

        
        <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View>
                <Text style={{ fontSize:heightPercentageToDP('3%'),fontWeight:'700',}}>
                   {I18n.t('state')}
                </Text> 
                </View>                 
                <View style={{borderBottomColor:Customclr.dark,borderBottomWidth:1}}>
                <Pressable onPress={toggleStateOverlay} >
                <Text style={{fontSize:heightPercentageToDP('2%'),margin:heightPercentageToDP('1%')}}>
                    
                    {labelstate|| "Please Select state"}
                </Text> 
                </Pressable> 
                </View>         

                <View>
                    <Text style={{color:Customclr.green,marginTop:heightPercentageToDP('1%')}}>
                        Last Selected State is : {isstatename}
                    </Text>
                </View>
            </View>
            
            
            
           

            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View>
                <Text style={{ fontSize:heightPercentageToDP('3%'),fontWeight:'700',}}>
                {I18n.t('city')}
                </Text> 
                </View>                 
                <View style={{borderBottomColor:Customclr.dark,borderBottomWidth:1}}>
                <Pressable  onPress={toggleCityOverlay}>
                <Text style={{fontSize:heightPercentageToDP('2%'),margin:heightPercentageToDP('1%')}}>                   
                    { labelcity|| "Please Select city"} 
                </Text> 
                </Pressable>
                </View>         

                <View>
                    <Text style={{color:Customclr.green,marginTop:heightPercentageToDP('1%'),fontWeight:'800'}}>
                        Last Selected city is : {iscityname}
                    </Text>
                </View>

            </View>
            <View style={{ marginTop:heightPercentageToDP('2.2%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <Text style={{ fontSize:heightPercentageToDP('2.1%'),fontWeight:'700',textDecorationLine:'underline'}}>
                    Set This day &amp;  date of Shop Open :
                </Text> 

            </View>

            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('85%'),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text  style={{ fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',}}>
                        Monday
                    </Text>
                    <Switch color={Customclr.orange} value={monshow}   onValueChange={(value) =>{ setmonshow(value);onchange({name:"monopen",value:value}) }}/>
                </View>

                <View style={{ display:monshow ? 'flex' :'none',marginTop:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <View >
                        <Text style={{textAlign:'center', fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',justifyContent:'center'}}>
                            Time
                        </Text>                        
                    </View>
                    
                    <Input label="Opening"  onChangeText={(value)=>{onchange({name:"monopentime",value })}}  
                     value={form.monopentime||""} 
                      containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                    <Icon name="dash" type="octicon" size={widthPercentageToDP('3%')}/>
                    <Input label="Closing"  value={form.monclosetime||""}  onChangeText={(value)=>{onchange({name:"monclosetime",value })}}   containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                  


                </View>

            </View>


            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('85%'),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text  style={{ fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',}}>
                        Tuesday
                    </Text>
                    <Switch color={Customclr.orange} value={tueshow}  onValueChange={(value) =>{ settueshow(value);onchange({name:"tueopen",value:value}) }}/>
                </View>

                <View style={{ display:tueshow ? 'flex' :'none',marginTop:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <View >
                        <Text style={{textAlign:'center', fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',justifyContent:'center'}}>
                            Time
                        </Text>                        
                    </View>
                    
                    <Input label="Opening" value={form.tueopentime||""}   onChangeText={(value)=>{onchange({name:"tueopentime",value })}} containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                    <Icon name="dash" type="octicon" size={widthPercentageToDP('3%')}/>
                    <Input label="Closing" value={form.tueclosetime||""}   onChangeText={(value)=>{onchange({name:"tueclosetime",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                  


                </View>

            </View>
            
            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('85%'),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text  style={{ fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',}}>
                        Wednesday
                    </Text>
                    <Switch color={Customclr.orange} value={wedshoow}   onValueChange={(value) =>{ setwedshow(value);onchange({name:"webopen",value:value}) }}/>
                </View>

                <View style={{ display:wedshoow ? 'flex' :'none',marginTop:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <View >
                        <Text style={{textAlign:'center', fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',justifyContent:'center'}}>
                            Time
                        </Text>                        
                    </View>
                    
                    <Input label="Opening" value={form.webopentime||""}  onChangeText={(value)=>{onchange({name:"webopentime",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                    <Icon name="dash" type="octicon" size={widthPercentageToDP('3%')}/>
                    <Input label="Closing" value={form.wedclosetime||""} onChangeText={(value)=>{onchange({name:"wedclosetime",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                  


                </View>

            </View>
            
            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('85%'),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text  style={{ fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',}}>
                        Thusday
                    </Text>
                    <Switch color={Customclr.orange} value={thus}  onValueChange={(value) =>{ setthusshow(value);onchange({name:"thusopen",value:value}) }}/>
                </View>

                <View style={{ display:thus ? 'flex' :'none',marginTop:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <View >
                        <Text style={{textAlign:'center', fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',justifyContent:'center'}}>
                            Time
                        </Text>                        
                    </View>
                    
                    <Input label="Opening" value={form.thusopentime||""}  onChangeText={(value)=>{onchange({name:"thusopentime",value })}} containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                    <Icon name="dash" type="octicon" size={widthPercentageToDP('3%')}/>
                    <Input label="Closing" value={form.thusclosetime||""} onChangeText={(value)=>{onchange({name:"thusclosetime",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                  


                </View>

            </View>
            
            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('85%'),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text  style={{ fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',}}>
                        Friday
                    </Text>
                    <Switch color={Customclr.orange} value={frishow}  onValueChange={(value) =>{ setfrishow(value);onchange({name:"friopen",value:value}) }}/>
                </View>

                <View style={{ display:frishow ? 'flex' :'none',marginTop:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <View >
                        <Text style={{textAlign:'center', fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',justifyContent:'center'}}>
                            Time
                        </Text>                        
                    </View>
                    
                    <Input label="Opening" value={form.friopentime||""} onChangeText={(value)=>{onchange({name:"friopentime",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                    <Icon name="dash" type="octicon" size={widthPercentageToDP('3%')}/>
                    <Input label="Closing" value={form.frishopopen||""} onChangeText={(value)=>{onchange({name:"frishopopen",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                  


                </View>

            </View>
            
            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('85%'),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text  style={{ fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',}}>
                        Shaturder
                    </Text>
                    <Switch color={Customclr.orange} value={satshow}   onValueChange={(value) =>{ setsatshow(value);onchange({name:"satopen",value:value}) }}/>
                </View>

                <View style={{ display:satshow ? 'flex' :'none',marginTop:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <View >
                        <Text style={{textAlign:'center', fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',justifyContent:'center'}}>
                            Time
                        </Text>                        
                    </View>
                    
                    <Input label="Opening" value={form.setshopopen||""}   onChangeText={(value)=>{onchange({name:"setshopopen",value })}} containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                    <Icon name="dash" type="octicon" size={widthPercentageToDP('3%')}/>
                    <Input label="Closing" value={form.setshopclose||""}  onChangeText={(value)=>{onchange({name:"setshopclose",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                  


                </View>

            </View>
            
            <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View style={{ marginTop:heightPercentageToDP('1%'),width:widthPercentageToDP('85%'),alignSelf:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text  style={{ fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',}}>
                        Sunday
                    </Text>
                    <Switch color={Customclr.orange} value={sunshow}   onValueChange={(value) =>{ setsunshow(value);onchange({name:"sunopen",value:value}) }}/>
                </View>

                <View style={{ display:sunshow ? 'flex' :'none',marginTop:heightPercentageToDP('2%'),width:widthPercentageToDP('90%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <View >
                        <Text style={{textAlign:'center', fontSize:heightPercentageToDP('2.3%'),fontWeight:'700',justifyContent:'center'}}>
                            Time
                        </Text>                        
                    </View>
                    
                    <Input label="Opening" value={form.sunshopopen||""}  onChangeText={(value)=>{onchange({name:"sunshopopen",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                    <Icon name="dash" type="octicon" size={widthPercentageToDP('3%')}/>
                    <Input label="Closing" value={form.sunshopclose||""}  onChangeText={(value)=>{onchange({name:"sunshopclose",value })}}  containerStyle={{width:widthPercentageToDP('25%')}} placeholder="00:00 AM" keyboardAppearance='dark'/>
                  


                </View>

            </View>  
         






            <Button title="Submit"
            onPress={onsubmit}
            // onPress={()=>Linking.openURL(`https://wa.me/+91-7389344038`)}
            
            buttonStyle={{margin:widthPercentageToDP('15%'),borderRadius:15,backgroundColor:Customclr.orangeshade0}} />



    {/*------------------------------------------------------------ image upload------------------------------- */}
                

            <Overlay  overlayStyle={{alignSelf:'center',justifyContent:'center',display:'flex',borderWidth:3}} isVisible={uploadoverlay} onBackdropPress={toggleuploadoverlay}>

                <Pressable onPress={()=>imageupload(1)}>
                <Text style={{fontSize:heightPercentageToDP('2.5%'),fontWeight:'600',margin:heightPercentageToDP('2%'),textAlign:'center'}}>
                {<Icon  name='camera'  type='entypo'  />} Take An Image

                </Text> 

                </Pressable>
                <View>

                <Divider
                        orientation="horizontal"
                        width={2}
                />
                    </View>
                <Pressable onPress={()=>imageupload(2)}>
                <Text style={{fontSize:heightPercentageToDP('2%'),fontWeight:'600',margin:heightPercentageToDP('2%'),textAlign:'center'}}>
                {<Icon  name='photo'  type='font-awesome'  />} Upload From Gallary
                    
                </Text>
                </Pressable>

            </Overlay>








    {/*------------------------------------------------------------ state upload------------------------------- */}



                
          <Overlay    isVisible={stateoverlay} onBackdropPress={toggleStateOverlay} overlayStyle={styles.stateOverlay}>
                <Text style={{alignSelf:'center'
                ,fontSize:heightPercentageToDP('2.8%')
                ,textDecorationLine: 'underline'}} > STATE </Text>

                <FlatList
                    keyExtractor={keyExtractor}
                    data={getstatedata}
                    renderItem={renderItem}
                    />
                </Overlay>
   
    {/*------------------------------------------------------------ category upload------------------------------- */}             
                
          <Overlay    isVisible={categoryoverlay} onBackdropPress={togglecategoryeOverlay} overlayStyle={styles.stateOverlay}>
                <Text style={{alignSelf:'center'
                ,fontSize:heightPercentageToDP('2.8%')
                ,textDecorationLine: 'underline'}} > CATEGORY </Text>

                <FlatList
                    keyExtractor={keyExtractor}
                    data={getcategorydata}
                    renderItem={radercategoryItem}
                    />
                </Overlay>



    {/*------------------------------------------------------------ city upload------------------------------- */}


                <Overlay   isVisible={Cityoverlay} onBackdropPress={toggleCityOverlay} overlayStyle={styles.stateOverlay}>
                <Text style={{alignSelf:'center'
                ,fontSize:heightPercentageToDP('2.8%')
                ,textDecorationLine: 'underline'}} > CITY  </Text>

                <FlatList
                    keyExtractor={keyExtractor}
                    data={getcitydata}
                    renderItem={renderCityItem}
                    />
                </Overlay>

     {/* <DateTimePickerModal isVisible={isDatePickerVisible}  mode="time" onConfirm={handleConfirm}  onCancel={showDatePicker} /> */}

    </ScrollView>
    }

  </>
  );
  
};

export default Shopprofile;

const styles = StyleSheet.create({
    stateOverlay:{
        width:widthPercentageToDP('60%'),
        height:heightPercentageToDP('40%')
    },
    mypicker:{
        marginTop:heightPercentageToDP('1.8%'),
        borderBottomColor:Customclr.text,
        borderRadius:1,
        borderBottomWidth:1,
        width:widthPercentageToDP('90%'),
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
    imageupload: {
        width: widthPercentageToDP('30%'),
        height: widthPercentageToDP('30%'),
        borderRadius:widthPercentageToDP('30%')/2,
        overflow:'hidden',

    },
});



