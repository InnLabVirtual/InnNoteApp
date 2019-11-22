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
  

  useEffect(() => {
    //alert(props.user, "FROM PROJECTS");
    props.watchProjects(props.user.uid);
    console.log(props.projects, "THIS IS IN THE COMPONENT")
  }, []);

  
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  function onCreateProject(name) {
    console.log(props.user.name, "ONPROJECTS")
    props.uploadProjectData({name: name, id: makeid(10)}, props.user.uid, props.user.name);
  }

  return (
    <View>
      <View>
          {props.projects ? (
            props.projects.map((project) => {
              return (
                <View>
                  <Text>
                    { project.name }
                  </Text>
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
    </View>
  )
}


export default connect(mapStateToProps, mapDispatchToProps) (Projects)

