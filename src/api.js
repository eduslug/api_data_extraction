import axios from "axios";

const api = axios.create({

    baseURL: 'http://alemdocodigo.herokuapp.com/'

})

export default api;