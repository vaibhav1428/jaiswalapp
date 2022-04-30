import React from 'react'
import { ActivityIndicator, FlatList, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Icon } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Customclr from '../../assets/theme/Customclr';
import axiosInstance from '../../Helper/axiosInstance';
import firebase from "firebase/app";


const Personalmsg = ({route}) => {

    const [input, setinput] = React.useState("");
    const [ischatid, setchatid] = React.useState("");
    const [ischatidexit, setchatidexit] = React.useState("");
    const [issendload, setsendload] = React.useState(false);
    const [iapageloading, setpageloading] = React.useState(false);
    const [isdatalist, setdatalist] = React.useState([]);
    const {isuser,idt,chatname,logo,userpic} = route.params;
    const navigation = useNavigation();

 
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title:chatname,
            headerTitleAlign:'left',
            headerTitle:()=>(
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Avatar  rounded source={{uri:logo}}/>

                  <Text style={{fontSize:heightPercentageToDP('2.%'),color:Customclr.light,fontWeight:'700'}}>
                       {"  " + chatname.toUpperCase()}
                    </Text>

              </View>  
            )
        })
    }, [navigation])


 

    React.useLayoutEffect(() => {  
  
           getallmsg()
     
    }, [route])


    const getallmsg =()=>{
        setpageloading(true)
        
        axiosInstance.post('/get_Allmsg',{
            sender:isuser,
            reciver:idt
         }).then((res) =>{
            if(res.data.status == 1) { 

                setchatidexit(true);
                setchatid(res.data.result[0].chatid);
                const db = firebase.firestore();
                const unsubscribe =  
                                db.collection('chats')
                                .doc(res.data.result[0].chatid)
                                .collection("message").orderBy('timestamp','asc')
                                .onSnapshot( snapshot => {
                                    setpageloading(false);
                                    setdatalist( snapshot.docs.map(doc=>({
                                    id:doc.id,
                                    alldata:doc.data() 
                                    })))
                    })



                   

            }
            if(res.data.status == 0) { 
                setpageloading(false);

            }


         

                   
         }) 

    }


    const sendmsg = () =>{


        if(ischatidexit == true){ 
        setsendload(true);
        Keyboard.dismiss(); 
        if(ischatid !== " "){
            const db = firebase.firestore();
           
            db.collection('chats')
              .doc(ischatid)
              .collection("message")
              .add({
               sender:isuser,
               reciver:idt,
               message:input,
               timestamp:firebase.firestore.FieldValue.serverTimestamp(),               
              });


              axiosInstance.post('/msg_notification',{
                reciver:idt,
                msg:input,
             }).then(res=>{
                 console.log("sended");
             })
        }
    }

    if(ischatidexit == false){


        axiosInstance.post('/createchatid',{
            sender:isuser,
            reciver:idt
         }).then((res) =>{
            if(res.data.status == 1) { 
                setchatidexit(true);
                setchatid(res.data.result[0].chatid);

                if(ischatid !== " "){

                    const db = firebase.firestore();
                   
                    db.collection('chats')
                      .doc(res.data.result[0].chatid)
                      .collection("message")
                      .add({
                       sender:isuser,
                       reciver:idt,
                       message:input,
                       timestamp:firebase.firestore.FieldValue.serverTimestamp(),               
                      });
        
        
                      axiosInstance.post('/msg_notification',{
                        reciver:idt,
                        msg:input,
                     }).then(res=>{
                        getallmsg();
                     })
                }

            }


          
         }) 

        


    }
        setinput("");
        setsendload(false)


        

    }







    const renderItem = ( {item} ) => (  
        <AllChates item={item} isuser={isuser} logo={logo} userpic={userpic}  />
  );  



    return (
        <>
    {
        iapageloading ?  
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                     <ActivityIndicator color={Customclr.orangeshade0} size='large' style={{justifyContent:'center',alignSelf:'center'}} />
            </View>
        
        
        
        :
        
        <SafeAreaView style={{flex:1,backgroundColor:Customclr.light}}>
           <StatusBar  style="light"/>
           <KeyboardAvoidingView
           behavior={Platform.OS === "ios" ? "padding" : null}
           style={styles.container}
           keyboardVerticalOffset={90}
           >

               <TouchableWithoutFeedback>
               <>




                   <FlatList
                   data={isdatalist}
                   renderItem={renderItem}
                   keyExtractor={item => item.id}
                   initialNumToRender={4}
                   maxToRenderPerBatch={4}
                   onEndReachedThreshold={0.1}
                   getItemLayout={(data, index) => (
                   {length: 70, offset: 70 * index, index}
                   )}
               />                  

             
               <View style={styles.footer}>
                   <TextInput 
                     placeholder="Write Something At here" 
                     style={styles.textinput}
                     onChangeText={(val)=>{setinput(val)}}
                     onSubmitEditing={sendmsg}
                     value={ input }
                    />


                    {
                        issendload ?
                        <ActivityIndicator color={Customclr.orangeshade0} size='small' />                        
                        :
                        <TouchableOpacity activeOpacity={0.5}  onPress={sendmsg}>

                            <Icon reverse name="send" type="ionicon" size={widthPercentageToDP('3.7%')} color={Customclr.orangeshade3}   />

                        </TouchableOpacity>

                    }         

                  
               </View>
               </>

               </TouchableWithoutFeedback>

           </KeyboardAvoidingView>


       </SafeAreaView>

    }


</>

       
    ) 
}

export default Personalmsg



const AllChates = ({item,logo,isuser,userpic}) => {
    return (
        <>
           {  
           
              item.alldata.sender == isuser ?
            <View key={item.id} style={styles.sender}>
                <Text style={styles.senderText}> {item.alldata.message }</Text>
            <Avatar containerStyle={{marginLeft:widthPercentageToDP('1%')}} rounded source={{uri:userpic}}/>
            </View>
                
            
            :
            <View style={styles.reciver}>
            <Avatar  containerStyle={{marginRight:widthPercentageToDP('1%')}} rounded source={{uri:logo}}/>
            <Text style={styles.reciverText}> {item.alldata.message}</Text>
            </View>
           
            }
        </>


       
  
    )
}






const styles = StyleSheet.create({
    container:{
        flex:1
        
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        width:widthPercentageToDP('100%'),
        padding:widthPercentageToDP('3.7%')
    },
    textinput:{ 
        bottom:0,
        height:heightPercentageToDP('7%'),
        flex:1,
        marginRight:widthPercentageToDP('2%'),
        borderColor:'transparent',
        backgroundColor:"#ECECEC",
        padding:widthPercentageToDP('4%'),
        color:Customclr.danger,
        borderRadius:30

    },
    reciverText:{

    },
    senderText:{

    },
    reciver:{
        padding:10,
        backgroundColor:Customclr.orangeshade0,
        alignSelf:'flex-start',
        borderRadius:20,
        marginRight:15,
        marginBottom:20,
        maxWidth:widthPercentageToDP('80%'),
        position:'relative',
        flexDirection:'row',
        alignItems:'center'

    },

    sender:{
        padding:10,
    
          backgroundColor:"#ECECEC",
        // backgroundColor:"#2B68E6",
        alignSelf:'flex-end',
        borderRadius:20,
        marginRight:15,
        marginBottom:20,
        maxWidth:widthPercentageToDP('80%'),
        position:'relative',
        flexDirection:'row',
        alignItems:'center'


    }

    
})
