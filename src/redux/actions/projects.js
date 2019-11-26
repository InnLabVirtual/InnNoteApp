import database from '@react-native-firebase/database';
import { SET_PROJECTS_DATA, SET_PROJECT_NAME } from '../constants';

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
const addProject = (projectData, user) => {
  return function (dispatch) {
    database()
      .ref('users/' + user.id + '/projects/' + projectData.projectID)
      .set(
        {
          name: projectData.projectName,
          id: projectData.projectID
        }
      )
  }
}


const uploadProjectData = (projectData, user) => {
  return function (dispatch) {

    var newProjectKey = database().ref().child('projectus').push().key;
    
    database()
    .ref( 'projectus/' + newProjectKey )
    .set (
      { 
        name: projectData.projectName, 
        id: newProjectKey 
      }
    )
    .then(() => {
      database()
      .ref('projectus/' + newProjectKey + '/users/' + user.uid)
      .set({ 
        connected: false, 
        name: user.name, 
        uid: user.uid,
        pos: '0/0/0'
      })
    })
    .then(() => {
      database()
      .ref('users/' + user.uid + '/projects/' + newProjectKey)
      .set(
        {
          name: projectData.projectName,
          id: newProjectKey
        }
      )
    })
    .then(() => {
      projectData.teamMembers.forEach(member => {
        var newInvitationKey = database().ref('users/' + member).child('invitations').push().key;

        database()
        .ref('users/' + member + '/invitations/' + newInvitationKey )
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
/*
        database()
        .ref('projectus/' + newProjectKey + '/users/' + member)
        .set({
          connected: false,
          pos: '0/0/0',
          name: member,
          uid: member
        })
*/
const watchProjects = (uid) => {
  return function (dispatch) {
    database().ref('users/' + uid + '/projects').on('value', function (snapshot) {
      var projectsDataArray = [];
      snapshot.forEach(element => {
        projectsDataArray.push({
          name: element.val().name,
          id: element.val().id,
          team: element.val().users
        })
      });

      var projectsData = projectsDataArray;
      console.log(projectsData, "SABER ES PODER")
      var actionSetProjectsData = setProjectsData(projectsData);
      dispatch(actionSetProjectsData)
    }, function (error) { console.log(error) });
  }
};


export { 
  uploadProjectData, 
  watchProjects, 
  setProjectName,
  addProject 
}