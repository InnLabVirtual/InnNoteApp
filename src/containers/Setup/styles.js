import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from './../../styles/theme.style'
import common from './../../styles/common.style'

export default StyleSheet.create({
    setup: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
    },
    header: {
        marginTop: theme.GREAT_MARGIN,
        marginRight: theme.GENERIC_MARGIN,
        marginLeft: theme.GENERIC_MARGIN
    },
    headerTitle: {
        ...common.txt,
        ...common.highTxt,
        ...common.title,
        color: theme.PRIMARY_COLOR
    },
    setupContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: theme.GENERIC_MARGIN,
        marginRight: theme.GENERIC_MARGIN,
    },
    wizardMenu: {
        marginBottom: theme.GREAT_MARGIN,
        marginTop: theme.LITTLE_MARGIN,
        marginLeft: theme.GENERIC_MARGIN,
        marginRight: theme.GENERIC_MARGIN,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wizardMenuItemContainer: {
        flexDirection: 'row'
    },
    wizardMenuItem: {
        width: 15,
        height: 15,
        marginLeft: theme.LITTLE_MARGIN / 2,
        marginRight: theme.LITTLE_MARGIN / 2,
        backgroundColor: theme.SUPERLIGHTGRAY_COLOR,
        borderRadius: 50
    },
    wizardMenuItem: {
        width: 15,
        height: 15,
        marginLeft: theme.LITTLE_MARGIN / 2,
        marginRight: theme.LITTLE_MARGIN / 2,
        backgroundColor: theme.SUPERLIGHTGRAY_COLOR,
        borderRadius: 50
    },
    wizardMenuItemActive: {
        backgroundColor: theme.PRIMARY_COLOR,
    },
    wizardMenuTag: {
        ...common.txt,
        ...common.highTxt,
        color: theme.LIGHTGRAY_COLOR
    }
})
