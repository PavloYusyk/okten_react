import apiService from "./apiServise";
import {IUser} from "../models/IUser";


export const getPostsByUserId = async (user: IUser) => {
    let response = await apiService.get('/posts/user/' + user.id);
    return response.data.posts;
}