import React from 'react'
import { FlatList, Image, Pressable, TouchableOpacity } from 'react-native';
import { View, Text, ScrollView } from 'react-native'
import { Avatar, Button, Divider, Icon, Input, ListItem, Overlay } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axiosInstance from '../../Helper/axiosInstance';
import I18n from 'i18n-js';


const PreprofileHtml = ({onchange,error,isloading,onsubmit,form,imageupload,image}) => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [bloodgroup, setbloodgroup] = React.useState('');
    const [MaterialStatus, setMaterialStatus] = React.useState('');
    const [EducationStatus, setEducationStatus] = React.useState('');
    const [IsMetrimonyshare, setIsMetrimonyshare] = React.useState('');
    const [Isdirectoryshare, setIsdirectoryshare] = React.useState('');
    const [JobStatus, setJobStatus] = React.useState('');
    const [mydate,setmydate] = React.useState('');
    const [uploadoverlay, setuploadoverlay] = React.useState(false);
    const [uploadvideooverlay, setuploadvideooverlay] = React.useState(false);
    const [changetype, setchangetype] = React.useState('image');  


    // state city state
     
    const [stateoverlay, setstateoverlay] = React.useState(false); 
    const [labelstate, setlabelstate] = React.useState('');    
    const [getstatedata,setstatedata] = React.useState([]);
    const [Cityoverlay, setcityoverlay] = React.useState(false);   
    const [labelcity, setlabelcity] = React.useState(''); 
    const [isgender, setgender] = React.useState('');

    const [getcitydata,setcitydata] = React.useState([{
        label: 'No Data Avilable',
        value: '',
    }]);
      
        const toggleStateOverlay = () => {
            setstateoverlay(!stateoverlay);
        }; 
        
        const toggleCityOverlay = () => {
            setcityoverlay(!Cityoverlay);
        };



    React.useEffect(() => {
        axiosInstance.post('/Filterstate',{
                    countryid:8
                }).then((res) =>{
                    let newarr = res.data.result;
                     setstatedata(newarr);
         }) }, [])





         const getstatefun = (value) =>{
            setstateoverlay(false);
            setlabelcity('please select city')
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


          


  
      const keyExtractor = (item, index) => index.toString()
      
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

    
    
    
    
    const showDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
      };
    
      const handleConfirm = (currentDate) => {
        let formatteddate = currentDate.getFullYear()+'-'+(currentDate.getMonth() + 1) +  '-' +  currentDate.getDate();
        onchange({name:"dob",value:formatteddate })
        setmydate(formatteddate);
        hideDatePicker();
      };

      
        const toggleuploadoverlay = () => {
            setuploadoverlay(!uploadoverlay);
        };


       







    

      

      


    return (
        <ScrollView style={{backgroundColor:Customclr.secondary}}>
            <View style={{marginTop:heightPercentageToDP('8%'),justifyContent:'center',alignSelf:'center'}}>
            <Image  style={styles.imageupload}  source={{uri: image}}   alt="logo" />
            <TouchableOpacity onPress={toggleuploadoverlay}>
                <Text style={{alignSelf:'center',fontSize:heightPercentageToDP('2.4%'),color:Customclr.blue}}>
                   {I18n.t('Upload_image')} 
                      
                </Text>
            </TouchableOpacity>
            </View>

            <View style={{alignSelf:'center',marginTop:heightPercentageToDP('3%')}}>             
                <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                       placeholderTextColor={Customclr.dark} 
                        containerStyle={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('1.8%')}}
                        inputContainerStyle={{borderColor:Customclr.dark}}  
                        placeholder={I18n.t('Enter_Your_Full_Name')}                        
                        label={I18n.t('Full_Name')}    
                        onChangeText={(value)=>{onchange({name:"name",value })}}  
                        renderErrorMessage={false}
                        errorMessage={error.phoneno}                        
                        errorStyle={{fontSize:heightPercentageToDP('2.3%')}}
                        value={form.name||""}  />

                 
            <Pressable onPress={showDatePicker} style={{flexDirection:'row',alignItems:'center'}}>
                    <Input 
                    labelStyle={{color:Customclr.dark,fontSize:heightPercentageToDP('2.8%')}}
                     placeholderTextColor={Customclr.dark} 
                     placeholder={I18n.t('Please_Select_your_Dob')} 
                     containerStyle={{width:widthPercentageToDP('85%'),marginTop:heightPercentageToDP('1.4%') }}
                      label={I18n.t('Date_Of_Birth')}  
                       keyboardType="default"  
                      value={form.dob||mydate||""}  />
                      <Icon name="calendar" type="antdesign" size={widthPercentageToDP('8%')}/>
            </Pressable>
                <DateTimePickerModal isVisible={isDatePickerVisible}  mode="date" onConfirm={handleConfirm}  onCancel={hideDatePicker} />


                <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                        placeholderTextColor={Customclr.dark} 
                        containerStyle={{width:widthPercentageToDP('95%') }}
                        inputContainerStyle={{borderColor: Customclr.dark}}
                        placeholder={I18n.t('Enter_Your_Age')} 
                        keyboardType="number-pad"  label={I18n.t('AGE')}  
                        onChangeText={(value)=>{onchange({name:"age",value })}}  
                        renderErrorMessage={false}
                        errorMessage={error.phoneno}                        
                        errorStyle={{fontSize:heightPercentageToDP('2.3%')}} 
                        value={form.age||""}
                        
                        />
                <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                        placeholderTextColor={Customclr.dark} 
                        containerStyle={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('1.8%') }}
                        inputContainerStyle={{borderColor: Customclr.dark}}
                        placeholder={I18n.t('Enter_Your_Address')} 
                         label={I18n.t('Address')}   multiline={true}
                        onChangeText={(value)=>{onchange({name:"address",value })}}  
                        renderErrorMessage={false}
                        errorMessage={error.address}                        
                        errorStyle={{fontSize:heightPercentageToDP('2.3%')}} 
                        value={form.address||""}
                        
                />



            <View style={styles.mypicker}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{  fontSize:heightPercentageToDP('2%'), fontWeight:'700',marginBottom:heightPercentageToDP('1%')}}>{I18n.t('gender')}</Text>

                </View>

                
                <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) => {onchange({name:"gender",value:itemValue }) ; setgender(itemValue) } }
                     placeholder={{
                        label: 'Please Select education  Status',
                        value: null,
                    }}
                     value={form.gender || isgender||""}
                     style={{ inputAndroid: { color: 'black' } }}
                     items={[
                        { label:I18n.t('male'), value: '1'   , key:'1' },
                        { label: I18n.t('female'), value: '2' , key:'2' },
                        { label: I18n.t('Transegender'), value: '3' , key:'3' },
                        ]}
                />

           


            </View>

            
            
            <View style={styles.mypicker}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={styles.pickerlabel}> {I18n.t('Blood_Group')} </Text>
                </View>

                <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) => { onchange({name:"bloodgroup",value:itemValue }) ; setbloodgroup(itemValue)} }
                     placeholder={{
                        label: 'please select Blood Group',
                        value: null,
                    }}
                    value={form.bloodgroup||bloodgroup||""}
                    style={{ inputAndroid: styles.pickerselect, inputIOS:styles.pickerselect}}

                    
                     items={[
                        { label: 'O+', value: 'O+'  , key:'1'     },
                        { label: 'O-', value: 'O-'   , key:'2'    },
                        { label: 'AB+', value: 'AB+'  , key:'3'    },
                        { label: 'AB-', value: 'AB-' , key:'4'   },
                        { label: 'A+', value: 'A+'  , key:'5'  },
                        { label: 'A-', value: 'A-'  , key:'6'   },
                        { label: 'B+', value: 'B+'  , key:'7'   },
                        { label: 'B-', value: 'B-'  , key:'8'    },
                        ]}     />     
            </View>



            <View style={{width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                <View>
                <Text style={{ fontSize:heightPercentageToDP('3%'),fontWeight:'700',}}>
                    {I18n.t('state')}
                </Text> 
                </View>                 
                <View style={{borderBottomColor:Customclr.dark,borderBottomWidth:1}}>
                <Pressable onPress={toggleStateOverlay} >
                <Text>
                    
                { labelstate|| "Please Select state"}
                </Text> 
                </Pressable> 
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
                <Text>                   
                { labelcity|| "Please Select city"}  
                </Text> 
                </Pressable>
                </View>         


            </View>



            <Input labelStyle={{color:Customclr.dark ,fontSize:heightPercentageToDP('2.8%')}} 
                        placeholderTextColor={Customclr.dark} 
                        containerStyle={{width:widthPercentageToDP('95%'),marginTop:heightPercentageToDP('1.8%'),display:'none'}}  
                        inputContainerStyle={{borderColor: Customclr.dark}} 
                        placeholder='Enter Your Email address'  label='Email' 
                        onChangeText={(value)=>{onchange({name:"email",value })}}  
                        renderErrorMessage={false}
                        errorMessage={error.phoneno}
                        
                        errorStyle={{fontSize:heightPercentageToDP('2.3%')}}
                        value={form.email||""} />
                         


                
            <View style={styles.mypicker,{display:'none'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={styles.pickerlabel}>MaterialStatus</Text>
                </View>

                    <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) => {onchange({name:"materialstatus",value:itemValue }) ; setMaterialStatus(itemValue) } }
                     placeholder={{
                        label: 'Please Select Material Status',
                        value: null,
                    }}
                     value={form.materialstatus || MaterialStatus||""}
                     style={{ inputAndroid: { color: 'black' } }}
                     items={[
                        { label: 'Married', value: 'Married'   , key:'1' },
                        { label: 'UnMarried', value: 'UnMarried' , key:'2' },
                        ]}
                />
            </View>
            <Text style={styles.pickererror}> </Text>


            <View style={styles.mypicker,{display:'none'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={styles.pickerlabel}>Education Status</Text>

                </View>

                
                <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) => {onchange({name:"educationstatus",value:itemValue }) ; setEducationStatus(itemValue) } }
                     placeholder={{
                        label: 'Please Select education  Status',
                        value: null,
                    }}
                     value={form.educationstatus || EducationStatus||""}
                     style={{ inputAndroid: { color: 'black' } }}
                     items={[
                        { label: 'Educated', value: 'Educated'   , key:'1' },
                        { label: 'UnEducated', value: 'UnEducated' , key:'2' },
                        ]}
                />


            </View>
                <Text style={styles.pickererror}> </Text>
            <View style={styles.mypicker,{display:'none'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={styles.pickerlabel}>Job Status</Text>
                </View>


                
                <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) => {onchange({name:"jobstatus",value:itemValue }) ; setJobStatus(itemValue) }}
                     placeholder={{
                        label: 'Please Select Job Status',
                        value: null,
                    }}
                     value={form.jobstatus ||JobStatus||""}
                     style={{ inputAndroid: { color: 'black' } }}
                     items={[
                        { label: 'Employeed', value: 'Employeed'   , key:'1' },
                        { label: 'UnEmployeed', value: 'UnEmployeed' , key:'2' },
                        ]}
                />
            </View>
            <Text style={styles.pickererror}> </Text> 

          


            <View style={styles.mypicker,{display:'none'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{  fontSize:heightPercentageToDP('2%'), fontWeight:'700',marginBottom:heightPercentageToDP('1%')}}>Do You Want to share your profile for Matrimony </Text>

                </View>

                
                <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) => {onchange({name:"metrimonyshare",value:itemValue }) ; setIsMetrimonyshare(itemValue) } }
                     placeholder={{
                        label: 'Please Select......',
                        value: null,
                    }}
                     value={form.metrimonyshare || IsMetrimonyshare||""}
                     style={{ inputAndroid: { color: 'black' } }}
                     items={[
                        { label: 'yes', value: '1'   , key:'1' },
                        { label: 'no', value: '2' , key:'2' },
                        ]}
                />
            </View>

            <View style={styles.mypicker,{display:'none'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{  fontSize:heightPercentageToDP('2%'), fontWeight:'700',marginBottom:heightPercentageToDP('1%')}}>Do You Want to share your profile for Directory</Text>

                </View>

                
                <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) => {onchange({name:"directoryshare",value:itemValue }) ; setIsdirectoryshare(itemValue) } }
                     placeholder={{
                        label: 'Please Select..... ',
                        value: null,
                    }}
                     value={form.directoryshare || Isdirectoryshare||""}
                     style={{ inputAndroid: { color: 'black' } }}
                     items={[
                        { label: 'yes', value: '1'   , key:'1' },
                        { label: 'no', value: '2' , key:'2' },
                        ]}
                />
            </View>


           


                {/* end of picker */}

                <Button buttonStyle={{width:widthPercentageToDP('75%'),borderRadius:50,
                backgroundColor:Customclr.orange,alignSelf:'center',
                marginTop:heightPercentageToDP('3.5%'),marginBottom:heightPercentageToDP('5%')}}
                title={I18n.t('Submit')} onPress={onsubmit} loading={isloading}
                 />


                 
 {/* -------------------------------------------------Photo oevrlay----------------------------------------------------- */}
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



            </View>


          {/* state Overlay   ModalComponent={Modal} ariaHideApp={false}  */}

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



                {/* city Overlay */}


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




        </ScrollView>
    )
}



const styles = StyleSheet.create({


    // ----------------------------picker-----------------------------------
   
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
    stateOverlay:{
        width:widthPercentageToDP('60%'),
        height:heightPercentageToDP('40%')
    }


})

export default PreprofileHtml
