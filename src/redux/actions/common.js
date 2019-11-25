import database from '@react-native-firebase/database';
import { SET_USER, SET_SETUP_COMPLETED, SET_USER_DATA, SET_ACTIVE_MENU } from '../constants';

function setActiveMenu(activeElement) {
    return {
        type: SET_ACTIVE_MENU,
        payload: activeElement
    }
}

function setSetupCompleted(isSetupCompleted) {
    return {
        type: SET_SETUP_COMPLETED,
        payload: isSetupCompleted,
    }
}


function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}

function setUserData(userData) {
    return {
        type: SET_USER_DATA,
        payload: userData,
    }
}

const uploadUserData = (userData) => {
    return function (dispatch) {
        database().ref('users/'+userData.uid).set(
            {
                name: userData.name,
                uid: userData.uid
            }
        ).then(() => {
            dispatch(setUserData(userData))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export { setUser, setSetupCompleted, uploadUserData }