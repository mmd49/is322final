import {combineReducers} from "redux";

const DEFAULT_STATE = {

};

const accountReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
        case 'REMOVE_ACCOUNT':
        default:
            return state;
    }
};

export default combineReducers({
    accounts: accountReducer()
})
