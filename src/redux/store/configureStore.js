import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import userDataReducer from '../reducers/userDataReducer';
import registerReducer from '../reducers/registerReducer';
import commonReducer from '../reducers/commonReducer';

const rootReducer = combineReducers(
    { 
        userData: userDataReducer, 
        uploadText: registerReducer, 
        commonData: commonReducer 
    }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

export default configureStore;