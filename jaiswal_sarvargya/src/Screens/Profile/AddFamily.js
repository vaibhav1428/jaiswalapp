import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { FlatList, StyleSheet, Text, View ,ScrollView, Pressable} from 'react-native'
import { Avatar, Button, ListItem, SearchBar } from 'react-native-elements';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';
import { DEFAULT_IMAGE_URI } from '../../Constants/general';
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../Helper/axiosInstance';
import Modal from 'modal-react-native-web';
import { showMessage } from 'react-native-flash-message';
const AddFamily = () => {

const [search, setsearch] = React.useState([]);
const [people, setpeople] = React.useState([]);
const [isuserid, setisuserid] = React.useState('');


const updateSearch= (val) =>{ 
    axiosInstance.post('/Search_family',{
            name:val,
            userid:isuserid,
         }).then((res) =>{

        setpeople(res.data.result);                  
    }) 
    
    setsearch(val);
}

React.useEffect(() => {
    asyncstoragedsta()    
    }, [])


   const asyncstoragedsta = async() =>{
        var value = await AsyncStorage.getItem('users');
        var parsed = JSON.parse(value);
        setisuserid(parsed.userid);
            
     axiosInstance.post('/all_people',{
        userid :parsed.userid
     }).then((res) =>{
        setpeople(res.data.result);               
               
     }) 
    } 



    return (
            <View style={{backgroundColor:Customclr.Lightgray}}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={(val)=>{ updateSearch(val) }}
                    value={search}
                    containerStyle={{backgroundColor:Customclr.light,borderColor:Customclr.light}}
                    inputContainerStyle={{backgroundColor:Customclr.light}}
                />


            <ScrollView>
            {
                people.map((post,index)=>{
                    return(
                        <FamilyComponent post={post} index={post} key={index}/>
                    )
                  
                })


            }
                


            </ScrollView>

        </View>
    )
}

export default AddFamily


export const FamilyComponent = ({post,index}) => {

    const {userState:{data}} = React.useContext(GlobalContext);
    const [visible, setVisible] = React.useState(false);
    const [IsRequest, setIsRequest] = React.useState(false);

    
const list = [
    {
      name: 'HUSBAND',
    },{
      name: 'WIFE',
    },
    {
      name: 'MOTHER',
    },
    {
        name: 'BROTHER', 
    },
    {
        name: 'SON', 
    },
    {
        name: 'DAUGHTOR', 
    },
    {
        name: 'BROTHER', 
    },
    {
        name: 'SISTER', 
    },
    {
        name: 'GUARDIAN', 
    },{
        name: 'OTHER', 
    },
  ]

    const toggleOverlay = () => {
      setVisible(!visible);
    };

    

    React.useEffect(() => {
        asyncstoragedsta()    
        }, [])


       const asyncstoragedsta = async() =>{
          
            var value = await AsyncStorage.getItem('users');
            var parsed = JSON.parse(value);
            axiosInstance.post('/get_FamilyReq',{
                userid:parsed.userid,
                firendid:post.id,
             }).then((res) =>{
                 if(res.data.status == 1 ){               
                    setIsRequest(true);
                 }
              
                       
             })
                
        
        }




  const sendfrndreq = (relation) =>{
        axiosInstance.post('/Family_Req',{
            userid:data.id,
            firendid:post.id,
            relation:relation,
         }).then((res) =>{
             showMessage({
                message: res.data.message,
                type: "success",
                icon: "success",
              }); 
            setIsRequest(!IsRequest)
            setVisible(false);
                   
         })




    }
    return (
        <View style={{borderBottomColor:Customclr.Lightgray,borderBottomWidth:0.8}}>
                    <View style={{padding:widthPercentageToDP('3%'),backgroundColor:Customclr.light}} key={index}>
                <View style={{display:'flex',flexDirection:'row',width:widthPercentageToDP('95%'),justifyContent:'space-between'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                        <View>
                            <Avatar source={{uri:post.profilepic}} />
                        </View>


                        <View style={{marginLeft:widthPercentageToDP('3%')}}>

                            <Text style={{color:Customclr.dark}}>
                               {post.name}                                
                            </Text>
                            <Text  style={{color:Customclr.Lightgray}}>
                                {post.city}, {post.state}
                            </Text>                       
                        </View> 
                </View> 

                <View>    
                    {
                        IsRequest ? 
                            <Button onPress={()=>sendfrndreq('')} containerStyle={{width:widthPercentageToDP('30%'),height:heightPercentageToDP('6%')}}  titleStyle={{fontSize:heightPercentageToDP('1.5%')}}
                        title='--Requested--' />  :

                        <Button onPress={toggleOverlay} containerStyle={{width:widthPercentageToDP('30%'),height:heightPercentageToDP('6%')}}  titleStyle={{fontSize:heightPercentageToDP('1.5%')}}
                        title='Make Family Mamber' />

                        
                    }                     
                     

                </View>  
                   </View>
                </View>


                <Overlay overlayStyle={{width:widthPercentageToDP('80%')}} isVisible={visible} onBackdropPress={toggleOverlay}>                    
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={list}
                    renderItem={
                        ({ item }) => (
                        <Pressable onPress={()=>sendfrndreq(item.name)}>
                            <ListItem bottomDivider>
                              <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                              </ListItem.Content>
                              <ListItem.Chevron />
                            </ListItem>
                        </Pressable>
                          )
                    }/>
                </Overlay>
        </View>
    )
}

// sendfrndreq(post.id)

const styles = StyleSheet.create({})
