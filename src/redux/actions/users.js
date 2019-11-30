import { REGISTER_USER, REGISTER_USER_ERROR, LOGOUT, LOGIN_USER, LOGIN_USER_ERROR } from '../constants';

import auth from '@react-native-firebase/auth';

function registerUser() {
    return {
        type: REGISTER_USER
    }
}
function registerUserError(error) {
    return {
        type: REGISTER_USER_ERROR,
        payload: error
    }
}

function loginUser() {
    return {
        type: LOGIN_USER
    }
}
function loginUserError(error) {
    return {
        type: LOGIN_USER_ERROR,
        payload: error
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

const loginUserData = (userData) => {
    return function (dispatch) {
        auth().signInWithEmailAndPassword(userData.email, userData.password)
        .then(() => {
            dispatch(loginUser);
        }).catch ((error) => {
            alert(error)
            dispatch(loginUserError(error))
        }) 
    }
}

const registerUserData = (userData) => {
    return function (dispatch) {
        auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then(() => {
            dispatch(registerUser)
        }).catch ((error) => {
            alert(error)
            dispatch(registerUserError(error))
        }) 
    }
}

const logoutUserData = () => {
    return function (dispatch) {
        auth().signOut().then(() => {
           dispatch(logout)
        });
    }
} 

export { registerUserData, logoutUserData, loginUserData }