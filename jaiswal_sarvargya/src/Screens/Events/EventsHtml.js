import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { View,  } from 'react-native'
import { Button, Divider, Image ,Text} from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker'
import { GlobalContext } from '../../context/Provider'
import axiosInstance from '../../Helper/axiosInstance'
import { showMessage } from 'react-native-flash-message'
import CachedImage from '../../Components/FaseImage/Index'

const EventsHtml = ({events}) => {

    const {userState:{data}} = React.useContext(GlobalContext); 

        
  

        const renderItem = ( {item} ) => (  
                <EventItem item={item} data={data} />
        );     




    return (
         
      <View>
      
            <Divider style={{ backgroundColor: Customclr.Lightgray ,marginTop:heightPercentageToDP('1%'),height:4}} />

            <View>
                <FlatList
                  data={events}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()} 
                  contentContainerStyle={{ paddingBottom: heightPercentageToDP('20%') }}                  
                  getItemLayout={(data, index) => (
                      {length: 70, offset: 70 * index, index}
                    )}
               />

                  
            </View>
      
        </View>
    )
}







const styles =  StyleSheet.create({

    container:{
        paddingHorizontal:widthPercentageToDP('4%'),
        paddingVertical:heightPercentageToDP('2%'),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:Customclr.grey,
        borderWidth:0.5,

    },
    textportion:{
        marginLeft:widthPercentageToDP('2%')
    },
    PostImage:{
        // height:hp('80%'),
        width: widthPercentageToDP('14%'),
        height: widthPercentageToDP('14%'),
        resizeMode: 'cover', 
        borderRadius:widthPercentageToDP('14%')
        
    },
    titleUser:{
        fontSize:heightPercentageToDP('3%'),
    },
    CityUser:{
        fontSize:heightPercentageToDP('2%'),
        color:Customclr.red,
    },
 
    mypicker:{
        width:widthPercentageToDP('30%'),
         alignSelf:'center',                
         
     },
     pickerselect:{       
        color:Customclr.text,
        margin:8
     },
     
});

export default EventsHtml




export const EventItem = ({item,data}) => {

    const [isrequ, setrequ] =  React.useState(false);
    const [isloading, setloading] =  React.useState(false);



    React.useLayoutEffect(() => {
        axiosInstance.post('/gameintrest',{
            userid:data.id,
            gameid:item.event_id,
            type: 0
        }).then((res) =>{  

            if(res.data.status == 1 ){
                setloading(false)
                setrequ(true)
            }
            else{
                setloading(false); 
            }    
            
        })
        
    }, [])



    const gameintrest = () =>{
        setloading(true) 

        axiosInstance.post('/gameintrest',{
            userid:data.id,
            gameid:item.event_id,
            type: 1

        }).then((res) =>{  

            if(res.data.status == 1 ){
                setloading(false)
                setrequ(true)
                showMessage({
                    message: "Your req is submit",
                    type: "success",
                    icon: "success",
                    });
            }
            else{
                showMessage({
                    message: "somethig  went wrong ",
                    type: "danger",
                    icon: "danger",
                    });
                setloading(false);
 
            }
            
            
            
        })


    }



    
    return (
    <View> 

    <View style={{margin:widthPercentageToDP('1%'),height:heightPercentageToDP('52%'),width:widthPercentageToDP('97%'),borderColor:Customclr.dark,borderWidth:1,alignSelf:'center'}}>

        <View>
            <CachedImage  cacheKey={item.event_image}  source={{ uri:item.event_image }}  resizeMode="stretch" style={{ width:widthPercentageToDP('97%'), height: heightPercentageToDP('35%') }}/>
        </View>
        <View style={{marginLeft:widthPercentageToDP('2%'),margin:heightPercentageToDP('2%'),display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
            <View>
                <Text h4 style={{fontWeight:'700'}} >
                {item.event_title}
                </Text>
                <Text h5 style={{fontWeight:'600'}}>
                {item.event_date + ',' + item.event_time + '\n' + item.event_day}
                </Text>
                <Text h5  style={{fontWeight:'600'}} >
                {item.state + ',' + item.city}
                </Text>

            </View> 
            <View style={{justifyContent:'center'}}>
            <Button
                title={isrequ ?  "Subbimetted " :"Intrested"}
                disabled ={isrequ ? true : false}
                type="outline"
                iconPosition='right'
                titleStyle={{fontSize:heightPercentageToDP('2.5%')}}
                icon={{
                    name: 'arrow-right',
                    size: widthPercentageToDP('7%'),
                    color: Customclr.blue,
                    style:{display:isrequ ? 'none' : null}                 
                    
                  }}

                onPress={ isrequ ? null : gameintrest}
                loading={isloading}
            />
                
            </View>

        </View>
      </View>
    </View>)
}
