// PACKAGES
import produce from "immer";
// MODULES
import EnumActions from '../../constants';

export const applicationUser = produce((state, action) => {
    switch (action.type) {
        case EnumActions.APPLICATION_USER_LOGIN:
            state.userEmail = action.payload;
            state.isAuthenticated = true;
            return;
        case EnumActions.APPLICATION_USER_LOGOUT:
            state.userEmail = "";
            state.isAuthenticated = false;
            return;
        default:
    }
}, {});
