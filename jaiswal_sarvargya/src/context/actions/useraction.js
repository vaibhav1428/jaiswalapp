
import React, { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import axiosInstance from "../../Helper/axiosInstance";
import {USER_FAIL, USER_LOADING, USER_SUCCESS } from '../actionTypes';


export const UserAction  =  ({id}) => dispatch => {
    dispatch({
        type:USER_LOADING
    });
    
     axiosInstance.post('/UserDetails',{ id
    })
     
     .then((res) =>{    
        let  data = res.data;   
            if(data.status == 1){                        
                dispatch({
                    type:USER_SUCCESS,
                    payload:data.result[0],
                });
                showMessage({
                    message: res.data.message,
                    type: "success",
                    icon: "success",
                  }); 
             }

             if(data.status == 0){                 
                dispatch({
                    type:USER_FAIL,
                    payload: data.result,
                }) ;

                showMessage({
                    message: res.data.message,
                    type: "danger",
                    icon: "danger",
                  });
             }
             
             
            
        })
}
