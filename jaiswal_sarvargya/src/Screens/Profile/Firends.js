import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { Image, StyleSheet,  View } from 'react-native'
import { Avatar, Badge, Button, Divider,Icon,ListItem ,Text, } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native-web'
import axiosInstance from '../../Helper/axiosInstance'
import { useNavigation } from '@react-navigation/core';
import { ADDFAMILY } from '../../Nevigation/RoutesName'
import AsyncStorage from '@react-native-async-storage/async-storage'
import I18n from 'i18n-js'
import i18n from 'i18n-js'

const Firends = ({route}) => {


    const [people, setpeople] = React.useState("");
    const [loading, setloading] = React.useState(true);
    const [iscount, setcont] = React.useState(0);

    const  navigation   = useNavigation();

    



    React.useEffect(() => {
        _asyncstoragedsta();
            
    }, [])
    
    
    
    
    
        const _asyncstoragedsta = async() =>{
              
            setloading(true);


            if(route.params){
              
                axiosInstance.post('/get_friends',{ 
                    userid: route.params.id
                     })        
                .then((res) =>{ 
                    if(res.data.status == 1 ){               
                        setpeople(res.data.result);
                        setloading(false);
                        setcont(res.data.total)
                    }
                    
                    if(res.data.status == 0){    
                        setloading(false);
                    } 
        
                 })
        
                  }
                  else{
                    var value = await AsyncStorage.getItem('users');
                    var parsed = JSON.parse(value);
                    axiosInstance.post('/get_friends',{
                        userid:parsed.userid,
                    }).then((res) =>{
                        if(res.data.status == 1 ){               
                            setpeople(res.data.result);
                            setloading(false);
                            setcont(res.data.total)
                        }
                        
                        if(res.data.status == 0){    
                            setloading(false);
                        }
            
                    
                            
                    })
            }
                
        
        }




  const  keyExtractor = (item, index) => index.toString()

    const    renderItem = ({ item }) => (
            <ListItem bottomDivider >
                         <Avatar source={{uri: item.profilepic}} />
                    <ListItem.Content>
                    <ListItem.Title style={{color:Customclr.blue}} >{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={{color:Customclr.text}} >{item.state_id + ',' + item.city_id}</ListItem.Subtitle>
                    </ListItem.Content>

                    <Text style={{color:Customclr.orangeshade0}}>
                       {item.relation}
                    </Text>
              

            </ListItem>
            )

    return (


        <>
        {
            loading ?  

            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <ActivityIndicator color={Customclr.dark} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
       </View>
       :
       
       <>
       <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:heightPercentageToDP('2%')}}>

           <View>
               <Text h4 style={{fontWeight:'600'}}>
                   {I18n.t('friends')}

               </Text>

           


           </View>

           <View>
               <Text style={{fontSize:heightPercentageToDP('3%'),fontWeight:'700'}}>
                  {i18n.t('Total')}:{iscount} {I18n.t('friends')}
               </Text>

           </View>
         
       </View>

       

               
           <FlatList
                   keyExtractor={keyExtractor}
                   data={people}
                   renderItem={renderItem}
                   onRefresh={_asyncstoragedsta}
                   refreshing={loading}
                   />




  

   </>



        }




        </>
        

    )
}

export default Firends

const styles = StyleSheet.create({
    PostTop_oneImage:{
        width:widthPercentageToDP('8%'),
        height:widthPercentageToDP('8%'),
        borderRadius:widthPercentageToDP('8%')/2,
        justifyContent:'center',
        alignSelf:'flex-end',
        marginRight:widthPercentageToDP('3.5%')
    },
})
