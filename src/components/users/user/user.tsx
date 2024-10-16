import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
import users from "../users";


interface IUserProps {
    user: IUser
    selectUser:(user: IUser) => void;
}

const User:FC<IUserProps> = ({user, selectUser}) => {
    return (
        <div>
            <h2>{user.lastName} {user.firstName}</h2>
            <h3>Age: {user.age} City: {user.address.city}</h3>
            <p>Email: {user.email}
                <button>Send massage</button>
            </p>
            <p>Number phone: {user.phone} <button>Call</button></p>
            <button onClick={() => {
                selectUser(user);
            }}>View posts</button>
            <hr/>
        </div>
    );
};

export default User;