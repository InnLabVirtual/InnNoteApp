import { SET_USER, SET_SETUP_COMPLETED, SET_USER_DATA, SET_ACTIVE_MENU, VOICE_MAINICON, TEXT_MAINICON } from '../constants';

const initialState = {
    user: '',
    isSetupCompleted: false,
    userData: null,
    activeElement: TEXT_MAINICON
};

const setUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
              ...state,
              user: action.payload
            }
        case SET_SETUP_COMPLETED:
            return {
                ...state,
                isSetupCompleted: !state.isSetupCompleted
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case SET_ACTIVE_MENU:
            return {
                ...state,
                activeElement: action.payload
            }
        default:
            return state;
    }
}

export default setUserReducer;