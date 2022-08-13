import axios from 'axios'

axios.defaults.withCredentials = true;

//https://breakthealgo.herokuapp.com/api
const backendURL = 'http://localhost:8081/api'

export default() => {
    return axios.create({
        baseURL: backendURL
    })
}