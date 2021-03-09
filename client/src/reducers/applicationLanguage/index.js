// PACKAGES
import produce from "immer";
// MODULES
import EnumActions from '../../constants';


export const applicationLanguage = produce((state, action) => {
    switch (action.type) {
        case EnumActions.APPLICATION_LANGUAGE_CHANGE:
            state = action.payload;
            return state;
        default:
    }
}, {});
