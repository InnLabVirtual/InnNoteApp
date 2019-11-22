import database from '@react-native-firebase/database';
import { SET_USER } from '../constants';

function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}

export { setUser }