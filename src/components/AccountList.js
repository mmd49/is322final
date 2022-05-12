import React from "react";
import { connect } from 'react-redux';

class AccountList extends React.component {

    render() {
        console.log(this.props);
        return (
            <div>Accounts</div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
};

export default connect(mapStateToProps)(AccountList);