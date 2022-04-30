import React from 'react'
import { ActivityIndicator, Pressable, TouchableOpacity } from 'react-native'
import { Image, StyleSheet,  View } from 'react-native'
import { Avatar, Badge, Button, Divider,Icon,ListItem ,Text, } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native-web'
import axiosInstance from '../../Helper/axiosInstance'
import { useNavigation } from '@react-navigation/core';
import { ADDFAMILY, PROFILE } from '../../Nevigation/RoutesName'
import AsyncStorage from '@react-native-async-storage/async-storage'
import I18n from 'i18n-js'

const Famliy = ({route}) => {


    const [people, setpeople] = React.useState("");
    const [loading, setloading] = React.useState(true);
    const  navigation   = useNavigation();

    



    React.useEffect(() => {
        _asyncstoragedsta();
            
    }, [])
    
    
    
    
    
        const _asyncstoragedsta = async() =>{
              
            setloading(true);


            if(route.params){
              
                axiosInstance.post('/get_myfamily',{ 
                    userid: route.params.id
                     })        
                .then((res) =>{ 
                    if(res.data.status == 1 ){               
                        setpeople(res.data.result);
                        setloading(false);
                    }
                    
                    if(res.data.status == 0){    
                        setloading(false);
                    } 
        
                 })
        
                  }
                  else{
                    var value = await AsyncStorage.getItem('users');
                    var parsed = JSON.parse(value);
                    axiosInstance.post('/get_myfamily',{
                        userid:parsed.userid,
                    }).then((res) =>{
                        if(res.data.status == 1 ){               
                            setpeople(res.data.result);
                            setloading(false);
                        }
                        
                        if(res.data.status == 0){    
                            setloading(false);
                        }
            
                    
                            
                    })
            }
                
        
        }



  const  keyExtractor = (item, index) => index.toString()

    const    renderItem = ({ item }) => (
        <Pressable onPress={()=>{navigation.navigate(PROFILE,{'id':item.firendid})}} >
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
            </Pressable>
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
                   {I18n.t('Family_Mamber')}

               </Text>

           


           </View>
           <View>
          { 
          route.params ? null :    
           <Button
           titleStyle={{fontSize:heightPercentageToDP('1.8%')}}
           buttonStyle={{backgroundColor:Customclr.orangeshade0}}
             
                title={I18n.t('Add_Member')}
                 onPress={()=>{navigation.navigate(ADDFAMILY)}}
            />}

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

export default Famliy

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
