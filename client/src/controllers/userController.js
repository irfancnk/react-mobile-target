// PACKAGES
import Cookies from 'js-cookie';
// MODULES
import { User } from '../models/User';
import { applicationUserLogin, applicationUserLogout } from '../actions';
const userToken = 'userToken';

const setToken = (token) => {
    const in30Minutes = 1 / 48;
    Cookies.set(userToken, token, { expires: in30Minutes });
}
const getToken = () => {
    return Cookies.get('userToken');
}
const removeToken = () => {
    Cookies.remove(userToken);
}


const login = ({ email }) => {
    return function (dispatch) {
        let user = new User({ email });
        setToken(JSON.stringify(user));
        dispatch(applicationUserLogin({
            'user': user
        }));
    };
};

const logout = () => {
    return function (dispatch) {
        removeToken();
        dispatch(applicationUserLogout());
    };
};


const recover = (initialState) => {
    let token = getToken();
    if (token) {
        initialState.applicationUser.isAuthenticated = true;
        initialState.applicationUser.user = JSON.parse(token);
    }
    return initialState;
};


const userController = {
    login,
    logout,
    recover
};

export default userController;
