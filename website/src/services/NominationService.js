import Api from "./Api";

export default {
    nominationCreate(params) {
        return Api().post('nominationCreate', params)
    },
    getNominations() {
        return Api().get('getNominations')
    }
}