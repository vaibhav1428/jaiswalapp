import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import Customclr from '../../assets/theme/Customclr';
import axiosInstance from '../../Helper/axiosInstance';
import { useNavigation } from '@react-navigation/core';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const LCnotif = () => {


    const [Ispost, setpost] = React.useState(null);
    const [isload, setload] = React.useState(false);
    const navgation = useNavigation(); 

    React.useEffect(() => {
        const unsubscribe = navgation.addListener('focus', () => {
            _asyncstoragedsta();
        });
    
        return unsubscribe;
      }, [navgation]);






    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis % 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }




    const _asyncstoragedsta = async() =>{
          
        setload(true);
        var value = await AsyncStorage.getItem('users');
        var parsed = JSON.parse(value);
        axiosInstance.post('/get_notification',{
            userid:parsed.userid,
         }).then((res) =>{
             if(res.data.status == 1 ){               

                setpost(res.data.result);
                setload(false);
               
             }
             
             if(res.data.status == 0){  
                setpost(res.data.result); 
                setload(false);

                console.log(Ispost);
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
                Ispost == null ?
                     
                            <View style={{justifyContent:'center',alignItems:'center',flex:1}}  >
                                 <Text style={{fontSize:heightPercentageToDP('3%'),color:Customclr.gray,textAlign:'center',fontWeight:'600'}}>
                                    No Notification 
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
                        <Avatar rounded  source={{uri: item.profilepic}} /> 
                        <ListItem.Content>
                            <ListItem.Title>{item.name+ " " + item.noti_status}</ListItem.Title>
                        </ListItem.Content>
                        <Avatar  source={{uri: item.posturl}} />
                        </ListItem>

                    )}
                />
                    }
          
        </View>
    )
}

export default LCnotif

const styles = StyleSheet.create({})
