import React, {FC} from 'react';
import {IPosts} from "../../../../models/IPosts";

interface IPostProps{
    post: IPosts
}
const Post:FC<IPostProps> = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h3>Views: {post.views}</h3>
            <h4>Likes: {post.reactions.likes} Dislikes {post.reactions.dislikes}</h4>
        </div>
    );
};

export default Post;