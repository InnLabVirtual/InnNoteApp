import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from './../../../styles/theme.style'
import common from './../../../styles/common.style'

export default StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    minWidth: 140
  },
  dataInput: {
    marginBottom: theme.LITTLE_MARGIN,
  }
})
