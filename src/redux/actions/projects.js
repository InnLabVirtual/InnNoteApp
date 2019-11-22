import database from '@react-native-firebase/database';
import { SET_PROJECTS_DATA } from '../constants';


function setProjectsData(projectsData) {
  return {
    type: SET_PROJECTS_DATA,
    payload: projectsData,
  }
}


const uploadProjectData = (projectData, uid, name) => {
  return function (dispatch) {

    var newProjectKey = database().ref().child('projectus').push().key;
    
    database().ref( 'projectus/' + newProjectKey ).set (
      { name: projectData.name, id: newProjectKey }
    ).then (() => {
      database().ref('users/' + uid + '/projects/' + newProjectKey).set({ name: projectData.name, id: projectData.id })
    }).then (() => {
      database().ref('projectus/' + newProjectKey + '/users/' + uid).set({ connected: false, name: name, uid: uid })
    })
    
  }
}

const watchProjects = (uid) => {
  return function (dispatch) {
    database().ref('users/' + uid + '/projects').on('value', function (snapshot) {
      var projectsDataArray = [];
      snapshot.forEach(element => {
        projectsDataArray.push({
          name: element.val().name,
          id: element.val().id
        })
      });

      var projectsData = projectsDataArray;
      console.log(projectsData, "SABER ES PODER")
      var actionSetProjectsData = setProjectsData(projectsData);
      dispatch(actionSetProjectsData)
    }, function (error) { console.log(error) });
  }
};


export { uploadProjectData, watchProjects }