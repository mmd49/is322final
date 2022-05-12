import {combineReducers} from "redux";

const DEFAULT_STATE = {
accounts: [
    {id:1, name: 'Armin', balance: 1189.00},
    {id:2, name: 'Jacob', balance: 1289.00},
    {id:3, name: 'Helen', balance: 1179.00},
    {id:3, name: 'Omar', balance: 1181.00},
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
});
