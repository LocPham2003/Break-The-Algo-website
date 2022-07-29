import Api from '@/services/Api'

export default {
  fetchLoginStatus () {
    return Api().get('signin')
  },
  addUser (params) {
    return Api().post('signup', params)
  },
  loginUser(params) {
    return Api().post('signin', params)
  }
}