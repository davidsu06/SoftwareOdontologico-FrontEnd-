import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'https://stark-dusk-34785.herokuapp.com'
    // baseURL : 'http://localhost:4000'
});

export default clienteAxios;