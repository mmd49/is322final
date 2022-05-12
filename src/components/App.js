import React from "react";

import AccountList from "./AccountList";

const App = () => {
    return (
        <div className="container" style={{ marginTop: '15px'}}>
            <div className="row">
                <div className="col-sm-4">
                    <AccountList title="Accounts" stateList="accounts"/>
                </div>
                <div className="col-sm-4">
                    Transactions
                </div>
            </div>
        </div>
    );
}
export default App;