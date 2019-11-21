import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

import userDataReducer from '../reducers/userDataReducer';
import registerReducer from '../reducers/registerReducer';

const rootReducer = combineReducers(
    { userData: userDataReducer, uploadText: registerReducer }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

export default configureStore;