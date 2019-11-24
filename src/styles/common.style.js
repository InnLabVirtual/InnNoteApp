import { StyleSheet } from 'react-native'
import theme from './theme.style'

export default StyleSheet.create({
  // Those are text styling
  txt: {
    fontFamily: theme.REGULAR_FONT,
    color: theme.BLACK_COLOR,
    fontSize: theme.FONT_SIZE_REGULAR,
    textAlign: 'left'
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    lineHeight: theme.LINE_SIZE_LARGE

  },
  subTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.BOLD_FONT
  },
  highTxt: {
    fontFamily: theme.BOLD_FONT
  },
  tagTxt: {
    fontSize: theme.FONT_SIZE_SMALL,
    lineHeight: theme.LINE_SIZE_SMALL
  },
  // Those are general stylings
  btn: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    backgroundColor: theme.PRIMARY_COLOR,
    color: 'white',
    fontSize: theme.FONT_SIZE_MEDIUM,
    borderRadius: theme.BUTTON_CORNER_RADIUS,
    
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    textTransform: "uppercase"
  },
  selector: {
    width: 27,
    height: 27,
    borderRadius: 55,
    borderWidth: 8,
    borderStyle: 'solid',
    opacity: theme.MIDDLE_OPACITY
  },
  selectorActive: {
    opacity: 1
  },
  icon: {
    width: 30,
    height: 30
  },
  bodyContainer: {
    marginTop: 0,
    marginLeft: theme.GENERIC_MARGIN,
    marginRight: theme.GENERIC_MARGIN,
    flex: 1
  },
  // Those are card stylings
  card: {
    borderRadius: theme.CARD_CORNER_RADIUS,
    padding: 25,
    backgroundColor: theme.PRIMARY_COLOR,
    marginTop: 16,
    marginBottom: 16
  },
  cardTag: {
    fontSize: theme.FONT_SIZE_EXTRASMALL
  },
  cardIcon: {
    width: 25,
    height: 25
  },
  cardTxt: {
    marginLeft: 15,
    marginRight: 15
  },
  cardButton: {
    paddingBottom: 1,
    paddingTop: 1,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: 'white',
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_REGULAR,
    borderRadius: theme.BUTTON_CORNER_RADIUS
  },
  mainIconContent: {
    width: 40,
    height: 40
  },
  mainIcon: {
    elevation: 15,
    borderRadius: theme.CARD_CORNER_RADIUS,
    padding: 12,
    backgroundColor: 'white',
    flexShrink: 1,
    width: 64

  },
  // Those are flex stylings
  rowDistributed: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabNavBar: {
    elevation: 50,
    borderTopColor: theme.SUPERLIGHTGRAY_COLOR,
    height: theme.TAB_BAR_HEIGHT
  },
  tabNavTab: {

  }
})
