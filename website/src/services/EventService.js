import Api from "./Api";

export default {
    eventRegister(params) {
        return Api().post('eventRegister', params)
    },
    fetchEventList() {
        return Api().get('eventList')
    }
}