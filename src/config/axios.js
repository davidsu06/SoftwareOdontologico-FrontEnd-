import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'https://stark-dusk-34785.herokuapp.com'
});

export default clienteAxios;