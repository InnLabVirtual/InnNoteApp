import { StyleSheet } from 'react-native'
import theme from './../../styles/theme.style'
import common from '../../styles/common.style'

export default StyleSheet.create({
  projectCard: {
    ...common.card,
    backgroundColor: 'white'
  },
  copy: {
      alignItems: 'center',
      height: '50%',
      justifyContent: 'flex-end'
  },
  copyTitle: {
      ...common.txt,
      ...common.highTxt,
      ...common.title,
      width: 200,
      textAlign: 'center',
      color: theme.LIGHTGRAY_COLOR,
      fontSize: theme.FONT_SIZE_EXTRALARGE,
      lineHeight: theme.LINE_SIZE_EXTRALARGE + 10,
      marginBottom: theme.LITTLE_MARGIN
  },
  copyTxt: {
      ...common.txt,
      color: theme.LIGHTGRAY_COLOR,
      width: 150,
      textAlign: 'center'
  },
  imageContainer: {
      height: '50%',
      width: '100%'
  },
  image: {
      width: '100%',
      height: '100%'
  },

  littleTitle: {
    ...common.txt,
    ...common.tagTxt,
    ...common.cardTxt,
    textAlign: 'center',
    color: theme.LIGHTGRAY_COLOR
  },

  bigTitle: {
    ...common.txt,
    ...common.title,
    ...common.cardTxt,
    ...common.highTxt,
    textAlign: 'center'
  },
  littleTag: {
    ...common.txt,
    ...common.tagTxt,
    ...common.cardTxt,
    textAlign: 'center',
    width: '80%',
    marginTop: 5,
    color: theme.LIGHTGRAY_COLOR
  }

})

