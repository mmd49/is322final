import {combineReducers} from "redux";

const accountReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
        case 'REMOVE_ACCOUNT':
        default:
            return state;
    }
};
