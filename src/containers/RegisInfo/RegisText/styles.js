import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from './../../../styles/theme.style'
import global from './../../../styles/common.style'

export default StyleSheet.create({
  paperInput: {
    backgroundColor: '#FFFAEC',
    padding: 20,
    height: 300,
    marginRight: theme.GENERIC_MARGIN,
    marginLeft: theme.GENERIC_MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paperText: {
    ...global.txt,
    fontSize: theme.FONT_SIZE_EXTRALARGE,
    color: '#333333',
    textAlign: 'center',
    backgroundColor: 'red',
    flex: 1,
    width: '100%'
  },
  confirmContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    zIndex: 1

  },
  confirm: {
    width: 60,
    height: 60,
    marginRight: theme.GENERIC_MARGIN + 10,
    marginBottom: -20,
    backgroundColor: theme.PRIMARY_COLOR,
    elevation: 5,
    borderRadius: 50
  },
  colorContainer: {
    marginTop: -50,
    marginLeft: 15
  },
  colorItem: {
    marginTop: -50,
    marginLeft: 15
  }
})
