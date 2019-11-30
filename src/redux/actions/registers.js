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

        database().ref('projects/' + postitData.currentProjectId + '/users/' + postitData.autor + '/connected')
        .once('value', function (snapshot) {
            
            var newPostItKey = database().ref('projects/' + postitData.currentProjectId).child('posts').push().key;

            database().ref('projects/' + postitData.currentProjectId + '/posts').child(newPostItKey).set(
                {
                    data: postitData.text,
                    id: newPostItKey,
                    autor: postitData.autor,
                    color: postitData.color,
                    rot: '0/0/0',
                    pos: '0/0/0',
                    type: snapshot.val() ? 'vr' : 'in'
                }).then(() => {
                    dispatch(uploadText)
                }).catch((error) => {
                    dispatch(uploadTextError(error))
                });

        }, function (error) {
            console.log(error)
        });


    }
}




export { uploadTextRegister }