import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { Video } from 'expo-av';
import React from 'react'
import { ActivityIndicator, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Divider, Icon, ListItem } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../../assets/theme/Customclr';
import { GlobalContext } from '../../../context/Provider';
import axiosInstance from './../../../Helper/axiosInstance'
import styles from './PostCss'
import PostPage from './PostPage';
import  Ionicons   from 'react-native-vector-icons/Ionicons';
import { CREATEPOST } from '../../../Nevigation/RoutesName';
import { showMessage } from 'react-native-flash-message';

const PostHtml = ({type}) => {

    const [post,setpost] = React.useState([]);
    const [Isloading,setIsloading] = React.useState(false);
    const [maxreached,setmaxreached] = React.useState(false);
    const [onEndReachedCalledDuringMomentum ,setonEndReachedCalledDuringMomentum ] = React.useState(true);
    const navgation = useNavigation();    
    const {userState:{data}} = React.useContext(GlobalContext); 


    const [fullpageloading, setfullpageloading] = React.useState(false);



    const [isallpostref, setisallpostref] = React.useState(true)


    React.useEffect(() => {
        const unsubscribe = navgation.addListener('focus', () =>
        
        _getPost()
          );    
        return unsubscribe;
      }, [navgation]);


    const refposts = () =>{
        setisallpostref(!isallpostref)

    }



    React.useEffect(() => {
            _getPost();    

    }, [isallpostref])





       async function _getPost() {
        setIsloading(true);
        setfullpageloading(true);
        var value = await AsyncStorage.getItem('users');
        var parsed = JSON.parse(value);
        axiosInstance.post('/allPost', {
            lastid: 0,
            type: type,
            userid: parsed.userid
        }).then((res) => {
            let newarr = res.data.result;
            if (res.data.status == 1) {
                setpost(newarr);
                setIsloading(false);
                setisallpostref(false);
                setfullpageloading(false);
            }
            if (res.data.status == 0) {
                setpost(newarr);
                setIsloading(false);
                setfullpageloading(false);
            }
        });


    }


       const _endreachfile = async() =>{  
          
       const    lastid =     post.length ;
            var value = await AsyncStorage.getItem('users');
            var parsed = JSON.parse(value);
            axiosInstance.post('/allPost',{   
                lastid:lastid,
                type:type,    
                userid:parsed.userid 
                }).then((res) =>{
                let newarr = res.data.result;
                if( res.data.status == 1){
                    setpost([...post,...newarr]);

                    if(res.data.message !== ''){
                        setmaxreached(true);
                    showMessage({
                        message:res.data.message ,
                        type: "danger",
                        icon: "danger",
                        });
                    }
                }

                if(res.data.status == 0){
                    setpost(newarr);
                }
            }) 
                
        
        }





     




    return (
     

        <View>
        {
            fullpageloading ?
                
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <ActivityIndicator color={Customclr.dark} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
            </View>
            
            :

            post === '' ? <View style={{justifyContent:'center',alignSelf:'center',alignContent:'center',marginTop:heightPercentageToDP('20%')}}>
            <Text style={{fontSize:heightPercentageToDP('3%')}}>
                NO Post Found
            </Text>
            </View> :
            post == undefined
            ?
            <View style={{justifyContent:'center',alignSelf:'center',alignContent:'center',marginTop:heightPercentageToDP('20%')}}>
            <Text style={{fontSize:heightPercentageToDP('3%')}}>
                NO Post Found
            </Text>
            </View>                

            :


            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={post}            
            renderItem={({ item,index })=>{
                return(
                   <PostPage post={item} index={index} key={index}  refposts={refposts}/>

                )
            }}
            initialNumToRender={4}
            maxToRenderPerBatch={4}
            onEndReachedThreshold={0.1}
            onRefresh={_getPost}
            refreshing = {Isloading}
            getItemLayout={(data, index) => (
                {length: 70, offset: 70 * index, index}
              )}
            onEndReached={({ distanceFromEnd }) => {
                if(!onEndReachedCalledDuringMomentum && !maxreached){
                    _endreachfile();
                    setonEndReachedCalledDuringMomentum(true)
                }
            }}

            onMomentumScrollBegin={() => { setonEndReachedCalledDuringMomentum(false) }}
            ListFooterComponent={()=>{

                return(
                <View style={{paddingBottom:heightPercentageToDP('20%')}}>
                    { !maxreached ? 
                        <ActivityIndicator size='small' color={Customclr.orangeshade0}  />
                        : null
                    }
                    
                </View>
            
                )}}
        
           
         />
          
        }

         
           
        </View>
    )
}

export default PostHtml







   