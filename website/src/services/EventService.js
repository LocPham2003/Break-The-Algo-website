import Api from "./Api";

export default {
    eventRegister(params) {
        return Api().post('eventRegister', params)
    },
    eventDeregister(params) {
        return Api().post('eventDeregister', params)
    },
    eventCreate(params) {
        return Api().post('eventCreate', params)
    },
    fetchEventList() {
        return Api().get('eventList')
    },
    fetchSignedupEventList(params) {
        return Api().post('signedupEventList', params)
    }
}