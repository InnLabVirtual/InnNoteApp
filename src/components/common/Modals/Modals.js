/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import Svg, {
  G,
  Path,
} from 'react-native-svg';

import styles from './styles'
import common from '../../../styles/common.style'
import theme from '../../../styles/theme.style'

import { connect } from 'react-redux';
import AppButton from '../Inputs/AppButton/AppButton';
import AddTeamModal from './AddTeamModal/AddTeamModal';
import UpdateTeamModal from './UpdateTeamModal/UpdateTeamModal';

/* eslint-enable */

const mapStateToProps = (state) => {
  return {
    activeElement: state.commonData.activeElement,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const Modals = (
  {
    isActive,
    ...props
  }) => {

  return (
    <View
        style={styles.modalBack}
    >
        <View
            style= {styles.modalContent}
        >
            {props.navigation.getParam('type', 'NO-MODAL') === 'addTeam' && (
                <AddTeamModal navigation={props.navigation} />
            )}
            {props.navigation.getParam('type', 'NO-MODAL') === 'updateTeam' && (
                <UpdateTeamModal navigation={props.navigation} />
            )}
        </View>
    </View>
    
  )
}
export default connect(mapStateToProps, mapDispatchToProps) (Modals)