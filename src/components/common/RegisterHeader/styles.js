import { StyleSheet } from 'react-native'
import theme from './../../../styles/theme.style'

export default StyleSheet.create({

  headerContainer: {
    marginBottom: theme.GENERIC_MARGIN,
    marginTop: theme.GENERIC_MARGIN,
    marginRight: theme.GENERIC_MARGIN,
    marginLeft: theme.GENERIC_MARGIN
  },
  headerContainerBack: {
    marginLeft: 0
  },
  activityIcon: {
    width: 47,
    height: 47,
    backgroundColor: 'gray'
  }
})
