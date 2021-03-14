// PACKAGES
import produce from "immer";
// MODULES
import EnumActions from '../../constants/enum-actions';

export const applicationUser = produce((state, action) => {
    switch (action.type) {
        case EnumActions.APPLICATION_USER_LOGIN:
            state.user = action.payload.user;
            state.isAuthenticated = true;
            return;
        case EnumActions.APPLICATION_USER_LOGOUT:
            state.user = null;
            state.isAuthenticated = false;
            return;
        default:
    }
}, {});
