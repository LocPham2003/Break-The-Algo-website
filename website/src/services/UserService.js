import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('signup', params)
  },
  loginUser(params) {
    return Api().post('signin', params)
  }
}