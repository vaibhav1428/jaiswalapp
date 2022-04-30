import Customclr from '../../assets/theme/Customclr';
import axiosInstance from '../../Helper/axiosInstance';
import EventsHtml from './EventsHtml'
import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View, Text,SafeAreaView,TouchableOpacity,FlatList } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';;
import { Button, Icon, ListItem, Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import { useNavigation } from '@react-navigation/native'
import { FAB } from 'react-native-elements';
import { CREATEEVENT } from '../../Nevigation/RoutesName';
import { GlobalContext } from '../../context/Provider';
import i18n from 'i18n-js';

const Events = () => {
    const nav = useNavigation();
    const [localloading,setlocalloading] = React.useState(true);
    const [stateoverlay, setstateoverlay] = React.useState(false); 
    
    const [form,setdate] = React.useState({});
    const [state, setstate] = React.useState('');    
    const [labelstate, setlabelstate] = React.useState('');    
    const [getstatedata,setstatedata] = React.useState([]);
    const [fitlterstate,setfitlterstate] = React.useState([]);
    const [Cityoverlay, setcityoverlay] = React.useState(false);    
    const [city, setcity] = React.useState('');    
    const [labelcity, setlabelcity] = React.useState('');   
    
    
    const {userState:{data}} = React.useContext(GlobalContext); 
    
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
        axiosInstance.post('/get_events',{
            state:data.state_id,
            city:data.city_id,
        }).then((res) =>{
            let newarr = res.data.result;
              setfitlterstate(res.data.filterstae)
             setdate(newarr);            
            
        })
    }, [])


    React.useEffect(() => {
        
        axiosInstance.post('/Filterstate',{
                    countryid:8,                  
                }).then((res) =>{
                    let newarr = res.data.result;
                     setstatedata(newarr);
                     setlocalloading(false)
         }) }, [])


    const filtereddata = (stateft,cityft) =>{

         axiosInstance.post('/get_events',{
            state:stateft,
            city:cityft,
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
                
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <ActivityIndicator color={Customclr.orangeshade0} size='large'  />
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

                        {/* <TouchableOpacity  onPress={()=>alert('pressed3')}>
                                <Text style={styles.filtertext}>
                                        Shot  {  }{<Icon  name='sort-down'  type='font-awesome'  color={Customclr.orangeshade0}/>}
                                    
                                    </Text>

                        </TouchableOpacity> */}
                        </View>

                    </View>
                    </View>


                    {/* <Text>
                    {fitlterstate||''}
                    </Text> */}


                <EventsHtml events={form}/>

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
    }


    // ----------------------------picker-----------------------------------
   
   

})

export default Events



