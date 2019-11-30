import { StyleSheet } from 'react-native'
import theme from './../../../styles/theme.style'
import common from '../../../styles/common.style'

export default StyleSheet.create({
  teamComponent: {
      ...common.card,
      backgroundColor: 'white'
  },
  teamBox: {
      flexDirection: 'row'
  },
  member: {
    width: 35,
    height: 35,
    borderRadius: theme.CARD_CORNER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: theme.LIGHTGRAY_COLOR,
    marginLeft: theme.LITTLE_MARGIN / 4,
    marginRight: theme.LITTLE_MARGIN / 4
  },
  teamTitle: {
      ...common.txt,
      ...common.subTitle
  }
})
