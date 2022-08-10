import Api from "./Api";

export default {
    eventRegister(params) {
        return Api().post('eventRegister', params)
    },
    eventDeregister(params) {
        return Api().post('eventDeregister', params)
    },
    fetchEventList() {
        return Api().get('eventList')
    },
    fetchSignedupEventList(params) {
        return Api().post('signedupEventList', params)
    }
}