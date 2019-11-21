import { UPLOAD_TEXT } from '../constants';

const initialState = {
    
};

const textRegisterReducer = (state = initialState, action) => {
    switch(action.type) {
    case UPLOAD_TEXT:
        //alert(action.payload);    
        return state;
    case 'UPLOAD_TEXT_ERROR':
        alert('uploading text error', action.error)
        return state;
    default:
        return state;
    }
}

export default textRegisterReducer;