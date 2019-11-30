import { SET_PROJECTS_DATA, SET_PROJECT_NAME, GET_CURRENT_PROJECT, GET_CURRENT_PROJECTID } from '../constants';

const initialState = {
    projectName: [],
    projects: [],
    currentProject: null,
};

const setProjectsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case GET_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload
            }
        case SET_PROJECT_NAME:
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