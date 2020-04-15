import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-28beb.firebaseio.com/'
});

export default instance;