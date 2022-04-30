import React from 'react'
import { View, Text ,FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../assets/theme/Customclr'
import axiosInstance from '../../Helper/axiosInstance'
import { useNavigation } from '@react-navigation/native';
import { PERSONALMSG } from '../../Nevigation/RoutesName'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GlobalContext } from '../../context/Provider'
import i18n from 'i18n-js'


const MsgHtml = () => {

    const [islist, setlist] = React.useState([])
    const [Isloading, setloading] = React.useState(false)
    const [pageloading, setpageloading] = React.useState(false)
    const [isuser, setuser] = React.useState(null);


    const navgation = useNavigation();    


    const navigation = useNavigation();

 
    



    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign:'center',
            headerTitle:i18n.t('Message'),
            headerTintColor: Customclr.orangeshade0,


    }), [navigation]
})



    React.useEffect(() => {
        const unsubscribe = navgation.addListener('focus', () => {
           asyncstoragedsta()   
        });
    
        return unsubscribe;
      }, [navgation]);



   const asyncstoragedsta = async() =>{
    setpageloading(true);
        var value = await AsyncStorage.getItem('users');
        var parsed = JSON.parse(value);
        setuser(parsed.userid);
            
     axiosInstance.post('/get_chatlist',{
        userid :parsed.userid
     }).then((res) =>{
        setlist(res.data.result);     
        setpageloading(false);          
               
     }) 
    }

    const renderItem = ( {item} ) => (  
        <MsgList item={item} isuser={isuser}    />
  );  


    return (
        <View style={{flex:1 }}>

            {
                pageloading ? 
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                     <ActivityIndicator color={Customclr.orangeshade0} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
                </View>
                
                
                :
                   <FlatList
                   data={islist}
                   renderItem={renderItem}
                   keyExtractor={item => item.id}
                   initialNumToRender={4}
                   maxToRenderPerBatch={4}
                   onEndReachedThreshold={0.1}
                   getItemLayout={(data, index) => (
                   {length: 70, offset: 70 * index, index}
                   )}
                   onRefresh={asyncstoragedsta}
                   refreshing = {Isloading}
               />

            }
          
        </View>
    )
}

export default MsgHtml



const MsgList = ({item,isuser}) =>{

    const navigation = useNavigation();
    const {userState:{data}} = React.useContext(GlobalContext); 

    return(

        <TouchableOpacity onPress={()=>{navigation.navigate(PERSONALMSG,{isuser,idt:item.reciverid,chatname:item.name,logo:item.profilepic , userpic:data.profilepic})}}>
            <ListItem bottomDivider key={item.id}>
            <Avatar rounded source={{uri: item.profilepic}} />
            <ListItem.Content>
            <ListItem.Title>{item.name.toUpperCase()}</ListItem.Title>
            <ListItem.Subtitle>{
                "Click here to chat"
            // item.lastmsg.length < 40
            //                 ? `${item.lastmsg}`
            //                 : `${item.lastmsg.substring(0, 35)}...`
                            
                            
                            }</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    )


}
