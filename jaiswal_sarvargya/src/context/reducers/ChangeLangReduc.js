import { LANG_ERROR, LANG_LOADING, LANG_SUCCESS } from "../actionTypes";

const ChangeLangreducer = (state, {
    type,
    payload
}) => {

    switch (type) {
        case LANG_LOADING:
            return {
                ...state, langloading: true
            };
            
        case LANG_SUCCESS:
            return {
                ...state, langloading: false,mylang:payload
            };

        case LANG_ERROR:
            return {
                ...state, langloading: false,mylang:payload,
            }


        default:
            return state;
    }

}


export default ChangeLangreducer;