import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('signup', params)
  },
  loginUser(params) {
    return Api().post('signin', params)
  },
  fetchUserState() {
    return Api().get('userState')
  },
  logoutUser() {
    return Api().get('signout')
  }
}