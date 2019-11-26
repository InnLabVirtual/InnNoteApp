import { SET_PROJECTS_DATA, SET_PROJECT_NAME } from '../constants';

const initialState = {
    projectName: [],
    projects: [],
};

const setProjectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROJECT_NAME:
            console.log(action.payload, "THIS IS THE NAME OF THE NEW PROJECT")
            return {
                ...state,
                projectName: action.payload
            }
        case SET_PROJECTS_DATA:
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }
}

export default setProjectsReducer;