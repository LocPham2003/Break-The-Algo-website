import Api from "./Api";

export default {
    scheduleInterview(params) {
        return Api().post('scheduleInterview', params)
    },
    getIntervewSchedule(params) {
        return Api().post('getInterviewSchedule', params)
    }
}