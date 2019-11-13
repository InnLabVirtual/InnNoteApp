import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from './../../styles/theme.style'
import common from './../../styles/common.style'

export default StyleSheet.create({
  mainIconActive: {
    marginTop: -50,
    marginLeft: 15
  },

  mainText: {
    ...common.txt,
    marginLeft: 10
  }
})
