import React, {FC, useEffect, useState} from 'react';
import {getPostsByUserId} from "../../services/postService";
import {IPosts} from "../../models/IPosts";
import {IUser} from "../../models/IUser";
import Post from "./post/post";

interface IUserProp{
    user: IUser | null
}

const Posts:FC<IUserProp> = ({user}) => {

    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        if(user !== null){
            getPostsByUserId(user)
                .then((response: IPosts[]) => setPosts(response))
        }
    }, [user]);

    console.log(posts)
    return (
        <div>
            {
                posts.map((value:IPosts) => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;