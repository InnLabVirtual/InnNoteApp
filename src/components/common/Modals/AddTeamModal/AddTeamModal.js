/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableNativeFeedback,
  Image
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
import { watchUsers, setNewProjectTeam } from '../../../../redux/actions/common';
import { uploadProjectData } from '../../../../redux/actions/projects';

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
    projectName: state.projectsData.projectName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchUsers: () => dispatch(watchUsers()),
    setNewProjectTeam: (newProjectTeam) => dispatch(setNewProjectTeam(newProjectTeam)),
    uploadProjectData: (project, uid) => dispatch(uploadProjectData(project, uid)),
  }
}

const AddTeamModal = (
  {
    isActive,
    ...props
  }) => {

  const [colabID, setColabID] = useState('');

  useEffect(() => {
    props.watchUsers();
    onUploadColab(props.user.uid);
  }, []);

  function onUploadColab(colabID) {
    if (props.newProjectTeam.includes(colabID) === false && colabID != '') {
      props.setNewProjectTeam(props.newProjectTeam.concat(colabID));
    }
    console.log(props.newProjectTeam, "VAR SUBIDA")
  }

  function onUploadProject() {
    props.uploadProjectData(
      {
        projectName: props.projectName,
        teamMembers: props.newProjectTeam
      },
      {
        uid: props.user.uid,
        name: props.userData.name
      }
    );
    props.navigation.navigate('Projects')
  }

  return (
    <View
    >
      <Text style={modalStyles.modalTitle}>
        Agregar Colaboradores
            </Text>
      <ScrollView style={styles.teamBox}>
        {
          props.newProjectTeam.map(colab => {
            return (
              <View
                key={colab}
                style={styles.colab}
              >
                <View
                  style={styles.colabIcon}
                />
                <Text
                  style={styles.colabName}
                >
                  {colab}
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
          teamMembers={props.newProjectTeam}
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
export default connect(mapStateToProps, mapDispatchToProps)(AddTeamModal)