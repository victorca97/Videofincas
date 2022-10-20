import axios from 'axios';

export default axios.create({
    // cambiar la url
    baseURL: 'http://localhost:3000'
});