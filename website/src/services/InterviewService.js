import Api from "./Api";

export default {
    scheduleInterview(params) {
        return Api().post('scheduleInterview', params)
    }
}