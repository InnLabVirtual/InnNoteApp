/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text
} from 'react-native'

import auth from '@react-native-firebase/auth';

import global from './../../styles/common.style'
import theme from './../../styles/theme.style'
import styles from './styles'

import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/common';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
  //console.log(state);

  return { 
    user: state.commonData.user
   }
}

/*
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})
*/

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}


const Loading = (props) => {
  const [initlizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) { 
    props.setUser(user);
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
    props.navigation.navigate('MainTabNav'); 
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
