import { UPLOAD_TEXT, UPLOAD_TEXT_ERROR, USER } from '../constants';

const initialState = {
};

const textRegisterReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPLOAD_TEXT:
            return state;
        case UPLOAD_TEXT_ERROR:
            return state;
        default:
            return state;
    }
}

export default textRegisterReducer;