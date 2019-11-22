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


const mapStateToProps = (state) => {
  return {
    user: state.commonData.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}


const Projects = (props) => {

  useEffect(() => {
    //alert(props.user, "FROM PROJECTS");
  }, []);


  return (
    <ScrollView>

        <TouchableNativeFeedback > 
          <Text>
            This is Projectsss
            </Text>
          </TouchableNativeFeedback>
          
    </ScrollView>
  )
}


export default connect(mapStateToProps, mapDispatchToProps) (Projects)

