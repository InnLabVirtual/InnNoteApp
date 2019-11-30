import { SET_USER, SET_SETUP_COMPLETED, SET_USER_DATA, SET_ACTIVE_MENU, VOICE_MAINICON, TEXT_MAINICON, GET_USERS, SET_NEWPROJECT_TEAM, GET_INVITATIONS, SET_ISCONNECTED, CURRENT_PHASE } from '../constants';

const initialState = {
    user: '',
    users: [],
    isSetupCompleted: true,
    userData: null,
    activeElement: TEXT_MAINICON,
    newProjectTeam: [],
    invitations: [],
    isConnected: false,
    currentPhase: '1',
};

const setUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case CURRENT_PHASE:
            return {
                ...state,
                currentPhase: action.payload
            }
        case SET_ISCONNECTED:
            return {
                ...state,
                isConnected: action.payload
            }
        case SET_NEWPROJECT_TEAM: 
            return {
                ...state,
                newProjectTeam: action.payload
            }
        case GET_INVITATIONS: 
            return {
                ...state,
                invitations: action.payload
            }
        case GET_USERS: 
            return {
                ...state,
                users: action.payload
            }
        case SET_USER:
            return {
              ...state,
              user: action.payload
            }
        case SET_SETUP_COMPLETED:
            return {
                ...state,
                isSetupCompleted: action.payload
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