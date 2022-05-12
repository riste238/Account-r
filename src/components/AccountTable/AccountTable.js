import React from 'react';
import Account from './Account';

const AccountTable = ({data}) =>  {
 
    const allUser = data.map(user => 
        { return (
             <Account user={user} key={user.id}/>
         )
        });
  return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-2">
                    <h3 className="display-4">Accounts</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Lastname</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {allUser}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountTable;