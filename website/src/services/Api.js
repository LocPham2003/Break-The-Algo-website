import axios from 'axios'

axios.defaults.withCredentials = true;

//https://break-the-algo-production-production.up.railway.app/api
const backendURL = 'http://localhost:8081/api'

export default() => {
    return axios.create({
        baseURL: backendURL
    })
}