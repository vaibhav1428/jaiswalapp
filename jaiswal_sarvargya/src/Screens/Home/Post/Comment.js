import React from 'react'
import { ActivityIndicator, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Avatar, Divider, Icon, ListItem } from 'react-native-elements'
import { showMessage } from 'react-native-flash-message'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Customclr from '../../../assets/theme/Customclr'
import { DEFAULT_IMAGE_URI } from '../../../Constants/general'
import axiosInstance from '../../../Helper/axiosInstance'

const CommentScreen = ({route}) => {

    const { postid,userid } = route.params;
    // const userid  = 1;
    // const postid = 21;

    const [Isloading, setIsloading] = React.useState(false);
    const [postloading, setpostloading] = React.useState(false);
    const [isinput, setinput] = React.useState('');
    const [iscomment, setiscomment] = React.useState([]);





    React.useLayoutEffect(() => (
        _getcomments()
    ), [])



    const _getcomments = () =>{
        setIsloading(true);
       
        axiosInstance.post('/get_CommentPost',{
            comment_postid:postid,         
         }).then((res) =>{
            let newarr = res.data.result;
            if( res.data.status == 1){
                setiscomment(newarr);
                setIsloading(false);
                setinput('');
          
            }
            if(res.data.status == 0){
                setiscomment(newarr);
                setIsloading(false);
                
            }
        })

    }



    const _postComment = () =>{

        if(isinput.length == 0){

            showMessage({
                message: "Please Write Something",
                type: "danger",
                icon: "danger",
                });
            return false;
           
          }
          else{

            setpostloading(true)
            axiosInstance.post('/post_CommentPost',{
                comment_postid:postid,
                comment_userid:userid,
                comment_text:isinput,          
             }).then((res) =>{
                let newarr = res.data.result;
                if( res.data.status == 1){
                    setiscomment(newarr);
                    setpostloading(false);
                    _getcomments()
                }
                if(res.data.status == 0){
                    setiscomment(newarr);
                    setpostloading(false);
                }
            })

          }

        

    }



    


    return (
        <>
        <View style={{display:'flex',flex:1}}>
            
    {
        

            iscomment == null ? 

            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',flex:1}}>

                <Text style={{fontSize:heightPercentageToDP('2.5%'),color:Customclr.gray}}>
                    No Comment 
                </Text>


            </View>
            :

             <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={iscomment}
                    onEndReachedThreshold={1}
                    onRefresh={_getcomments}
                    refreshing = {Isloading}
                    renderItem={({ item,index })=>{
                        return(
                            <PostCommentScreen item={item} index={index} key={index} userid={userid} />
                        )
                    }}
                    
                />}

                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? widthPercentageToDP('30%') : 0}>
             <View style={{paddingVertical:10,marginBottom:heightPercentageToDP('1.5%'),justifyContent:'flex-end',flexDirection:'row',borderColor:Customclr.dark,borderWidth:1,borderRadius:50,}}>
                 <View style={{width:widthPercentageToDP('84%'),justifyContent:'center'}}>
                <TextInput
                 placeholder="Enter Youn Comment at Here......"
                 placeholderTextColor={Customclr.dark}
                 onChangeText={(value)=>{setinput(value)}}
                 style={{paddingVertical:heightPercentageToDP('1%')}} 
                 value={isinput}
                />
                 </View>

            <View style={{width:widthPercentageToDP('10%'),justifyContent:'center',marginRight:widthPercentageToDP('2%')}}>

            {

            postloading ? 
            <ActivityIndicator size='small'color={Customclr.orangeshade0}  />
            :
            <Icon
            name="telegram"
            type="material-community"
            size={widthPercentageToDP('6%')}
            onPress={_postComment}/>
            }

               


            </View>
                </View>
        </KeyboardAvoidingView>
                


            


        </View>


        </>
    )
}

export default CommentScreen
export const PostCommentScreen = ({item,userid}) =>{


    const [isheart, setheart] = React.useState("heart-o");

    const _likeComment = (comment_id,comment_postid,userid) =>{

        setheart("heart");
      
        // axiosInstance.post('/heartlike_comment',{
        //     comment_id:comment_id,
        //     comment_postid:comment_postid,
        //     userid:userid,          
        //  }).then((res) =>{
        //     let newarr = res.data.result;
        //     if( res.data.status == 1){
        //         setheart("heart");
        //     }
        // })

       

    }



    return(
       <View style={{display:'flex'}}>


     <View style={{display:'flex',flexDirection:'row',margin:heightPercentageToDP('1%')}}>

            <View>
                <Avatar rounded title={item.id} source={{uri: item.profilepic ? item.profilepic : item.profilepic }} size={heightPercentageToDP('5%')}/>
            </View>

            <View style={{width:widthPercentageToDP('90%'),marginHorizontal:widthPercentageToDP('2%')}} >
                <Text style={{fontWeight:'700' , fontSize:widthPercentageToDP('4.2%') }} >{item.name}</Text>
                <Text 
                    style={{ fontSize:widthPercentageToDP('3.8%'),width:widthPercentageToDP('82%')}} >
                     {item.comment_text}
                </Text>
                    <View style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between',marginTop:heightPercentageToDP('2%')}}>
                        <Text style={{justifyContent:'flex-end',alignContent:'flex-end',fontSize:widthPercentageToDP('3.8%'),color:Customclr.gray}}> 20 Like </Text>
                        <Icon containerStyle={{justifyContent:'flex-end',alignSelf:'flex-end',paddingRight:widthPercentageToDP('8%')}} name={isheart} color="red" type="font-awesome" size={widthPercentageToDP('3.3%')} onPress={()=>_likeComment(item.comment_id,item.comment_postid,userid)} />
                   

                    </View>
            </View>
        </View>


        
    </View>


    )
}
const styles = StyleSheet.create({})
