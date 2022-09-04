import Api from "./Api";

export default {
    scheduleInterview(params) {
        return Api().post('scheduleInterview', params)
    },
    getInterviewerSchedule() {
        return Api().get('getInterviewerSchedule')
    },
    getIntervieweeSchedule(params) {
        return Api().post('getIntervieweeSchedule', params)
    },
    updateInterviewScheduleStatus(params) {
        return Api().post('updateInterviewScheduleStatus', params)
    },
    deleteInterview(params) {
        return Api().post('deleteInterview', params)
    }
}