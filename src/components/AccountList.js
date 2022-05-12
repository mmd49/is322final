import React from "react";
import { connect } from 'react-redux';

class AccountList extends React.component {

    renderList() {
        let accountArr = this.props[this.props.stateList];

        return accountArr.map( acc =>{
            return (
            <li className="list-group-item" key={acc.id}>
                {acc.name} - {acc.balance}
            </li>
            );
        })
    }

    render() {
        let accountList = this.renderList();

        return (
            <div className="card" style={{padding: '10px'}}>
                <h3>{ this.props.title }</h3>
                <ul className="list-group" style={{marginTop: '15 px'}}>
                    { accountList }
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
};

export default connect(mapStateToProps)(AccountList);