import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_USER, USER_FAIL, USER_LOADING, USER_SUCCESS } from "../actionTypes";

const userreduc = (state, {
    type,
    payload
}) => {

    switch (type) {
        case USER_LOADING:
            return {
                ...state, loading:true
            };
            
        case USER_SUCCESS:
            return {
                ...state, loading: false,data:payload
            };

        case USER_FAIL:
            return {
                ...state, loading: false,data:payload,
            }


        default:
            return state;
    }

}


export default userreduc;