import { SET_USER } from '../constants';

const initialState = {
    user: ''
};

const setUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
              ...state,
              user: action.payload
            }
        default:
            return state;
    }
}

export default setUserReducer;