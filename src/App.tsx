import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/users";
import {IUser} from "./models/IUser";
import Posts from "./components/posts/posts";






function App() {
    const [user, setUser] = useState<IUser | null>(null);


    const selectUser = (userSelect: IUser) => {
        setUser(userSelect);
    }



    return (
        <div>
            <Posts user={user}/>
            <hr/>
            <Users selectUser={selectUser}/>
        </div>
    );
}

export default App;
