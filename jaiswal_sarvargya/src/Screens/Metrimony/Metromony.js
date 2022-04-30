import MetrimonyHtml from './MetrimonyHtml'
import React from 'react'
import { ActivityIndicator, Alert, ScrollView, StyleSheet } from 'react-native';
import { View, Text,SafeAreaView,TouchableOpacity,FlatList } from 'react-native'
import Customclr from '../../assets/theme/Customclr';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Button, Icon, Input, ListItem, Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import axiosInstance from '../../Helper/axiosInstance';
import { GlobalContext } from '../../context/Provider'
import { useNavigation } from '@react-navigation/native';
import { PROFILE } from '../../Nevigation/RoutesName';
import RNPickerSelect from 'react-native-picker-select';
import i18n from 'i18n-js';


const Metrimony = () => {

    const [localloading,setlocalloading] = React.useState(true);
    const [stateoverlay, setstateoverlay] = React.useState(false); 
    const {userState:{data}} = React.useContext(GlobalContext); 
    const navigation = useNavigation();
    
    const [form,setdate] = React.useState({});
    const [state, setstate] = React.useState('');    
    const [labelstate, setlabelstate] = React.useState('');    
    const [getstatedata,setstatedata] = React.useState([]);
    const [fitlterstate,setfitlterstate] = React.useState([]);
    const [Cityoverlay, setcityoverlay] = React.useState(false);       
    const [city, setcity] = React.useState('');    
    const [labelcity, setlabelcity] = React.useState(''); 
    const [isdetailoverlay, setisdetailoverlay] = React.useState(false);    
    const [IsGotra, setGotra] = React.useState('')
    const [ISrashi, setRashi] = React.useState('')
    const [Iscolor, setColor] = React.useState('')
    const [isto, setto] = React.useState(0)
    const [isfrom, setform] = React.useState(0)
    const [Gotralist, setgotralist] = React.useState([])
    const [getcitydata,setcitydata] = React.useState([{
        label: 'No Data Avilable',
        value: '',
    }]);



    const [isgender, setgender] = React.useState('');

      
        const toggleStateOverlay = () => {
            setstateoverlay(!stateoverlay);
        }; 
        
        const toggleCityOverlay = () => {
            setcityoverlay(!Cityoverlay);
        }; 
               
        const toggledetailoverlay = () => {
            setisdetailoverlay(!isdetailoverlay);
        };





    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            filtereddata(state,city);checkuserprof()
        });
    
        return unsubscribe;
      }, [navigation]);


    React.useEffect(() => {

        axiosInstance.post('/get_gotra',{
        })         
         .then((res) =>{ 
  
          if(res.data.status == 1){
              setgotralist(res.data.result);
          } 
  
        })
        axiosInstance.post('/Filterstate',{
                    countryid:8
                }).then((res) =>{
                    let newarr = res.data.result;
                     setstatedata(newarr);
                     setlocalloading(false)
         }) }, [])


    const filtereddata = (stateft,cityft) =>{

         axiosInstance.post('/get_metrimonial',{
            state:stateft,
            city:cityft,
            userid:data.id
        }).then((res) =>{
            let newarr = res.data.result;
              setfitlterstate(res.data.filterstae)
             setdate(newarr);            
            
        })

    }


    const  filterthreefun = (isstate,iscity) => {

        axiosInstance.post('/get_lastfiltermetrimonial',{
            state:isstate,
            city:iscity,
            userid:data.id,
            to:isto,
            from:isfrom,
            gotra:IsGotra,
            color:Iscolor,
            rashi:ISrashi,
            gender:isgender,
        }).then((res) =>{
            let newarr = res.data.result;
             setdate(newarr);   
             toggledetailoverlay();
             
        })
           
               
    }


    const checkuserprof = () =>{
        axiosInstance.post('/checkuserprof_metrominy',{
            userid:data.phone
        }).then((res) =>{

            if(res.data.status == 0 ){
             
                Alert.alert(
                    "you havent updated your profile to use this feature ",
                    "please go  to Profile->EditProfile",
                    [
                    
                      { text: "OK", onPress: () =>  navigation.goBack()}
                    ]
                  );
               
            }
                     
            
        })


    }


         const getstatefun = (value) =>{
            setstateoverlay(false);
         
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
                // alert(value);
          }


          


  
      const keyExtractor = (item, index) => index.toString()
      
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{getstatefun(item.value);setlabelstate(item.label);setstate(item.value);filtereddata(item.value,"");}}>
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
           <TouchableOpacity onPress={()=>{setcity(item.value);setlabelcity(item.label); setcityoverlay(false);filtereddata(state,item.value)}}>
                <ListItem bottomDivider>
                
                <ListItem.Content>
                
                    <ListItem.Title>{item.label}</ListItem.Title>
            
                </ListItem.Content>
                
                <ListItem.Chevron />
                
                </ListItem>
        </TouchableOpacity>

        </>
      )

    
                      


   



    

    return (
        <>
         {
                localloading ? 
                
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                     <ActivityIndicator color={Customclr.dark} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
                </View>
                :
                
                <SafeAreaView>
                    <View style={{marginLeft:widthPercentageToDP("10%"),marginRight:widthPercentageToDP("10%")}}>
                    <View style={styles.filtercontainer}>
                        <View style={styles.filterone}>
                            <View >
                                <TouchableOpacity onPress={toggleStateOverlay}>
                                <Text style={styles.filtertext}>
                                    { labelstate||i18n.t('state')}  {  }{<Icon  name='sort-down'  type='font-awesome'  color={Customclr.orangeshade0}/>}
                                </Text>
                                </TouchableOpacity>

                                
                                
                            </View>
                            <View style={{marginLeft:widthPercentageToDP('5%')}}>
                            <TouchableOpacity  onPress={toggleCityOverlay}>
                                <Text style={styles.filtertext}>
                                { labelcity|| i18n.t('city')}  {  }{<Icon  name='sort-down'  type='font-awesome'  color={Customclr.orangeshade0}/>}
                                    
                                </Text>
                            </TouchableOpacity>
                                   
                            </View>

                        </View>
                        
                        <View  style={styles.filtertwo}>

                        <TouchableOpacity  onPress={toggledetailoverlay}>
                                <Text style={styles.filtertext}>
                                        {i18n.t('shot')}  {  }{<Icon  name='sort-down'  type='font-awesome'  color={Customclr.orangeshade0}/>}
                                    
                                    </Text>

                        </TouchableOpacity>
                        </View>

                    </View>
                    </View>


                    {/* <Text>
                    {fitlterstate||''}
                    </Text> */}

         
                <MetrimonyHtml  form={form}/>  

                {/* state Overlay   ModalComponent={Modal} ariaHideApp={false}  */}

                {/* <Overlay ModalComponent={Modal} ariaHideApp={false}      isVisible={stateoverlay} onBackdropPress={toggleStateOverlay} overlayStyle={styles.stateOverlay}> */}
                <Overlay     isVisible={stateoverlay} onBackdropPress={toggleStateOverlay} overlayStyle={styles.stateOverlay}>
                <Text style={{alignSelf:'center'
                ,fontSize:heightPercentageToDP('2.8%')
                ,textDecorationLine: 'underline'}} > STATE </Text>

                <FlatList
                    keyExtractor={keyExtractor}
                    data={getstatedata}
                    renderItem={renderItem}
                    initialNumToRender={4}
                    maxToRenderPerBatch={4}
                    onEndReachedThreshold={0.1}
                    getItemLayout={(data, index) => (
                        {length: 70, offset: 70 * index, index}
                      )}
                    />
                </Overlay>



                {/* city Overlay */}


                {/* <Overlay  ModalComponent={Modal} ariaHideApp={false}    isVisible={Cityoverlay} onBackdropPress={toggleCityOverlay} overlayStyle={styles.stateOverlay}> */}
                <Overlay     isVisible={Cityoverlay} onBackdropPress={toggleCityOverlay} overlayStyle={styles.stateOverlay}>
                <Text style={{alignSelf:'center'
                ,fontSize:heightPercentageToDP('2.8%')
                ,textDecorationLine: 'underline'}} > CITY  </Text>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={getcitydata}
                    renderItem={renderCityItem}
                    />
                </Overlay> 
                
                
                
                {/* <Overlay  ModalComponent={Modal} ariaHideApp={false}    isVisible={isdetailoverlay} onBackdropPress={toggledetailoverlay} overlayStyle={styles.detailsoverlay}> */}
                <Overlay     isVisible={isdetailoverlay} onBackdropPress={toggledetailoverlay} overlayStyle={styles.detailsoverlay}>
                <Text style={{alignSelf:'center',fontWeight:"800"
                ,fontSize:heightPercentageToDP('2.2%')
                ,textDecorationLine: 'underline'}} > More Filter  </Text>


                <ScrollView style={{display:'flex',marginTop:heightPercentageToDP('2.2%'),flex:1}}>

                    <Text style={{display:'flex',marginVertical:heightPercentageToDP('1%'),fontSize:heightPercentageToDP('2%'),fontWeight:'800'}}>
                        Age Between
                    </Text>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                        <Input label ="To" maxLength={2} value={isto} onChangeText={(val)=>{setto(val)}}  containerStyle={{width:widthPercentageToDP('32%')}} /> 
                        <Text style={{fontSize:heightPercentageToDP('2%'),fontWeight:'800',textAlign:'center',alignSelf:'center'}}>  TO  </Text>
                        <Input label ="From"  maxLength={2} onChangeText={(val)=>{setform(val)}}   containerStyle={{width:widthPercentageToDP('32%')}}/>
                    </View>


                    <View style={styles.mypicker}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={styles.pickerlabel}>Skin color</Text>
                    </View>

                    <RNPickerSelect
                        onValueChange={(itemValue, itemIndex) => {} }
                        placeholder={{
                            label: 'please select your Skin Color',
                            value: null,
                        }}
                        style={{ inputAndroid: styles.pickerselect, inputIOS:styles.pickerselect}}
                        onValueChange={(itemValue, itemIndex) => {setColor(itemValue)} }                        
                        items={[
                            { label: 'Light', value: 'Light'  , key:'1'     },
                            { label: 'Fair', value: 'Fair'   , key:'2'    },
                            { label: 'Medium', value: 'Medium'  , key:'3'    },
                            { label: 'Dark', value: 'Dark'  , key:'4'    },
                            ]}    value={ Iscolor}  />     
                </View>


                <View style={styles.mypicker}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={styles.pickerlabel}>Rashi </Text>
                    </View>

                    <RNPickerSelect
                        onValueChange={(itemValue, itemIndex) => {setRashi(itemValue)} }
                        placeholder={{
                            label: 'please select your Rashi',
                            value: null,
                        }}
                        style={{ inputAndroid: styles.pickerselect, inputIOS:styles.pickerselect}}
                        
                        items={[
                            { label: 'Aries', value: 'Aries'  , key:'1'},
                            { label: 'Taurus', value: 'Taurus'   , key:'2'},
                            { label: 'Gemini', value: 'Gemini'  , key:'3'},
                            { label: 'Cancer', value: 'Cancer'  , key:'4'},
                            { label: 'Leo', value: 'Leo'  , key:'5'},
                            { label: 'Virgo', value: 'Virgo'  , key:'6'},
                            { label: 'Libra', value: 'Libra'  , key:'7' },
                            { label: 'Scorpio', value: 'Scorpio'  , key:'8'},
                            { label: 'Sagittarius', value: 'Sagittarius'  , key:'9'},
                            { label: 'Capricorn', value: 'Capricorn'  , key:'10'},
                            { label: 'Aquarius', value: 'Aquarius'  , key:'11'},
                            { label: 'Pisces', value: 'Pisces'  , key:'12'}
                            ]}   value={ ISrashi}    />     
                </View>



                <View style={styles.mypicker}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={styles.pickerlabel}> Gotra</Text>
                    </View>

                    <RNPickerSelect
                        onValueChange={(itemValue, itemIndex) => {setGotra(itemValue)} }
                        placeholder={{
                            label: 'please select your Gotra',
                            value: null,
                        }}

                        style={{ inputAndroid: styles.pickerselect, inputIOS:styles.pickerselect}}
                        
                        items={Gotralist}
                         value={IsGotra}   
                          />  
                           
                </View>



                <View style={styles.mypicker}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{  fontSize:heightPercentageToDP('2%'), fontWeight:'700',marginBottom:heightPercentageToDP('1%')}}>{i18n.t('gender')}</Text>

                </View>

                
                <RNPickerSelect
                     onValueChange={(itemValue, itemIndex) =>  setgender(itemValue) }
                     placeholder={{
                        label: 'Please Select education  Status',
                        value: null,
                    }}
                     value={isgender||""}
                     style={{ inputAndroid: { color: 'black' } }}
                     items={[
                        { label:i18n.t('male'), value: '1'   , key:'1' },
                        { label: i18n.t('female'), value: '2' , key:'2' },
                        { label: i18n.t('Transegender'), value: '3' , key:'3' },
                        ]}
                />

           


            </View>



                    <View style={styles.footer}>

                        <Button buttonStyle={{backgroundColor:Customclr.orangeshade0,borderRadius:30}} title={"Filter"} containerStyle={styles.textinput}  onPress={()=>filterthreefun(state,city)}/>

                    </View>



                    

                </ScrollView>





                </Overlay>

                </SafeAreaView> 
            }
       
          
        </>
    )
}

const styles = StyleSheet.create({
    filtercontainer:{
        width:widthPercentageToDP('90%'),
        height:heightPercentageToDP("5%"),
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20
        
    },
    filterone:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    filtertext:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:widthPercentageToDP('30%')
      


    },

    filtertext:{
        fontSize:heightPercentageToDP('1.7%'),
        fontWeight:'600'
    },
    stateOverlay:{
        width:widthPercentageToDP('60%'),
        height:heightPercentageToDP('40%')
    },
    detailsoverlay:{
        width:widthPercentageToDP('90%'),
        height:heightPercentageToDP('60%')
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
        width:widthPercentageToDP('80%'),
        alignSelf:'center'
    },
    pickerlabel:{
        fontSize:heightPercentageToDP('2%'),
        fontWeight:'800',

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

    footer:{
        flexDirection:'row',
        alignItems:'center',
        width:widthPercentageToDP('80%'),
        bottom:0,
        marginTop:heightPercentageToDP('5%'),
        justifyContent:'center',
        alignSelf:'center'
    
    },
    textinput:{ 
        bottom:0,
        height:heightPercentageToDP('7%'),
        flex:1,
        color:Customclr.danger,

    },


    // ----------------------------picker-----------------------------------
   
   

})

export default Metrimony



