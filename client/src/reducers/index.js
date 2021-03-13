// PACKAGES
import { combineReducers } from 'redux';
// MODULES
import { applicationUser } from './applicationUser';
import { applicationLanguage } from './applicationLanguage';
import { landingPage } from './landingPage';


export default combineReducers({
    applicationUser,
    applicationLanguage,
    landingPage
});
