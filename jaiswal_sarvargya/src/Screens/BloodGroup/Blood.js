import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Pressable } from 'react-native'
import Bloodhtml from './Bloodhtml'
import { ActivityIndicator } from 'react-native';
import Customclr from '../../assets/theme/Customclr';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Avatar, Button, Icon, ListItem, Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import axiosInstance from '../../Helper/axiosInstance';
import i18n from 'i18n-js';
import { showMessage } from 'react-native-flash-message';


const Blood = () => {


    const [form,setdate] = React.useState({});

    const [localloading,setlocalloading] = React.useState(true);
    const [stateoverlay, setstateoverlay] = React.useState(false);    
    const [state, setstate] = React.useState('');    
    const [labelstate, setlabelstate] = React.useState('');    
    const [getstatedata,setstatedata] = React.useState([]);
    const [fitlterstate,setfitlterstate] = React.useState([]);


    const [Cityoverlay, setcityoverlay] = React.useState(false);    
    const [city, setcity] = React.useState('');    
    const [labelcity, setlabelcity] = React.useState('');   
    
    const [Isbloodoverlay, setbloodoverlay] = React.useState(false);    
    const [isblood, setblood] = React.useState('');    
    const [isbloodlable, setbloodlabel] = React.useState('');   


    const bloodgrouplist = [
        { label: 'O+', value: 'O+'  , key:'1'     },
        { label: 'O-', value: 'O-'   , key:'2'    },
        { label: 'AB+', value: 'AB+'  , key:'3'    },
        { label: 'AB-', value: 'AB-' , key:'4'   },
        { label: 'A+', value: 'A+'  , key:'5'  },
        { label: 'A-', value: 'A-'  , key:'6'   },
        { label: 'B+', value: 'B+'  , key:'7'   },
        { label: 'B-', value: 'B-'  , key:'8'    },
    ]
    
    


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

        const tooglebloodoverlyay = () => {
            setbloodoverlay(!Isbloodoverlay);
        };

    React.useEffect(() => {filtereddata()}, [])


    React.useEffect(() => {
        axiosInstance.post('/Filterstate',{
                    countryid:8
                }).then((res) =>{
                    let newarr = res.data.result;
                     setstatedata(newarr);
                     setlocalloading(false)
         }) }, [])


    const filtereddata = (stateft,cityft) =>{

         axiosInstance.post('/allblooddoners',{
            state:stateft,
            city:cityft,
            blood:'',
        }).then((res) =>{
            let newarr = res.data.result;
              setfitlterstate(res.data.filterstae)
             setdate(newarr); 
                    
            
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

          const requestforblood = (state,city,blood) =>{
            setlocalloading(true);
            axiosInstance.post('/allblooddoners',{
                state:state,
                city:city,
                blood:blood,
            }).then((res) =>{
                let newarr = res.data.result;
                if(res.data.status == 1){
                    setfitlterstate(res.data.filterstae)
                   setdate(newarr); 
                   tooglebloodoverlyay();
                   setlocalloading(false);         

                }
                if(res.data.status == 0){
                    
                showMessage({
                    message: "No user found",
                    type: "danger",
                    icon: "danger",
                  });
                  tooglebloodoverlyay();
                   setlocalloading(false);         

                }

                
            })

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
      
     const renderbloodgrouplist = ({ item }) => (
          <>
           <TouchableOpacity onPress={()=>{requestforblood(state,city,item.value),setbloodlabel(item.label)}}>
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
                                    { labelstate|| i18n.t('state')}  {  }{<Icon  name='sort-down'  type='font-awesome'  color={Customclr.orangeshade0}/>}
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

                        <TouchableOpacity  onPress={tooglebloodoverlyay}>
                                <Text style={styles.filtertext}>
                                        {isbloodlable||i18n.t('Blood_Group')} {  }{<Icon  name='sort-down'  type='font-awesome'  color={Customclr.orangeshade0}/>}
                                    
                                    </Text>

                        </TouchableOpacity>
                        </View>

                    </View>
                    </View>
                
                <Bloodhtml form={form} />

                <Overlay   isVisible={stateoverlay} onBackdropPress={toggleStateOverlay} overlayStyle={styles.stateOverlay}>
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


                <Overlay    isVisible={Cityoverlay} onBackdropPress={toggleCityOverlay} overlayStyle={styles.stateOverlay}>
                <Text style={{alignSelf:'center'
                ,fontSize:heightPercentageToDP('2.8%')
                ,textDecorationLine: 'underline'}} > CITY  </Text>

                <FlatList
                    keyExtractor={keyExtractor}
                    data={getcitydata}
                    renderItem={renderCityItem}
                    />
                </Overlay> 
                      
                <Overlay    isVisible={Isbloodoverlay} onBackdropPress={tooglebloodoverlyay} overlayStyle={styles.stateOverlay}>
                <Text style={{alignSelf:'center'
                ,fontSize:heightPercentageToDP('2.8%')
                ,textDecorationLine: 'underline'}} > Blooad Group  </Text>
               
                <FlatList
                    keyExtractor={keyExtractor}
                    data={bloodgrouplist}
                    renderItem={renderbloodgrouplist}
                    />
                
             
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
        fontSize:heightPercentageToDP('2.2%'),
        fontWeight:'600'
    },
    stateOverlay:{
        width:widthPercentageToDP('60%'),
        height:heightPercentageToDP('40%')
    }


    // ----------------------------picker-----------------------------------
   
   

})
export default Blood
