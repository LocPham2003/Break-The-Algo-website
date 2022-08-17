import Api from "./Api";

export default {
    nominationCreate(params) {
        return Api().post('nominationCreate', params)
    },
    getPendingNominations(params) {
        return Api().post('getPendingNominations', params)
    },
    getNominations() {
        return Api().get('getNominations')
    },
    updateNomination(params) {
        return Api().post('updateNomination', params)
    }
}