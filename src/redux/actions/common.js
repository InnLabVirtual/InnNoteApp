import database from '@react-native-firebase/database';
import { SET_USER, SET_SETUP_COMPLETED, SET_USER_DATA } from '../constants';

function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}

function setSetupCompleted(isSetupCompleted) {
    return {
        type: SET_SETUP_COMPLETED,
        payload: isSetupCompleted,
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