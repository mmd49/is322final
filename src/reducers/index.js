import {combineReducers} from "redux";

const DEFAULT_STATE = {
accounts: [
    {id:1, name: 'Armin',},
    {id:2, name: 'Jacob',},
    {id:3, name: 'Helen',},
    {id:3, name: 'Omar',},
]
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
