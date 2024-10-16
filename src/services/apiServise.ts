import axios from "axios";

let apiService = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type' : 'application/json'}
});

export default apiService;