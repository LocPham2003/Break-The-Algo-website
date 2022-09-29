import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('signup', params)
  },
  loginUser(params) {
    return Api().post('signin', params)
  },
  userSignUpEvent(params) {
    return Api().post('userSignUpEvent', params)
  },
  userDeregisterEvent(params) {
    return Api().post('userDeregisterEvent', params)
  },
  getUserListOfEvents(params) {
    return Api().post('getUserListOfEvents', params)
  },
  getUserRole(params) {
    return Api().post('getUserRole', params)
  },
  changePassword(params) {
    return Api().post('changePassword', params)
  },
  fetchUserState() {
    return Api().get('userState')
  },
  logoutUser() {
    return Api().get('signout')
  }
}