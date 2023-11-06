import axios from 'axios';

export const planesAPI = axios.create({
    baseURL:"http://localhost:9092"
});
