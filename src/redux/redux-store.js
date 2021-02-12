import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';

import loginReducer from './login-reducer';

let reducers = combineReducers({
    login_page: loginReducer  
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;