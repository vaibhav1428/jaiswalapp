import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View, Text,SafeAreaView,TouchableOpacity,FlatList } from 'react-native'
import Customclr from '../../assets/theme/Customclr';
import DirectoryHtml from './DirectoryHtml'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import axiosInstance from '../../Helper/axiosInstance';
import { Icon, ListItem, Overlay, SearchBar } from 'react-native-elements';
import i18n from 'i18n-js';


const Directory = () => {

    const [localloading,setlocalloading] = React.useState(true);
    const [formloading,setformloading] = React.useState(false);
    const [stateoverlay, setstateoverlay] = React.useState(false); 
    
    const [form,setdate] = React.useState({});
    const [state, setstate] = React.useState('');    
    const [labelstate, setlabelstate] = React.useState('');    
    const [isvalue, setvalue] = React.useState('');    
    const [getstatedata,setstatedata] = React.useState([]);
    const [fitlterstate,setfitlterstate] = React.useState([]);


    const [Cityoverlay, setcityoverlay] = React.useState(false);    
    const [city, setcity] = React.useState('');    
    const [labelcity, setlabelcity] = React.useState('');    



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

         axiosInstance.post('/allusers',{
            state:stateft,
            city:cityft,
            filteruser: '',
        }).then((res) =>{
            let newarr = res.data.result;
              setfitlterstate(res.data.filterstae)
             setdate(newarr);   
             
             
            
        })

    }


    const searchfilterdata = (stateft,cityft,val) =>{
        setformloading(true)

         axiosInstance.post('/allusers',{
            state:stateft,
            city:cityft,
            filteruser:val
         }).then((res) =>{
             
            let newarr = res.data.result;
              setfitlterstate(res.data.filterstae)
             setdate(newarr);
             setformloading(false)   
             
             
            
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
                
                <SafeAreaView style={{flex:1}}>
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

                        </View>

                    </View>
                    </View>


                    {/* <Text>
                    {fitlterstate||''}
                    </Text> */}

                    <View>
                    <SearchBar
                    placeholder="Are  You Looking For Someone.."
                    onChangeText={(val)=>{ searchfilterdata(state,city,val.toUpperCase()) ,setvalue(val)}}
                    value={isvalue}
                    containerStyle={{backgroundColor:Customclr.light,borderColor:Customclr.light,padding:heightPercentageToDP('-1.5%')}}
                    inputContainerStyle={{backgroundColor:Customclr.light}}
                />
                    </View>


                    {
                        formloading ?  
                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <ActivityIndicator color={Customclr.dark} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
                        </View>
                        
                        :
                        <DirectoryHtml  form={form}/> 
                    }

         
                

                {/* state Overlay   ModalComponent={Modal} ariaHideApp={false}  */}

                <Overlay    isVisible={stateoverlay} onBackdropPress={toggleStateOverlay} overlayStyle={styles.stateOverlay}>
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
        marginRight:20,
        marginBottom:heightPercentageToDP('1.7%')
        
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
        paddingRight:widthPercentageToDP('30%'),
      


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

export default Directory


