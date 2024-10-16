import apiService from "./apiServise";
import {IUser} from "../models/IUser";



export const getUsers = async ():Promise<IUser[]> =>{
    let response = await apiService.get('/users');
    return response.data.users;
}