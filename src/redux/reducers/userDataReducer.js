import { REGISTER_USER, REGISTER_USER_ERROR, LOGOUT, LOGIN_USER, LOGIN_USER_ERROR } from '../constants';

const initialState = {
};

const userDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return state;
        case REGISTER_USER_ERROR:
            alert('registering user error', action.error)
            return state;
        case LOGIN_USER:
            return state;
        case LOGIN_USER_ERROR:
            alert('registering user error', action.error)
            return state;
        case LOGOUT:
            return state;
        default:
            return state;
    }
}

export default userDataReducer;