
import React, { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import axiosInstance from "../../Helper/axiosInstance";
import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from '../actionTypes';


let confirm = {};


export const clearauthState =() => dispatch =>{
    dispatch({
        type:CLEAR_AUTH_STATE,
    })

}


export const redirectAction  =  ({name,gender,phoneno, profilepic, email,dob,age,bloodgroup,materialstatus,educationstatus,jobstatus,address, country,state, city,metrimonyshare,directoryshare,editdata,work}) => dispatch => {
   
   
   
    dispatch({
        type:LOGIN_LOADING
    });

     axiosInstance.post('/PreProfile',{ name,
         phoneno,
         profilepic, 
         email,
         dob,
         age,
         bloodgroup,
         materialstatus,
         educationstatus,
         jobstatus,
         address,
         country,
         state,
         city,
         metrimonyshare,
         directoryshare,
         work,
         gender
    })
     
     .then((res) =>{    
        let  data = res.data;    


            if(data.status == 1){

                if(editdata == 1){
                    AsyncStorage.setItem('users', JSON.stringify(data))  ;                
                    dispatch({
                        type:LOGIN_SUCCESS,
                        payload:data,
                    });   

                }  
                
                showMessage({
                    message: res.data.message,
                    type: "success",
                    icon: "success",
                  }); 
             }

             if(data.status == 0){
                 
                dispatch({
                    type:LOGIN_FAIL,
                    payload: res.data,
                }) ;

                showMessage({
                    message: res.data.message,
                    type: "danger",
                    icon: "danger",
                  });
             }
             
             
            
        })
}
