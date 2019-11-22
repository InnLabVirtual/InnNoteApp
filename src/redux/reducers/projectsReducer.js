import { SET_PROJECTS_DATA } from '../constants';

const initialState = {
    projects: [],
};

const setProjectsReducer = (state = initialState, action) => {
    switch(action.type) {
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