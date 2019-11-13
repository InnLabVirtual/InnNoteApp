import { StyleSheet } from 'react-native'
import theme from './../../../../styles/theme.style'

export default StyleSheet.create({
  mapIcon: {
    width: 30,
    height: 30,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 20,
    opacity: theme.LOW_OPACITY
  },
  mapIconActive: {
    opacity: 1
  }
})
