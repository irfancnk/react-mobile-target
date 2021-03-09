// PACKAGES
import { combineReducers } from 'redux';
// MODULES
import { applicationUser } from './applicationUser';
import { applicationLanguage } from './applicationLanguage';


export default combineReducers({
    applicationUser,
    applicationLanguage
});
