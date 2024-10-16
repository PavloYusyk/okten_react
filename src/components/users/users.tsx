import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/usersService";
import User from "./user/user";

interface IUsersProps {
    selectUser:(user: IUser) => void;
}

const Users:FC<IUsersProps> = ({selectUser}) => {

    let [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then((response: IUser[]) => setUsers(response));

    }, []);
    return (
        <div>
            {
                users.map((item:IUser) => <User selectUser={selectUser} key={item.id} user={item}/>)
            }
        </div>
    );
};

export default Users;