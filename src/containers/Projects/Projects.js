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
  TextInput
} from 'react-native'

import AppInput from './../../components/common/Inputs/AppInput/AppInput'
import AppButton from './../../components/common/Inputs/AppButton/AppButton'

import global from './../../styles/common.style'
import theme from './../../styles/theme.style'
import styles from './styles'

import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/common';
import { uploadProjectData, watchProjects } from '../../redux/actions/projects';


const mapStateToProps = (state) => {
  return {
    user: state.commonData.user,
    projects: state.projectsData.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadProjectData: (project, uid) => dispatch(uploadProjectData(project, uid)),
    watchProjects: (uid) => dispatch(watchProjects(uid))
  }
}

const Projects = (props) => {

  const [name, setName] = useState('');
  const [projectSearch, setProjectSearch] = useState('');

  useEffect(() => {
    props.watchProjects(props.user.uid);
    console.log(props.projects, "THIS IS IN THE COMPONENT")
  }, []);


  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function onCreateProject(name) {
    console.log(props.user.name, "ONPROJECTS")
    props.uploadProjectData({ name: name, id: makeid(10) }, props.user.uid, props.user.name);
    setName('')
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
          {props.projects ? (
            props.projects.map((project) => {
              return (
                <View style={[styles.project, styles.createdProject]}>
                <Text style={styles.projectTitle}>
                  {project.name}
                  </Text>
                <ScrollView>
                  <View style={styles.team}>
                    <View style={styles.teamMember}>
                    </View>
                  </View>
                </ScrollView>
              </View>
              )
            })
          ) : (
              <View>
                <Text>
                  Aún no hay proyectos, crea el primero
              </Text>
              </View>
            )}
            <View style={[styles.project, styles.newProject]}>
              <Text style={styles.newProjectLabel}>
                Crea un proyecto
              </Text>
              <AppInput
                label='Dale nombre'
                onChange={name => { setName(name.nativeEvent.text) }}
                value={name}
                autoCapitalize='words'
                addedStyle={styles.newProjectAddInput}
              />
              <AppButton
                label='+'
                onPress={() => { onCreateProject(name) }}
                addedStyle={styles.newProjectAddButton}
              />
            </View>


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

