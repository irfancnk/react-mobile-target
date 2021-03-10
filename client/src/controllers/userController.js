// PACKAGES
import Cookies from 'js-cookie';
// MODULES
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


const login = () => {
    return function (dispatch) {
        setToken(null);
        // dispatch(applicationUserChanged({
        //     'isAuthenticated': true,
        //     'email': "info@mail.com"
        // }));
    };
};

const logout = () => {
    return function (dispatch) {
        removeToken();
        // dispatch(applicationUserChanged({
        //     'isAuthenticated': false, 
        //     'userEmail': '' 
        // }));
    };
};


const recover = (initialState) => {
    let token = getToken();
    if (token) {
        initialState.applicationUser.isAuthenticated = true;
        initialState.applicationUser.userEmail = "info@mail.com";
    }
    return initialState;
};


const userController = {
    login,
    logout,
    recover
};

export default userController;
