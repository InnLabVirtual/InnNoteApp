import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from './../../../styles/theme.style'
import global from './../../../styles/common.style'

export default StyleSheet.create({
  paperInput: {
    backgroundColor: '#FFFAEC',
    padding: 20,
    height: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paperText: {
    ...global.txt,
    fontSize: theme.FONT_SIZE_EXTRALARGE,
    color: '#333333',
    textAlign: 'center',
    flex: 1,
  },
  confirmContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    zIndex: 1,
    marginTop: theme.GENERIC_MARGIN
  },
  confirm: {
    width: 60,
    height: 60,
    marginRight: theme.GENERIC_MARGIN,
    marginBottom: -15,
    backgroundColor: theme.PRIMARY_COLOR,
    elevation: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorContainer: {
    marginTop: -50,
    marginLeft: 15
  },
  colorItem: {
    marginTop: -50,
    marginLeft: 15
  },
  selector: {
    ...global.selector,
    opacity: 1
  }
})
