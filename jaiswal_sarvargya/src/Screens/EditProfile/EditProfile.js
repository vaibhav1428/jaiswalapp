import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native';
import { View, Text } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { DEFAULT_IMAGE_URI } from '../../Constants/general';
import { redirectAction } from '../../context/actions/authlogin';
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../Helper/axiosInstance';
import EditProfileHtml from './EditProfileHtml'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import firebase from "firebase/app";

const EditProfile = ({route}) => {
  const [form,setForm] =React.useState({});
  const [loading,Setloading] = React.useState(false);  
  const [error,setError] =React.useState({});
  const { phoneno,editdata } = route.params;
  
  const {authDispatch,authState:{isLoggedIn,data}} = useContext(GlobalContext);
  const navigation = useNavigation();  
  const [image, setImage] = React.useState(DEFAULT_IMAGE_URI);
  const [mycity, setmycity] = React.useState('');
  const [mystate, setmystate] = React.useState('');



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
              stateid:data.state_id,   
              cityid:data.city_id,  
              metrimonyshare:data.metrimonyshare,
              directoryshare:data.directoryshare ,
              work:data.work,
              gender:data.gender,
             });
             setImage(data.profilepic);
             setmycity(data.city);
             setmystate(data.state)
            }
                
          })
          } else {
        console.warn('something went wrong')
        }
      }, [])
  


      


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
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
          });          
          console.log(result);          
          if (!result.cancelled) {
              setImage(result.uri)
          }

       

      } 
      
      if(value == 2 ){
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
          });          
          console.log(result);          
          if (!result.cancelled) {
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


if(!form.gender){
  showMessage({
  message: "Please Enter Your gender",
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
if(!form.materialstatus){
  showMessage({
      message: "Please Enter Material-Status",
      type: "danger",
      icon: "danger",
      });
  return false;

}
if(!form.educationstatus){
  showMessage({
      message: "Please Enter Education-Status",
      type: "danger",
      icon: "danger",
      });
  return false;

}
if(!form.jobstatus){
  showMessage({
      message: "Please Enter Job-Status",
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
if(!form.directoryshare){
  showMessage({
      message: "please fill directory share",
      type: "danger",
      icon: "danger",
      });
  return false;

}
if(!form.metrimonyshare){
  showMessage({
      message: "please fill ametrimony share",
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


else{
 

  //  form.state == undefined ? alert('mystate') : alert('form.state')
  //   return false;

  if(form.profilepic  in form ) {

   
 
        const upladname =  Date.now() ; 
        const response = await fetch(image);
              const blob = await response.blob();
              var ref = firebase.storage().ref().child(`post/postimage/${upladname}`);
              ref.put(blob).then(()=>{
                ref.getDownloadURL().then((url)=>{
                      
            
                  const userdetails = {
                  profilepic:url,
                  name:form.name.trim(),
                  email:form.email.trim(),
                  age:form.age.trim(),
                  dob:form.dob.trim(),   
                  bloodgroup:form.bloodgroup.trim(),   
                  materialstatus:form.materialstatus.trim(),   
                  educationstatus:form.educationstatus.trim(),   
                  jobstatus:form.jobstatus.trim(),   
                  address:form.address.trim(),   
                  phoneno:phoneno.trim(), 
                  country:form.country.trim(),   
                  state:form.state == undefined ? form.stateid : form.state,   
                  city:form.city == undefined ? form.cityid : form.city ,
                  editdata:editdata,                  
                  metrimonyshare:form.metrimonyshare,
                  directoryshare:form.directoryshare,
                  work:form.work.trim(),
                  gender:form.gender,

              
                }    
                redirectAction(userdetails)(authDispatch);
                Setloading(false); 

                })
              });
              
              alert('Please restart app to see changes after data successfully enter');
      
  }
  
  else{   

    


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
        state:form.state == undefined ? form.stateid : form.state,   
        city:form.city == undefined ? form.cityid : form.city ,
        editdata:editdata,
        metrimonyshare:form.metrimonyshare,
        directoryshare:form.directoryshare,
        work:form.work,  
        gender:form.gender,  

    
      }    
      redirectAction(userdetails)(authDispatch);
      Setloading(false);
      
      alert('Please restart app to see changes after data successfully enter');

      


    
      
    }
    
}


}


    return (

        <>
          <EditProfileHtml 
          onchange ={onchange} 
          error={error} 
          isloading={loading} 
          onsubmit = {onsubmit} 
          form={form}
          imageupload={imageupload}
          image={image}
          phoneno={phoneno}
          mycity={mycity}
          mystate={mystate}
          />
        
   </>
    )



}
 
export default EditProfile

         

