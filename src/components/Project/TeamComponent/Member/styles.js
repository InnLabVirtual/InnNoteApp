import { StyleSheet } from 'react-native'
import theme from './../../../../styles/theme.style'
import common from '../../../../styles/common.style'

export default StyleSheet.create({
  initial: {
    ...common.txt,
    ...common.highTxt,
    color: theme.LIGHTGRAY_COLOR,
    textTransform: 'uppercase'
  }
})
