/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableNativeFeedback,
  Image,
  Alert
} from 'react-native'

import Svg, {
  G,
  Path,
  Circle
} from 'react-native-svg';

import styles from './styles'
import modalStyles from '../styles'
import common from '../../../../styles/common.style'
import theme from '../../../../styles/theme.style'

import { connect } from 'react-redux';
import { watchUsers, sendInvi } from '../../../../redux/actions/common';
import { watchCurrentProjectUsers, sendInvitations } from '../../../../redux/actions/projects';

import AppButton from '../../Inputs/AppButton/AppButton';
import AppInput from '../../Inputs/AppInput/AppInput';
import { ScrollView } from 'react-native-gesture-handler';
import AppPicker from '../../Inputs/AppPicker/AppPicker';

/* eslint-enable */

const mapStateToProps = (state) => {

  return {
    users: state.commonData.users,
    newProjectTeam: state.commonData.newProjectTeam,
    user: state.commonData.user,
    userData: state.commonData.userData,
    projectName: state.projectsData.projectName,
    currentProject: state.projectsData.currentProject,
    projectUsers: state.projectsData.projectUsers

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchUsers: () => dispatch(watchUsers()),
    watchCurrentProjectUsers: (projectID) => dispatch(watchCurrentProjectUsers(projectID)),
    sendInvi: (currentProject, uid, userName) => dispatch(sendInvi(currentProject, uid, userName)),
    sendInvitations: (currentProject, uid, userName) => dispatch(sendInvitations(currentProject, uid, userName))
  }
}

const UpdateTeamModal = (
  {
    isActive,
    ...props
  }) => {

  const [colabID, setColabID] = useState('');

  useEffect(() => {
    props.watchUsers();
    props.watchCurrentProjectUsers(props.currentProject.id)
  }, []);

  function onUploadColab(colabID) {
    if (!props.projectUsers.some( user => {

      return user.id == colabID
    }) ) {
    props.sendInvi(props.currentProject, colabID, props.userData.name);
    Alert.alert("Se envió una invitación", "Dile a tu colaborador que la acepte")
    }
    
  }

  function onUploadProject() {
    props.navigation.navigate('Project')
  }

  return (
    <View
    >
      <Text style={modalStyles.modalTitle}>
        Actualizar Colaboradores
      </Text>
      <ScrollView 
      style={styles.teamBox}>
        {
          props.projectUsers.map(colab => {
            return (
              <View
                key={colab.name}
                style={styles.colab}
              >
                <View
                  style={styles.colabIcon}
                />
                <Text
                  style={styles.colabName}
                >
                  {colab.name}
                </Text>
              </View>
            )
          })
        }

      </ScrollView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'flex-end'
      }}>
        <Svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          style={styles.searchIcon}
        >
          <Circle
            cx="9"
            cy="9"
            r="8"
            stroke="#707070"
            strokeWidth="2"
            fill="none" />
          <Path
            d="M15 15.5L21.5 22"
            stroke="#707070"
            strokeWidth="2" />
        </Svg>
        <AppPicker
          label='Busque colaborador'
          addedStyle={styles.searchInput}
          items={props.users}
          teamMembers={props.projectUsers}
          mode='dropdown'
          value={colabID}
          onChange={(itemValue) => { setColabID(itemValue) }}
        />

      </View>
      <AppButton
        label='Agregar'
        onPress={() => { onUploadColab(colabID) }}
      />
      <AppButton
        label='Terminar'
        onPress={() => { onUploadProject() }}
      />
    </View>

  )
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateTeamModal)