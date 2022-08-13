import Api from "./Api";

export default {
    nominationCreate(params) {
        return Api().post('nominationCreate', params)
    }
}