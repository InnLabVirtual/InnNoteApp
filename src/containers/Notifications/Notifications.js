/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'

import { connect } from 'react-redux';
import { watchInvitations, deleteInvitation } from '../../redux/actions/common';
import { addProject } from '../../redux/actions/projects';


import global from './../../styles/common.style'
import theme from './../../styles/theme.style'
import styles from './styles'
import Notification from '../../components/Notification/Notification'

const mapStateToProps = (state) => {
  return {
    user: state.commonData.user,
    invitations: state.commonData.invitations,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchInvitations: (uid) => dispatch(watchInvitations(uid)),
    deleteInvitation: (uid, invitationID) => dispatch(deleteInvitation(uid, invitationID)),
    addProject: (projectData, user) => dispatch(addProject(projectData, user)),
    
  }
}

const Notifications = (props) => {

  useEffect(() => {
    props.watchInvitations(props.user.uid);
  }, []);

  function handleReject(invitationID) {
    props.deleteInvitation({userID: props.user.uid, invitationID: invitationID})
    alert('Seguro de rechazar el proyecto');
  }

  const handleAccept = (projectID, projectName, invitationID) => {
    props.addProject({projectName: projectName, projectID: projectID},{id: props.user.uid})  
    props.deleteInvitation({userID: props.user.uid, invitationID: invitationID})
    
    alert('Has aceptado el proyecto')
  }

  return (
    <View style={styles.notifs}>
      {props.invitations.length > 0 ?
        props.invitations.map(invitation => {
          return (
            <Notification
              key={invitation.id}
              fromUser={invitation.projectUser}
              fromProjectName={invitation.projectName}
              onReject={() => { handleReject(invitation.id) }}
              onAccept={() => { handleAccept(invitation.projectID, invitation.projectName, invitation.id) }}
            />
          )
        }) : (
          <View>
            <View style={styles.copy}>
              <Text style={styles.copyTitle}>
                No hay invitaciones
            </Text>
              <Text style={styles.copyTxt}>
                No tienes notificaciones pendientes
            </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('./../../assets/images/notifImage.png')}
              />
            </View>
          </View>
        )
      }
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)

