import { StyleSheet } from 'react-native'
import theme from '../../../../styles/theme.style';
import common from '../../../../styles/common.style';


export default StyleSheet.create({
  labelStyle: {
    ...common.txt,
    ...common.highTxt,
    ...common.tagTxt,
    color: theme.MEDIUMGRAY_COLOR,
    marginLeft: theme.LITTLE_MARGIN,
    paddingBottom: 0
  },
  inputStyle: {
    ...common.txt,
    color: theme.DARKGRAY_COLOR,
    borderBottomWidth: 2,
    textDecorationLine: 'none',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: theme.LITTLE_MARGIN,
    paddingRight: theme.LITTLE_MARGIN
  }
})
