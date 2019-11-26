import database from '@react-native-firebase/database';
import { SET_USER, SET_SETUP_COMPLETED, SET_USER_DATA, SET_ACTIVE_MENU, GET_USERS, SET_NEWPROJECT_TEAM, GET_INVITATIONS } from '../constants';

function setActiveMenu(activeElement) {
  return {
    type: SET_ACTIVE_MENU,
    payload: activeElement
  }
}

function getInvitations(invitations) {
  return {
    type: GET_INVITATIONS,
    payload: invitations
  }
}

function getUsers(users) {
  return {
    type: GET_USERS,
    payload: users
  }
}

const watchInvitations = (uid) => {
  return function (dispatch) {
    database().ref('users/' + uid + '/invitations')
    .on('value', function (snapshot) {
      var invitationsArray = [];
      snapshot.forEach(element => {
        invitationsArray.push({
          id: element.val().id,
          projectID: element.val().project_id,
          projectName: element.val().project_name,
          projectUser: element.val().project_user
        })
      });

      console.log(invitationsArray, "SABER ES INVITACIONES")
      var actionGetInvitations = getInvitations(invitationsArray);
      dispatch(actionGetInvitations)
    }, function (error) { console.log(error) });
  }
}

function deleteInvitation(deleteData) {
  return function (dispatch) {
    database().ref('users/' + deleteData.userID + '/invitations/' + deleteData.invitationID)
    .update(
      {
        id: null,
        project_id: null,
        project_name: null,
        project_user: null
      }
    )
    .then(() => {
      database().ref('users/' + deleteData.userID + '/invitations').on('value', function (snapshot) {
        var invitationsArray = [];
        snapshot.forEach(element => {
          invitationsArray.push({
            id: element.val().id,
            projectID: element.val().project_id,
            projectName: element.val().project_name,
            projectUser: element.val().project_user
          })
        });
  
        console.log(invitationsArray, "SABER ES INVITACIONES")
        var actionGetInvitations = getInvitations(invitationsArray);
        dispatch(actionGetInvitations)
      }, function (error) { console.log(error) });
    })
  }
}

function setNewProjectTeam(newProjectTeam) {
  return {
    type: SET_NEWPROJECT_TEAM,
    payload: newProjectTeam
  }
}

const watchUsers = () => {
  return function (dispatch) {
    database().ref('users').on('value', function (snapshot) {
      var usersArray = [];
      snapshot.forEach(element => {
        usersArray.push({
          name: element.val().name,
          id: element.val().uid
        })
      });

      console.log(usersArray, "SABER ES CONOCIMIENTO")
      var actionGetUsers = getUsers(usersArray);
      dispatch(actionGetUsers)
    }, function (error) { console.log(error) });
  }
}

function setSetupCompleted(isSetupCompleted) {
  return {
    type: SET_SETUP_COMPLETED,
    payload: isSetupCompleted,
  }
}

const watchSetupCompleted = (uid) => {
  return function (dispatch) {
    database().ref('users/' + uid).on('value', function (snapshot) {
      
      let isSetupCompleted = snapshot.val() && snapshot.val().setupCompleted

      console.log(isSetupCompleted,"WATCH FOR THE VAR ISSETUP COMPLETED")
      var actionSetSetupCompleted = setSetupCompleted(isSetupCompleted);
      dispatch(actionSetSetupCompleted)
    }, function (error) { console.log(error) });
  }
}

function uploadSetupCompleted(isSetupCompleted, uid) {
  return function (dispatch) {
    database().ref('users/' + uid).update(
      {
        setupCompleted: isSetupCompleted
      }
    ).then(() => {
      dispatch(setSetupCompleted(isSetupCompleted))
    }).catch((error) => {
      console.log(error)
    })
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
    database().ref('users/' + userData.uid).set(
      {
        name: userData.name,
        uid: userData.uid,
        setupCompleted: false
      }
    ).then(() => {
      dispatch(setUserData(userData))
    }).catch((error) => {
      console.log(error)
    })
  }
}

export { 
  setUser, 
  setSetupCompleted, 
  uploadUserData, 
  getUsers, 
  watchUsers, 
  setNewProjectTeam, 
  uploadSetupCompleted, 
  watchSetupCompleted, 
  watchInvitations,
  deleteInvitation
}