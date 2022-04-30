import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_AUTH_STATE, LOGOUT_USER } from '../actionTypes';

export default () => (dispatch) => {

  AsyncStorage.removeItem('users');  
  dispatch({
    type: LOGOUT_USER,
  });
  dispatch({
    type:CLEAR_AUTH_STATE,
})
};
