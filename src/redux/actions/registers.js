import database from '@react-native-firebase/database';
import { UPLOAD_TEXT } from '../constants';

function uploadText(postitData) {
    return {
        type: UPLOAD_TEXT,
        payload: postitData
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
            
            var actionuploadText = uploadText(postitData)
            dispatch(actionuploadText)
    
        }).catch( (error) => {
            dispatch({ type: 'UPLOAD_TEXT_ERROR', error })
    
        });
    }
}



export { uploadTextRegister }