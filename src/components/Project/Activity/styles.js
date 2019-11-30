import { StyleSheet } from 'react-native'
import theme from './../../../styles/theme.style'

export default StyleSheet.create({
  mainIcon: {
    elevation: 15,
    borderRadius: 200,
    padding: 12,
    backgroundColor: 'white',
    flexShrink: 1,
    width: 84,
    marginLeft: 60
  },
  mainIconContent: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconSvg: {
    width:50,
    height:50
  }
})
