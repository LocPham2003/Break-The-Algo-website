import axios from 'axios'

axios.defaults.withCredentials = true;

//https://break-the-algo-production-production.up.railway.app/api
//http://localhost:8081/api
//https://www.breakthealgo.com/api
const backendURL = 'http://localhost:8081/api'

export default() => {
    return axios.create({
        baseURL: backendURL
    })
}