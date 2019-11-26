import { StyleSheet } from 'react-native'
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  notif: {
    ...common.card,
    backgroundColor: 'white',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 50,
    width: '90%',
    marginLeft: '10%'
  },
  highSubs: {
    ...common.txt,
    ...common.highTxt,
    color: theme.MEDIUMGRAY_COLOR
  },
  txt: {
    ...common.txt,
    color: theme.MEDIUMGRAY_COLOR
  },
  projectTitle: {
    ...common.txt,
    ...common.highTxt,
    ...common.title,
    fontSize: theme.FONT_SIZE_EXTRALARGE,
    lineHeight: theme.LINE_SIZE_EXTRALARGE,
    color: theme.DARKGRAY_COLOR,
    marginBottom: theme.GENERIC_MARGIN
  },
  rejectButton: {
    backgroundColor: 'transparent',
    color: theme.DARKGRAY_COLOR
  },
  rejectButtonText: {
    color: theme.DARKGRAY_COLOR
  },
  buttonContainer: {
    flexDirection: 'row'
  }
})
