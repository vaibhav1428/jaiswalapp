// import storage from '@react-native-firebase/storage';
import firebase from "firebase/app";

export const uploadImage =    async(file,uploadpath) => async(onSuccess)  => {
    const upladname =  Date.now() ; 
    const response = await fetch(file);
          const blob = await response.blob();
          var ref = firebase.storage().ref().child(`${uploadpath}/${upladname}`);
          ref.put(blob).then(()=>{
            ref.getDownloadURL().then((url)=>{
                onSuccess(url)
    
            })
        })
};













