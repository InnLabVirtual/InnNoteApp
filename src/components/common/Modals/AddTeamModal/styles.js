import { StyleSheet } from 'react-native'
import theme from './../../../../styles/theme.style'
import common from '../../../../styles/common.style'

export default StyleSheet.create({
  teamBox: {
    padding: theme.LITTLE_MARGIN,
    maxHeight: 250
  },
  colab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.LITTLE_MARGIN / 4,
    marginTop: theme.LITTLE_MARGIN / 4 
  },
  colabIcon: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderRadius: 50,
    marginRight: theme.LITTLE_MARGIN,
    borderColor: theme.DARKGRAY_COLOR
  },
  colabName: {
    ...common.txt,
    color: theme.LIGHTGRAY_COLOR
  },
  searchIcon: {
    marginRight: theme.ICON_INPUT_PADDING,
    marginBottom: 10
  }, 
  searchInput: {
    width: 220
  }
})
