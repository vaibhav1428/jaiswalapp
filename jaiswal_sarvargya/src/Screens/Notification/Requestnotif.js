import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { ActivityIndicator } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';
import axiosInstance from '../../Helper/axiosInstance';

const Requestnotif = () => {


    const [Ispost, setpost] = React.useState([]);
    const [isload, setload] = React.useState(false);
    const navgation = useNavigation();    


    React.useEffect(() => {
        const unsubscribe = navgation.addListener('focus', () => {
            _asyncstoragedsta();
        });
    
        return unsubscribe;
      }, [navgation]);

 





    const _asyncstoragedsta = async() =>{
          
        setload(true);
        var value = await AsyncStorage.getItem('users');
        var parsed = JSON.parse(value);
        axiosInstance.post('/request_notification',{
            userid:parsed.userid,
         }).then((res) =>{
             if(res.data.status == 1 ){               
                setpost(res.data.result);
                setload(false);
             }
             
             if(res.data.status == 0){   
                setpost([]); 
                setload(false);
             }

          
                   
         })
            
    
    }


    const _sendreq = (userid,frndid,relation,status) =>{
        if(relation == 'undefined'){
            relation = 'no';
        }

        setload(true);


        axiosInstance.post('/accept_notification',{
            userid,
            frndid,
            relation,
            status            
         }).then((res) =>{
             if(res.data.status == 1 ){  
                _asyncstoragedsta();  
                setload(false);         
            
             }
             
             if(res.data.status == 0){   
                setload(false); 
                setpost([]); 

                showMessage({
                    message: "Somtthing Went Wrong!",
                    type: "danger",
                    icon: "danger",
                    });
          
             }

          
                   
         })

       

    }
    return (
        <View style={{flex:1}}>

            {
                  isload ?
                  <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                 <ActivityIndicator color={Customclr.dark} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
                 </View>
                 
                 :
                 
                Ispost == '' ?
                <View  style={{justifyContent:'center',alignItems:'center',flex:1}}>

                    <Text style={{fontSize:heightPercentageToDP('3%'),color:Customclr.gray,textAlign:'center',fontWeight:'600'}}>
                        No Post at here
                    </Text>
                </View>
                
                
                
                :

              

                    <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={Ispost}

                    onRefresh={_asyncstoragedsta}
                    refreshing={isload}
                    renderItem={
                        ({item,index})=>(


                    <ListItem bottomDivider key={index}>
                    <Avatar rounded source={{uri: item.profilepic}} />
                    <ListItem.Content>
                        <ListItem.Title>
                            <View style={{display:'flex',flexDirection:'row'}}>
                                <Text style={{fontWeight:'600'}}>
                                {item.name  }
                                </Text>
                                <Text>
                                    {
                                    item.relation ? `want to add you as ${item.relation} ` : " want to be your friend"
                                    }

                                </Text>
                            </View>
                            
                            </ListItem.Title>
                            </ListItem.Content>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignSelf:'center' }}>
                            <Icon 
                            name="check-square" 
                            color={Customclr.blue} 
                            style={{marginLeft: widthPercentageToDP('5%')}} 
                            size={heightPercentageToDP('5%')}  
                            type="font-awesome" 
                            onPress={()=>{
                                _sendreq(item.userid,item.firendid,item.relation,1)
                            }}/>


                            <Icon
                                name="squared-cross" 
                                color={Customclr.danger} 
                                size={heightPercentageToDP('5%')}   
                                type="entypo"
                                onPress={()=>{
                                    _sendreq(item.userid,item.firendid,item.relation,0)
                                
                                }}
                                
                                />
                        </View>
                    </ListItem>

                        )}
                    />





            }


                
        </View>
    )
}

export default Requestnotif

const styles = StyleSheet.create({})
