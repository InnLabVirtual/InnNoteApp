import { StyleSheet } from 'react-native'
import theme from './../../../styles/theme.style'

export default StyleSheet.create({
  mainIcon: {
    elevation: 15,
    borderRadius: theme.CARD_CORNER_RADIUS,
    padding: 12,
    backgroundColor: 'white',
    flexShrink: 1,
    width: 64

  },
  mainIconActive: {
    marginTop: -50,
    marginLeft: 15
  },
  mainIconContent: {
    width: 40,
    height: 40
  }
})
