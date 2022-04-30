import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native';
import { View, Text } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { DEFAULT_IMAGE_URI } from '../../Constants/general';
import { redirectAction } from '../../context/actions/authlogin';
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../Helper/axiosInstance';
import PreprofileHtml from './PreprofileHtml'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import firebase from "firebase/app";
import { Camera } from 'expo-camera';

const PreProfile = ({route}) => {
  const [form,setForm] =React.useState({});
  const [loading,Setloading] = React.useState(false);  
  const [error,setError] =React.useState({});
  const { phoneno,editdata } = route.params;
  const {authDispatch,authState:{isLoggedIn,data}} = useContext(GlobalContext);
  const navigation = useNavigation();  
  const [image, setImage] = React.useState(DEFAULT_IMAGE_URI);





  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
                  alert('Sorry, we need camera permissions! from piker');
                }
    })();
  }, []);


    React.useEffect(() => {
    (async () => {
        const { status } = await ImagePicker.getCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera  permissions ! from camera');
        }
    })();
  }, []);





  React.useEffect(() => {
    
    if (phoneno) {
      axiosInstance.post('/userdata',{
        phone:phoneno,
          }).then((res) =>{
            if(res.data.status==1){
              const data= res.data.result[0];
              setForm({
              name:data.name,
              email:data.email,
              age:data.age,
              dob:data.dob,   
              address:data.address,   
              bloodgroup:data.bloodgroup,   
              materialstatus:data.materialstatus,   
              educationstatus:data.educationlevel,   
              jobstatus:data.jobstatus,   
              country:"8",      
              metrimonyshare:data.metrimonyshare,
              directoryshare:data.directoryshare,
              work:data.work,
              gender:data.gender,
              

             });
             setImage(data.profilepic);
            }
                
          })
          } else {
        console.warn('something went wrong')
        }
      }, [])
  


        React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        const action = e.data.action;
           e.preventDefault();

        Alert.alert(
          'Discard ?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Exit',
              style: 'destructive',
              onPress: () => BackHandler.exitApp(),
            },
          ]
        );
      }),
    [navigation]
  );


  const onchange = ({name,value}) =>{
    setForm({...form,[name]:value});
    
      if(value !== ''){
      setError(prev=>{
            return {...prev,[name]:""}
        })

    }
    else{
        setError(prev=>{   return {...prev,[name]:'this field is required'} });
    }
     }



     const imageupload = async(value) =>  {
      if(value == 1 ){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.1,
          });          
          console.log(result);          
          if (!result.cancelled) {
            
            onchange({name:"profilepic",value:result.uri});
              setImage(result.uri)
          }

       

      } 
      
      if(value == 2 ){
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.1,
          });          
          console.log(result);          
          if (!result.cancelled) {
            onchange({name:"profilepic",value:result.uri});            
              setImage(result.uri)          
          }
          
      }
     

  } 






const  onsubmit= async() =>{

 if(!form.name){
  showMessage({
  message: "Please Enter Name",
  type: "danger",
  icon: "danger",
  });
return false;
}
if(!form.age){
  showMessage({
      message: "Please Enter Age",
      type: "danger",
      icon: "danger",
      });
  return false;

}
if(!form.bloodgroup){
  showMessage({
      message: "Please Enter Blood-Group ",
      type: "danger",
      icon: "danger",
      });
  return false;

}

if(!form.address){
  showMessage({
      message: "Please Enter Address",
      type: "danger",
      icon: "danger",
      });
  return false;

}

if(!form.state){
  showMessage({
      message: "please fill State",
      type: "danger",
      icon: "danger",
      });
  return false;

}

if(!form.city){
  showMessage({
      message: "please fill City",
      type: "danger",
      icon: "danger",
      });
  return false;

}



if(!form.dob){
  showMessage({
      message: "Please Enter Date-Of-Birth",
      type: "danger",
      icon: "danger",
      });
  return false;

}

if(!form.gender){
  showMessage({
      message: "gender is menditory",
      type: "danger",
      icon: "danger",
      });
  return false;

}



else{

  Setloading(true)

  if(form.profilepic == undefined) {

    const userdetails = {
      profilepic:image,
      name:form.name,
      email:form.email,
      age:form.age,
      dob:form.dob,   
      bloodgroup:form.bloodgroup,   
      materialstatus:form.materialstatus,   
      educationstatus:form.educationstatus,   
      jobstatus:form.jobstatus,   
      address:form.address,   
      phoneno:phoneno, 
      country:form.country,   
      state:form.state,   
      city:form.city,
      editdata:editdata,
      metrimonyshare:form.metrimonyshare,
      directoryshare:form.directoryshare,
      work:form.work,
      gender:form.gender,
  
    }    
    redirectAction(userdetails)(authDispatch);

  
 
        
              
      
  }
  else{ 

    const upladname =  Date.now() ; 
        const response = await fetch(image);
              const blob = await response.blob();
              var ref = firebase.storage().ref().child(`post/postimage/${upladname}`);
              ref.put(blob).then(()=>{
                ref.getDownloadURL().then((url)=>{
                      
            
                  const userdetails = {
                  profilepic:url,
                  name:form.name,
                  email:form.email,
                  age:form.age,
                  dob:form.dob,   
                  bloodgroup:form.bloodgroup,   
                  materialstatus:form.materialstatus,   
                  educationstatus:form.educationstatus,   
                  jobstatus:form.jobstatus,   
                  address:form.address,   
                  phoneno:phoneno, 
                  country:form.country,   
                  state:form.state,   
                  city:form.city,
                  editdata:editdata,                  
                  metrimonyshare:form.metrimonyshare,
                  directoryshare:form.directoryshare,
                  work:form.work,
                  gender:form.gender,

              
                }    
                redirectAction(userdetails)(authDispatch);
                })
              });  

   
      
    }
    
}


}


    return (

        <>
          <PreprofileHtml 
          onchange ={onchange} 
          error={error} 
          isloading={loading} 
          onsubmit = {onsubmit} 
          form={form}
          imageupload={imageupload}
          image={image}
          />
        
   </>
    )



}
 
export default PreProfile

         
