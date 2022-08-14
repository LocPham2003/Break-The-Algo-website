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
    getEventByCode(params) {
        return Api().post('getEventByCode', params)
    },
    updateEvent(params) {
        return Api().post('updateEvent', params)
    },
    fetchEventList() {
        return Api().get('eventList')
    },
    fetchSignedupEventList(params) {
        return Api().post('signedupEventList', params)
    }
}