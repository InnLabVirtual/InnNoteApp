import { USER_CREATE } from '../constants';
import database from '@react-native-firebase/database';

function createUser(userData) {
    return {
        type: USER_CREATE,
        payload: userData
    }
}

const watchUserData = () => {
    return function(dispatch) {
        database().ref("user").on("value", function(snapshot)
      { 
          var userData = snapshot.val();
          var actionSetUserData = createUser(userData);
          dispatch(actionSetUserData);
          //alert(userData.name)
      }, function(error) { alert(error); });
    }
};


export { createUser, watchUserData }