import database from '@react-native-firebase/database';
import { SET_PROJECTS_DATA, SET_PROJECT_NAME, GET_CURRENT_PROJECT, GET_CURRENT_PROJECTID } from '../constants';

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
  }
}


const watchCurrentProject = (projectId) => {
  return function (dispatch) {
    database().ref('projects/'+projectId).once('value', function (snapshot) {
      
      let projectData = {
        name: snapshot.val().name,
        id: snapshot.val().id,
      }

      var actionGetProjectData = getCurrentProject(projectData);
      dispatch(actionGetProjectData)
    }, function (error) { console.log(error) });
  } 
}

const uploadProjectData = (projectData, user) => {
  return function (dispatch) {

    var newProjectKey = database().ref().child('projects').push().key;
    
    database()
    .ref( 'projects/' + newProjectKey )
    .set (
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
        .ref('user/' + member + '/invitations/' + newInvitationKey )
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


export { 
  uploadProjectData, 
  watchProjects, 
  setProjectName,
  addProject,
  watchCurrentProject,
  getCurrentProject,
}