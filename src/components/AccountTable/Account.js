import React from 'react';

const Account = ({user}) => {
    return (
        <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.lastname}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
    </tr>
    )
}

export default Account;