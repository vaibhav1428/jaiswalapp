
import React, { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import {LANG_LOADING, LANG_SUCCESS } from '../actionTypes';



export const ChangeLangAction  =  (lang) => dispatch => { 
    dispatch({
                type:LANG_LOADING
    });

    AsyncStorage.setItem('crrtlanguage', JSON.stringify(lang))  ;  

    dispatch({
        type:LANG_SUCCESS,
        payload:lang
    });


}
