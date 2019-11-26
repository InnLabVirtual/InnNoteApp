/* eslint-disable */
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback

} from 'react-native'
import styles from './styles'
import AppButton from '../common/Inputs/AppButton/AppButton'
import common from '../../styles/common.style'

/* eslint-enable */

const Notification = (
  {
    fromUser,
    fromProjectName,
    onReject,
    onAccept,
    ...props
  }
) => {
  return (
    <View style={styles.notif}>
      <Text style={styles.highSubs}>
        {fromUser}
      </Text>
      <Text style={styles.txt}>
        Te ha invitado a:
      </Text>
      <Text style={styles.projectTitle}>
        {fromProjectName}
      </Text>
      <Text style={styles.highSubs}>
        ¿Quieres unirte?
      </Text>
      <View style={styles.buttonContainer}>

        <AppButton 
          label='Rechazar'
          onPress={onReject}
          addedStyle={styles.rejectButton}
          txtAddedStyle={styles.rejectButtonText}
        />
        <AppButton 
          label='Aceptar.'
          onPress={onAccept}
        />
      </View>
    </View>
  )
}

export default Notification
