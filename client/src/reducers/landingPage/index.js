// PACKAGES
import produce from "immer";
// MODULES
import EnumActions from '../../constants/enum-actions';

export const landingPage = produce((state, action) => {
    switch (action.type) {
        case EnumActions.LANDING_LOADING_CHANGE:
            state.loading = action.payload;
            return;
        case EnumActions.LANDING_DATA_CHANGE:
            state.dataList = action.payload;
            return;
        default:
    }
}, {});


