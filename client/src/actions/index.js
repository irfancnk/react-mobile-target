import EnumActions from '../constants/enum-actions';


export const applicationUserLogin = (value) => ({
    type: EnumActions.APPLICATION_USER_LOGIN,
    payload: value
});

export const applicationUserLogout = (value) => ({
    type: EnumActions.APPLICATION_USER_LOGOUT
});

export const applicationLanguageChange = (value) => ({
    type: EnumActions.APPLICATION_LANGUAGE_CHANGE,
    payload: value
});

export const landingLoadingChange = (value) => ({
    type: EnumActions.LANDING_LOADING_CHANGE,
    payload: value
});

export const landingDataChange = (value) => ({
    type: EnumActions.LANDING_DATA_CHANGE,
    payload: value
});





