/* eslint-disable */
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native'


import Svg, {
  G,
  Path,
} from 'react-native-svg';


import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'
import Member from './Member/Member'

/* eslint-enable */

const TeamComponent = () => {
  return (
    <View style={styles.teamComponent}>
      
      <Text style={styles.teamTitle}>
        Equipo
      </Text>
      
      <View style={styles.teamBox}>
        <Member name={'Cristian'} />
        <Member name={'Cristian'} />
        <Member name={'Cristian'} />
        <Member name={'Cristian'} />
        
        <View style={styles.member}>
          <Svg
            width='18'
            height='4'
            viewBox="0 0 18 4"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.33332 3.66671C3.2538 3.66671 3.99999 2.92052 3.99999 2.00004C3.99999 1.07957 3.2538 0.333374 2.33332 0.333374C1.41285 0.333374 0.666656 1.07957 0.666656 2.00004C0.666656 2.92052 1.41285 3.66671 2.33332 3.66671Z"
              fill={theme.LIGHTGRAY_COLOR}
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99998 3.66671C9.92045 3.66671 10.6666 2.92052 10.6666 2.00004C10.6666 1.07957 9.92045 0.333374 8.99998 0.333374C8.07951 0.333374 7.33331 1.07957 7.33331 2.00004C7.33331 2.92052 8.07951 3.66671 8.99998 3.66671Z"
              fill={theme.LIGHTGRAY_COLOR}
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6667 3.66671C16.5871 3.66671 17.3333 2.92052 17.3333 2.00004C17.3333 1.07957 16.5871 0.333374 15.6667 0.333374C14.7462 0.333374 14 1.07957 14 2.00004C14 2.92052 14.7462 3.66671 15.6667 3.66671Z"
              fill={theme.LIGHTGRAY_COLOR}
            />
          </Svg>
        </View>
          <View style={styles.member}>
            <Svg
              width='17'
              height='17'
              viewBox="0 0 17 17"
            >
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 6.66667H16.6667V10H10V16.6667H6.66667V10H0V6.66667H6.66667V0H10V6.66667Z"
                fill={theme.LIGHTGRAY_COLOR}
              />
            </Svg>
          </View>

      </View>
    </View>
  )
}

export default TeamComponent
