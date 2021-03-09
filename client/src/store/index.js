// PACKAGES
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// MODULES
import masterReducer from '../reducers';


const consoleMessages = store => next => action => {
    console.groupCollapsed(`Dispatching Action => ${action.type}`);
    let result = next(action);
    console.log('Action payload: ', action.payload);
    console.log('Current Store State: ', store.getState());
    console.groupEnd();
    return result;
};

var storeFactory = (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(masterReducer, initialState);
};

export default storeFactory;
