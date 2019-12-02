import database from '@react-native-firebase/database';
import { SET_PROJECTS_DATA, SET_PROJECT_NAME, GET_CURRENT_PROJECT, GET_CURRENT_PROJECTID, GET_CURRENT_PROJECT_USERS } from '../constants';

function setProjectName(projectName) {
  return {
    type: SET_PROJECT_NAME,
    payload: projectName
  }
}

function setProjectsData(projectsData) {
  return {
    type: SET_PROJECTS_DATA,
    payload: projectsData,
  }
}

function getCurrentProject(projectData) {
  return {
    type: GET_CURRENT_PROJECT,
    payload: projectData,
  }
}



const addProject = (projectData, user) => {
  return function (dispatch) {
    database()
      .ref('user/' + user.id + '/projects/' + projectData.projectID)
      .set(
        {
          name: projectData.projectName,
          id: projectData.projectID
        }
      )
      .then(() => {
        database()
          .ref('projects/' + projectData.projectID + '/users/' + user.id)
          .set(
            {
              connected: false,
              name: user.name,
              uid: user.id,
              pos: '0/0/0',
              pointer: false,
              pointer_pos: '0/0/0'
            }
          )
      })
  }
}


const watchCurrentProject = (projectId) => {
  return function (dispatch) {
    database().ref('projects/' + projectId)
    .once('value', function (snapshot) {

      let projectData = {
        name: snapshot.val().name,
        id: snapshot.val().id,
      }

      var actionGetProjectData = getCurrentProject(projectData);
      dispatch(actionGetProjectData)
    }, function (error) { console.log(error) })
    .then(
      database().ref('projects/' + projectId + '/users').once('value', function (snapshot) {
        var projectUsersData = [];
        snapshot.forEach(element => {
          projectUsersData.push({
            name: element.val().name,
            id: element.val().uid
          })
        });
  
        var actionSetUserProjectsData = getCurrentProjectUsers(projectUsersData);
        dispatch(actionSetUserProjectsData)
      }, function (error) { console.log(error) })

    );
  }
}


const sendInvitations = (currentProject, uid, autorName) => {
  return function (dispatch) {
    var newInvitationKey = database().ref('user/' + uid).child('invitations').push().key;

    //console.log('THE KEEEEEEEEEEEEEY __________________', newInvitationKey);
    //console.log('THE AUTOOOR __________________', autorName);
    console.log('THE UID __________________', uid);

    database()
      .ref('user/' + uid + '/invitations/' + newInvitationKey)
      .set(
        {
          project_user: autorName,
          project_name: currentProject.name,
          project_id: currentProject.id,
          id: newInvitationKey
        }
      )
  }
}

const uploadProjectData = (projectData, user) => {
  return function (dispatch) {

    var newProjectKey = database().ref().child('projects').push().key;

    database()
      .ref('projects/' + newProjectKey)
      .set(
        {
          name: projectData.projectName,
          id: newProjectKey
        }
      )
      .then(() => {
        database()
          .ref('projects/' + newProjectKey + '/users/' + user.uid)
          .set({
            connected: false,
            name: user.name,
            uid: user.uid,
            pos: '0/0/0',
            pointer: false,
            pointer_pos: '0/0/0'
          })
      })
      .then(() => {
        database()
          .ref('user/' + user.uid + '/projects/' + newProjectKey)
          .set(
            {
              name: projectData.projectName,
              id: newProjectKey
            }
          )
      })
      .then(() => {
        projectData.teamMembers.forEach(member => {
          var newInvitationKey = database().ref('user/' + member).child('invitations').push().key;

          database()
            .ref('user/' + member + '/invitations/' + newInvitationKey)
            .set(
              {
                project_user: user.name,
                project_name: projectData.projectName,
                project_id: newProjectKey,
                id: newInvitationKey
              })
        })
      })

  }
}
const watchProjects = (uid) => {
  return function (dispatch) {
    database().ref('user/' + uid + '/projects').on('value', function (snapshot) {
      var projectsDataArray = [];
      snapshot.forEach(element => {
        projectsDataArray.push({
          name: element.val().name,
          id: element.val().id
        })
      });

      var projectsData = projectsDataArray;

      var actionSetProjectsData = setProjectsData(projectsData);
      dispatch(actionSetProjectsData)
    }, function (error) { console.log(error) });
  }
};

function getCurrentProjectUsers(projectUserData) {
  return {
    type: GET_CURRENT_PROJECT_USERS,
    payload: projectUserData,
  }
}

const watchCurrentProjectUsers = (projectID) => {
  return function (dispatch) {
    database().ref('projects/' + projectID + '/users').once('value', function (snapshot) {
      var projectUsersData = [];
      snapshot.forEach(element => {
        projectUsersData.push({
          name: element.val().name,
          id: element.val().uid
        })
      });

      var actionSetUserProjectsData = getCurrentProjectUsers(projectUsersData);
      dispatch(actionSetUserProjectsData)
    }, function (error) { console.log(error) });
  }
}

export {
  uploadProjectData,
  watchProjects,
  setProjectName,
  addProject,
  watchCurrentProject,
  getCurrentProject,
  watchCurrentProjectUsers,
  sendInvitations
}