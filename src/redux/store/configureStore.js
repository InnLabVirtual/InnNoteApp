import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import userDataReducer from '../reducers/userDataReducer';
import registerReducer from '../reducers/registerReducer';
import commonReducer from '../reducers/commonReducer';
import projectsReducer from '../reducers/projectsReducer';

const rootReducer = combineReducers(
    { 
        userData: userDataReducer, 
        uploadText: registerReducer, 
        commonData: commonReducer ,
        projectsData: projectsReducer
    }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

export default configureStore;