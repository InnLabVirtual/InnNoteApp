import { StyleSheet } from 'react-native'
import theme from './../../../styles/theme.style'
import common from '../../../styles/common.style'

export default StyleSheet.create({
    modalBack: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    modalContent: {
        ...common.card,
        width: 290,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    modalTitle: {
        ...common.txt,
        ...common.highTxt,
        ...common.subTitle,
        textAlign: 'center',
        color: theme.MEDIUMGRAY_COLOR,
        marginBottom: theme.LITTLE_MARGIN
    }
})
