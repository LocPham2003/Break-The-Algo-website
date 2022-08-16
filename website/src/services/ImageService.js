import Api from "./Api";

export default {
    uploadImage(params) {
        return Api().post('uploadImage', params)
    },
    findImageByCode(params) {
        return Api().post('findImageByCode', params)
    },
    updateImageByCode(params) {
        return Api().post('updateImageByCode', params)
    },
    deleteImageByCode(params) {
        return Api().post('deleteImageByCode', params)
    },
    getImage() {
        return Api().get('getImage')
    }
}