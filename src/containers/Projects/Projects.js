/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput,
  Alert,
  AsyncStorage
} from 'react-native'

import AppInput from './../../components/common/Inputs/AppInput/AppInput'
import AppButton from './../../components/common/Inputs/AppButton/AppButton'

import global from './../../styles/common.style'
import theme from './../../styles/theme.style'
import styles from './styles'

import { connect } from 'react-redux';
import { setUser, watchIsConnected } from '../../redux/actions/common';
import { uploadProjectData, watchProjects, setProjectName, watchCurrentProject, getCurrentProject, watchCurrentProjectUsers } from '../../redux/actions/projects';


const mapStateToProps = (state) => {
  return {
    user: state.commonData.user,
    projects: state.projectsData.projects,
    currentProject: state.projectsData.currentProject

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadProjectData: (project, uid) => dispatch(uploadProjectData(project, uid)),
    watchProjects: (uid) => dispatch(watchProjects(uid)),
    setProjectName: (name) => dispatch(setProjectName(name)),
    watchCurrentProject: (projectId) => dispatch(watchCurrentProject(projectId)),
    getCurrentProject: (projectId) => dispatch(getCurrentProject(projectId)),
    watchIsConnected: (projectId, uid) => dispatch(watchIsConnected(projectId, uid)),
    watchCurrentProjectUsers: (projectID) => dispatch(watchCurrentProjectUsers(projectID)),
  }
}

const Projects = (props) => {

  const [name, setName] = useState('');
  const [projectSearch, setProjectSearch] = useState('');

  useEffect(() => {
    props.watchProjects(props.user.uid);
    props.watchCurrentProjectUsers(props.currentProject.id)
  }, []);

  function onSetName(name) {
    if (name != '') {
      props.setProjectName(name)
      props.navigation.navigate('AddTeamModal', {
        type: 'addTeam',
        navigation: props.navigation
      })
      setName('')
      
    } else {
      Alert.alert('Algo ha ido mal', 'Por favor escribe un nombre de proyecto')
    }
  }

  function handleCurrentProjectChange(projectId) {
    props.watchCurrentProject(projectId.id)
    // props.watchIsConnected(projectId.id, props.user.uid)
  }

  return (
    <View style={styles.generalContainer}>
      <View style={styles.filtersContainer}>
      </View>
      <View style={styles.projectContent}>
        <View>
          <AppInput
            label='Buscar proyecto'
            onChange={project => { setProjectSearch(project.nativeEvent.text) }}
            value={projectSearch}
            autoCapitalize='none'
          />
        </View>
        <ScrollView>
          <View style={styles.projectBox}>
            <View style={[styles.project, styles.newProject]}>
              <Text style={styles.newProjectLabel}>
                Crea un proyecto
              </Text>
              <AppInput
                label='Dale nombre'
                onChange={name => { setName(name.nativeEvent.text) }}
                value={name}
                autoCapitalize='sentences'
                addedStyle={styles.newProjectAddInput}
                multiline={true}
                maxLength={25}
              />
              <AppButton
                label='>'
                onPress={() => { onSetName(name) }}
                addedStyle={styles.newProjectAddButton}
              />
            </View>
            {props.projects ? (
              props.projects.map((project) => {
                return (
                  <TouchableWithoutFeedback
                    key={project.name}
                    onPress={() => {
                      handleCurrentProjectChange({ id: project.id })
                    }}>

                    <View style={
                      [
                        styles.project,
                        styles.createdProject,
                        props.currentProject &&
                        (
                          project.id == props.currentProject.id &&
                          styles.createdProjectActive
                        ),
                        ,
                        props.currentProject ?
                        (
                          !(project.id == props.currentProject.id) &&
                          styles.createdProjectUnactive
                        ) :
                        (
                          styles.createdProjectUnactive
                        )
                      ]
                    }>
                      <Text style={[styles.projectTitle, props.currentProject && (project.id == props.currentProject.id && styles.projectTitleActive)]}>
                        {project.name}
                      </Text>

                    </View>
                  </TouchableWithoutFeedback>
                )
              })
            ) : (
                <View>
                  <Text>
                    Aún no hay proyectos, crea el primero
              </Text>
                </View>
              )}
          </View>
        </ScrollView>
      </View>
      {/*
      <View>
                  
      </View>
      <View>
        <TextInput
          placeholder="Project Name"
          autoCapitalize="none"
          onChange={name => { setName(name.nativeEvent.text) }}
          value={name}
        />
        <TouchableNativeFeedback
          onPress={() => { onCreateProject(name) }}
        >
          <Text>
            Presione para crear el proyecto
          </Text>
        </TouchableNativeFeedback>

      </View>
      */}
    </View>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects)

