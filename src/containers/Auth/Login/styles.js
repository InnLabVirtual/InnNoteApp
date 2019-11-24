import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from '../../../styles/theme.style'
import common from '../../../styles/common.style'

export default StyleSheet.create({
  loginContainer: {
    backgroundColor: theme.PRIMARY_COLOR,    
  },
  authMenuItemActive: {
    ...common.txt,
    ...common.highTxt,
    color: theme.PRIMARY_COLOR
  },
  authMenuItemActiveBar: {
    color: theme.PRIMARY_COLOR,
    width: 45,
    height: 4,
    borderRadius: 5,
    backgroundColor: theme.PRIMARY_COLOR
  },
})
