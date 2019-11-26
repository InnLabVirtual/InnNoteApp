import { StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import theme from './../../styles/theme.style'
import common from './../../styles/common.style'

export default StyleSheet.create({
    generalContainer: {
        flexDirection: 'row',
        height: '100%',
        backgroundColor: 'white'
    },
    filtersContainer: {
        backgroundColor: theme.BACKGROUND_COLOR,
        paddingTop: theme.GREAT_MARGIN,
        paddingBottom: theme.GREAT_MARGIN,
        paddingLeft: theme.GENERIC_MARGIN,
        paddingRight: theme.GENERIC_MARGIN,
        width: 100
    },
    filterTxt: {
        ...common.txt,
        ...common.highTxt,
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.LIGHTGRAY_COLOR,
        marginTop: 50
    },
    filterTxtTitle: {
        color: theme.DARKGRAY_COLOR
    },
    filterTxtActive: {
    },
    projectContent: {
        flex: 1,
    },
    projectBox: {
        alignItems: 'center',
        paddingTop: theme.GENERIC_MARGIN
    },
    newProject: {
        borderColor: theme.PRIMARY_COLOR,
        borderWidth: 2,
        borderStyle: 'dashed',
        justifyContent: 'center'
    },
    newProjectLabel: {
        ...common.txt,
        ...common.tagTxt,
        color: theme.LIGHTGRAY_COLOR,
        marginBottom: theme.GENERIC_MARGIN,
        marginTop: theme.LITTLE_MARGIN,
        alignSelf: "center"
    },
    newProjectAddInput: {
    },
    newProjectAddButton: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center"
    },

    project: {
        width: 200,
        height: 270,
        borderRadius: theme.CARD_CORNER_RADIUS,
        padding: theme.GENERIC_MARGIN,
        marginBottom: theme.GENERIC_MARGIN,
       
    },
    createdProject: {
        backgroundColor: theme.PRIMARY_COLOR,
        justifyContent: 'flex-start',
        elevation: 15 
    },
    projectTitle: {
        ...common.txt,
        ...common.title,
        ...common.highTxt,
        color: 'white',
        textAlign: 'center',
        paddingTop: theme.LITTLE_MARGIN,
        paddingBottom: theme.LITTLE_MARGIN,
        lineHeight: 25
        
    },
    team: {
        flexDirection: 'row'
    },
    teamMember: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        marginLeft: theme.LITTLE_MARGIN / 2,
        marginRight: theme.LITTLE_MARGIN / 2,
        borderRadius: 50
    }

})
