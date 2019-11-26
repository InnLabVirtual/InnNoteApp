import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from '../../styles/theme.style'
import common from '../../styles/common.style'

export default StyleSheet.create({
    notifs: {

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
    }
})
