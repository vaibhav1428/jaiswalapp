import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text } from 'react-native'
import ProfileHtml from './ProfileHtml'

const Profile = ({route}) => {

    const [isshowmsg, setshowmsg] = React.useState(false);
    const [iseditprof, seteditprof] = React.useState(false);

    const navigation = useNavigation();



    const getUser = async () => {

        if(route.params){
            await AsyncStorage.getItem('users')
            .then((val)=>{
              const details = JSON.parse(val);
             if(route.params.id === details.userid){
                seteditprof(true);
             }
             else{
                setshowmsg(true);           
             }

            
            });   
    
          }
          else{
            seteditprof(true);
            

          }    
    };



    
    React.useEffect(() => {
     
        getUser();

      
        
    }, [])



    return (
        <>
        <ProfileHtml isshowmsg={isshowmsg}  iseditprof={iseditprof}  route={route}/>
            
        </>
    )
}

export default Profile
