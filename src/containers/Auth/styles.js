import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from '../../styles/theme.style'
import common from '../../styles/common.style'

export default StyleSheet.create({
  header: {
    // backgroundColor: theme.PRIMARY_COLOR
    flexDirection: "column",
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 40
  },
  logo: {
    width: 40,
    height: 40
  },
  titleTag: {
    ...common.txt,
    ...common.title,
    color: 'white',
    width: 220,
    textAlign: "center",
    marginTop: theme.LITTLE_MARGIN - 5
  },
  authCard: {
    ...common.card,
    borderRadius: theme.CONTAINER_CORNER_RADIUS,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: theme.GREAT_MARGIN
  },
  authContent: {
    width: '100%'
  },
  authMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  authMenuItem: {
    ...common.txt,
    color: theme.MEDIUMGRAY_COLOR
  },

  inputsContainer: {
    paddingTop: theme.GENERIC_MARGIN,
    paddingBottom: theme.LITTLE_MARGIN
  },
  inputStyle: {
    marginBottom: theme.LITTLE_MARGIN
  },
  forgetTag: {
    ...common.txt,
    ...common.tagTxt,
    color: theme.LIGHTGRAY_COLOR,
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: theme.LITTLE_MARGIN
  },
  mediaButton: {
    ...common.btn,
    width: 110,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  mediaButtonImg: {
     width: 25,
     height: 25
  }

})
