import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video } from 'expo-av';
import React from 'react'
import { StyleSheet, Text, View,Image, ActivityIndicator,TouchableOpacity,Vibration, Alert, Pressable, FlatList } from 'react-native'
import { BottomSheet,Avatar, Divider, Icon, ListItem } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../../assets/theme/Customclr'
import { GlobalContext } from '../../../context/Provider';
import axiosInstance from '../../../Helper/axiosInstance';
import Modal from 'modal-react-native-web';
import { useNavigation } from '@react-navigation/native';
import { COMMENTSCREEN, PROFILE, REPOSRTPOST } from '../../../Nevigation/RoutesName';
import CachedImage from '../../../Components/FaseImage/Index';
import i18n from 'i18n-js'; 

const PostPage = ({post,index,refposts}) => {
    const [status,setStatus ] = React.useState({});
    const [isLiked,setisliked ] = React.useState(false);
    const [likeloading,setlikeloading ] = React.useState(false);
    const [iscountlike,setiscountlike ] = React.useState(1);
    const [iscountcomment,setiscountcomment ] = React.useState(1);
    const {userState:{data}} = React.useContext(GlobalContext);
    const [isLikesheetVisible, setisLikesheetVisible] = React.useState(false);
    const navgation = useNavigation();



console.log(post.title);


    //buttomsheet 



    const [bsisVisible, setbsIsVisible] = React.useState(false);
    const [islikepeople, setlikepeople] = React.useState([]);



    //buttomsheet 



    const [ripisVisible, setripVisible] = React.useState(false);




    
    
    React.useEffect(() => {
        const unsubscribe = navgation.addListener('focus', () => {
            CountLikeComment(); 
            likepost();  
        });    
        return unsubscribe;
      }, [navgation]);

    
    React.useEffect(() => {
            asyncstoragedsta() ;
            CountLikeComment();    
            likepost(); 
       
        }, [])


       const asyncstoragedsta = async() =>{
        setlikeloading(true)
          
            var value = await AsyncStorage.getItem('users');
            var parsed = JSON.parse(value);
            axiosInstance.post('/get_LikedPost',{
                userid:parsed.userid,
                postid:post.post_id,
             }).then((res) =>{
                 if(res.data.status == 1 ){   
                    setlikeloading(false)            
                    setisliked(true);


                 }
                 if(res.data.status == 0 ){
                    setlikeloading(false)    
                    setisliked(false);

                     
                 }
              
                       
             })
                
        
        }
        
        
        const CountLikeComment = () =>{
            setlikeloading(true)
            axiosInstance.post('/CountLikeComment',{
                postid:post.post_id,
             }).then((res) =>{
                 if(res.data.status == 1 ){               
                    // setisliked(false);
                    setlikeloading(false)
                    setiscountlike(parseInt(res.data.like))
                    setiscountcomment(res.data.comment)

                 }
                 if(res.data.status == 0){               
                    // setisliked(false);
                    setlikeloading(false)
                    setiscountlike(parseInt(res.data.like))
                    setiscountcomment(res.data.comment)

                 }
                 
              
                       
             })
                
        
        } 



    const likepost = (userid,postid) =>{   
        setisliked(!isLiked); 
        setlikeloading(true)       

        axiosInstance.post('/like_post',{
            userid,
            postid
         }).then((res) =>{           
            CountLikeComment();
            setlikeloading(false)
            
         })
   
        

    }




    const reportpostfun = (img,title,userid,postid) =>
  {  Alert.alert(
      "Report",
      "Do You Want To report On This Post ",
      [
        {
          text: "Yes",
          onPress: () => {navgation.navigate(REPOSRTPOST,{img,title,userid,postid}),setripVisible(!ripisVisible);}
        },
        {
          text: "Cancel", 
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ]

   
    );
  

}
    const get_postlikedperson = (pid) =>{
        if(iscountlike !== 0){
            setbsIsVisible(!bsisVisible);            
        }

        axiosInstance.post('/get_postlikedperson',{
            postid:pid,
         }).then((res) =>{
             if(res.data.status == 1 ){  
                // console.log(res.data.result);
                setlikepeople(res.data.result);

              
             }
             if(res.data.status == 0 ){                 
                setlikepeople([]);
             }
          
                   
         })

    }




    const _deletepost = (userid,postid)=>{
        Alert.alert(
            "Delete",
            "Do You Want To Delete  This Post ",
            [
              {
                text: "Yes",
                onPress: () => {reqfordelete(userid,postid)}
              },
              {
                text: "Cancel", 
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
            ]
      
         
          );
        

        
    }

    const reqfordelete = (userid,postid) =>{
        // console.log(userid,postid);
        axiosInstance.post('/delete_postrequest',{
            userid,
            postid
         }).then((res) =>{  
             if(res.data.status == 1){
                refposts();
                alert('deleted successfully');
             } 
             
             if(res.data.status == 0){
                 
                 
             }

          
         })

    }
  

    return (
     <View style={{display:'flex',backgroundColor:Customclr.light,marginTop:heightPercentageToDP('0.5%'),flex:1}}>
       
            {/*------------------------------------- Upper post---------------------- */}
                <View style={{display:'flex',margin:widthPercentageToDP('2%'),flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        {/* avatar */}
                        <View>
                            <Avatar rounded size={widthPercentageToDP('12%')} source={{uri:post.profilepic}} />
                        </View>
                        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:widthPercentageToDP('2%')}}>
                            <Text style={{fontSize:widthPercentageToDP('4%'),fontWeight:'700'}}>
                                {post.name}
                            </Text>
                            <Text style={{fontSize:widthPercentageToDP('3%')}}>
                                {post.city+ ',' +post.state} , {post.posted_at}
                                
                            </Text>
                        </View>
                        
                    </View>

                    <View style={{display:'flex',justifyContent:'center',alignSelf:'center'}}>
                     <Text> {
                        
                          <Icon
                        name='dots-three-vertical'
                        type='entypo'
                        color={Customclr.text}
                        onPress={()=>{
                          setripVisible(!ripisVisible)
                        }
                        }
                        /> 
                      }

                    </Text>
                             
                    </View>

                </View>
                <View style={{display:'flex',margin:widthPercentageToDP('2%')}}>
                    <Text>
                    {post.title.length < 100
                        ? `${post.title}`
                        : `${post.title.substring(0, 90)}...`}
                    </Text>
                </View>

                {/*------------------------------------- middile post---------------------- */}
                <View >

                        {/* <Image
                        source={{ uri: post.posturl }}
                        resizeMode='cover'
                        style={{ alignSelf: 'center', width: widthPercentageToDP('100%'), height:widthPercentageToDP('80%')}}
                        PlaceholderContent={ <ActivityIndicator size='large' color={Customclr.orange} />}
                    /> */}

                  
                     
                    
                    
                     {
                        post.type == 'video'?
                        <Video
                        style={{ alignSelf: 'center', width: widthPercentageToDP('100%'), height:widthPercentageToDP('80%')}}
    
                            source={{
                               uri: post.posturl,
                               }}
                           useNativeControls
                           resizeMode="contain"
                           isLooping
                           onPlaybackStatusUpdate={status => setStatus(() => status)}

                         /> 
                        
                        :
                    //     <Image
                    //     source={{ uri: post.posturl }}
                    //     resizeMode='cover'
                    //     style={{ alignSelf: 'center', width: widthPercentageToDP('100%'), height:widthPercentageToDP('80%')}}
                    //     PlaceholderContent={ <ActivityIndicator size='large' color={Customclr.orange} />}
                    // /> 
                    
                    
                    <CachedImage         
                        source={{ uri: post.posturl }}
                        cacheKey={post.posturl}
                        resizeMode='cover'
                        style={{ alignSelf: 'center', width: widthPercentageToDP('100%'), height:widthPercentageToDP('80%')}}
                    />

                    }
                    

                   

                </View>
                {/*------------------------------------- Lower post---------------------- */}
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginVertical:widthPercentageToDP('2%'),marginHorizontal:widthPercentageToDP('5%')}}>
                   <TouchableOpacity onPress={()=>{setisLikesheetVisible(true),CountLikeComment(),get_postlikedperson(post.post_id)}}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        
                        
                        <Icon
                            
                            name='like1'
                            type='antdesign'
                            color={Customclr.orange}
                            size={widthPercentageToDP('4.2%')}
                            />  


                        {
                            likeloading ?
                            <ActivityIndicator size='small' color={Customclr.orange} />
                            :
                        

                        <Text style={{color:Customclr.orange,textAlign:'center',fontSize:widthPercentageToDP('3%')}}>
                           {iscountlike}
                        </Text>
                        }
                    </View>

                    </TouchableOpacity>
                    <View>
                        <Text style={{color:Customclr.orange}}>
                           {`${iscountcomment }  ${i18n.t('comment')}`}
                        </Text>
                    </View>      




                    
                    
                </View>
                <Divider style={{ backgroundColor: Customclr.Lightgray }} />
                <View style={{marginVertical:widthPercentageToDP('2%')}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                        <TouchableOpacity onPress={()=>{likepost(data.id,post.post_id)}}>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            
                            {isLiked ?  <Icon  name='like1'
                                        type='antdesign'
                                        color={Customclr.orange}
                                        size={widthPercentageToDP('4.5%')}
                                        />  : 
                                        <Icon  name='like2'
                                        type='antdesign'
                                        color={Customclr.dark}
                                        size={widthPercentageToDP('4.5%')}
                                        />  
                                      
                             }
                                
                                <Text  style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'700',marginLeft:widthPercentageToDP('1.5%'),color: isLiked ? Customclr.orangeshade0 : Customclr.text}}>
                                {i18n.t('like')}
                                </Text>
                            

                            </View>
                        </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{navgation.navigate(COMMENTSCREEN,{postid:post.post_id,userid:data.id})}}> 
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Icon  name='comment-outline'
                                type='material-community'
                                color={Customclr.dark}
                                size={widthPercentageToDP('4.5%')}
                                />  
                            <Text style={{fontSize:heightPercentageToDP('2.2%'),fontWeight:'700',marginLeft:widthPercentageToDP('1.5%')}}>
                            {i18n.t('comment')}
                            </Text>

                        </View>
                    </TouchableOpacity>


                    {/* <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Icon                    
                            name='share-outline'
                            type='material-community'
                            color={Customclr.dark}
                            size={widthPercentageToDP('6%')}
                            />  
                        <Text style={{fontSize:heightPercentageToDP('2.7%'),fontWeight:'700',marginLeft:widthPercentageToDP('1.5%')}}>
                            Share
                        </Text>

                    </View> */}

                </View>
                </View>




                <BottomSheet  isVisible={bsisVisible} containerStyle={{paddingVertical:heightPercentageToDP('2%')}}>
                    <>

                    
                   

                    <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={islikepeople}
                    initialNumToRender={4}
                    maxToRenderPerBatch={4}
                    onEndReachedThreshold={0.1}
                    getItemLayout={(data, index) => (
                        {length: 70, offset: 70 * index, index}
                      )}
                      renderItem={({item,index})=>(
                          <Pressable onPress={()=>{navgation.navigate(PROFILE,{'id':item.id},setbsIsVisible(!bsisVisible))}}>
                        <ListItem key={index} bottomDivider>
                        <Avatar source={{uri: item.profilepic}} />
                        <ListItem.Content>
                          <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                      </ListItem>
                      </Pressable>

                      )}
                    />



                    <Pressable onPress={()=>{setbsIsVisible(!bsisVisible)}} style={{backgroundColor:Customclr.red,paddingVertical:heightPercentageToDP('1%'),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                       <Text style={{textAlign:'center',fontSize:heightPercentageToDP('3%'),fontWeight:'700'}}>
                             
                            Close
                        </Text>

                    </Pressable>

                    </>
      </BottomSheet>

      

                <BottomSheet  isVisible={ripisVisible}>
                    <>
                    <Pressable onPress={()=>reportpostfun(post.posturl,post.title,post.user_id,post.post_id) } style={{backgroundColor:Customclr.orangeshade0,paddingVertical:heightPercentageToDP('1%'),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon name='report-problem' containerStyle={{marginRight:widthPercentageToDP('1.5%')}}/>               
                        
                         <Text style={{textAlign:'center',fontSize:heightPercentageToDP('3%'),fontWeight:'700'}}>
                             
                             Report
                          </Text>
                    </Pressable>
                    <Divider width={2.8} />
                {
                data.id == post.user_id ?  
                    <Pressable onPress={()=>{_deletepost(post.user_id,post.post_id)}} style={{backgroundColor:Customclr.teal,paddingVertical:heightPercentageToDP('1%'),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon name='delete'  containerStyle={{marginRight:widthPercentageToDP('1.5%')}}/>               
                        
                         <Text style={{textAlign:'center',fontSize:heightPercentageToDP('3%'),fontWeight:'700'}}>
                             
                             Delete
                          </Text>
                    </Pressable>
                    :
                    null
            }

                    <Divider width={2.8} />

                    
                    <Pressable onPress={()=>{setripVisible(!ripisVisible)}} style={{backgroundColor:Customclr.red,paddingVertical:heightPercentageToDP('1%'),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                       
                     <Icon name='close' type='font-awesome' containerStyle={{marginRight:widthPercentageToDP('1.5%')}}/>
                     <Text style={{textAlign:'center',fontSize:heightPercentageToDP('3%'),fontWeight:'700'}}>
                             
                            Close
                        </Text>

                    </Pressable>

                    </>
      </BottomSheet>

                
      
    </View>
    )
}

export default PostPage

const styles = StyleSheet.create({})
