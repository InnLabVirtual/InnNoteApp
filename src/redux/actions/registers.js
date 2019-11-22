import database from '@react-native-firebase/database';
import { UPLOAD_TEXT, UPLOAD_TEXT_ERROR } from '../constants';

function uploadText() {
    return {
        type: UPLOAD_TEXT
    }
}

function uploadTextError(error) {
    return {
        type: UPLOAD_TEXT_ERROR,
        payload: error,
    }
}

const uploadTextRegister = (postitData) => {
    return function (dispatch) {
        database().ref().child('posts').push(
        {
            data: postitData.text,
            autor: 'autor',
            color: postitData.color
        }).then(() => {
            dispatch(uploadText)
        }).catch( (error) => {
            dispatch(uploadTextError(error))
        });
    }
}

function setUser(user) {
    return {
        type: USER,
        payload: user,
    }
}

const setUserData = (user) => {
    return function (dispatch) {
        var actionSetUserData = setUser(user);
        dispatch(actionSetUserData);
    }
}


export { uploadTextRegister, setUserData }