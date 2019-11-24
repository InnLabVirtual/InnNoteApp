import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from './../../../styles/theme.style'
import common from './../../../styles/common.style'

export default StyleSheet.create({
  registerContainer: {
    backgroundColor: theme.BLACK_COLOR,    
  },
  authMenuItemActive: {
    ...common.txt,
    ...common.highTxt,
    color: theme.BLACK_COLOR
  },
  authMenuItemActiveBar: {
    color: theme.BLACK_COLOR,
    width: 45,
    height: 4,
    borderRadius: 5,
    backgroundColor: theme.BLACK_COLOR
  },
})
