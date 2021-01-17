import React from 'react';
import UserControl from '../Components/UserControl';
import UserTable from '../Components/UserTable';

export default function UserManagement(){
    return(
        <div className="conatiner">
        <UserControl/>
        <UserTable/>
        </div>
    )
}

