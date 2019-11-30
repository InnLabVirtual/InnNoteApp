/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  AsyncStorage
} from 'react-native'

import auth from '@react-native-firebase/auth';

import global from './../../styles/common.style'
import theme from './../../styles/theme.style'
import styles from './styles'

import { connect } from 'react-redux';
import { setUser, watchSetupCompleted, watchInvitations, watchCurrentUserData } from '../../redux/actions/common';
import { watchProjects, watchCurrentProject, watchConnected } from '../../redux/actions/projects';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
  return { 
    user: state.commonData.user,
    isSetupCompleted: state.commonData.isSetupCompleted,
    currentProject: state.projectsData.currentProject,
    projects: state.projectsData.projects
  }
}

/*
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})
*/

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    watchSetupCompleted: (uid) => dispatch(watchSetupCompleted(uid)), 
    watchInvitations: (uid) => dispatch(watchInvitations(uid)), 
    watchProjects: (uid) => dispatch(watchProjects(uid)),
    watchCurrentUserData: (uid) => dispatch(watchCurrentUserData(uid)),
    watchCurrentProject: (projectId) => dispatch(watchCurrentProject(projectId)),
    watchConnected: (uid, projectID) => dispatch(watchConnected(uid, projectID))
  
  }
  
}


const Loading = (props) => {
  const [initlizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();
  

  function onAuthStateChanged(user) { 
    props.setUser(user);
    if (user) {      
      //props.watchCurrentProject(newValue)
      //props.watchConnected({uid: user.uid, projId: props.currentProject.id})
      props.watchCurrentUserData(user.uid);
      props.watchSetupCompleted(user.uid);
      props.watchInvitations(user.uid);
      props.watchProjects(user.uid);
    }
    if (initlizing) setInitilizing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber;
  }, []);

  if (initlizing) return null;

  if (!props.user) {
    props.navigation.navigate('AuthNav'); 
  } else {
    if (props.isSetupCompleted) {
      props.navigation.navigate('MainTabNav'); 
    } else {
      props.navigation.navigate('SetupNav')
    }
  }

  return (
    <View>
      <Text>
        Loading...
      </Text>
    </View>
  );
}


export default connect(mapStateToProps, mapDispatchToProps) (Loading)
