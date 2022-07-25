import Api from '../service/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}
                    
// AuthenticationService.register({
//     name: '',
//     studyMajor: '',
//     studyYear: '',
//     username: '',
//     password: '',
//     emailAddress: ''
// })