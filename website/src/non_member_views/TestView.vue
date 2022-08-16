<template>
    <div>
        <form enctype="multipart/form-data">
            <input @change="onSelect" ref="file" style="color: white;" type="file">
        </form>
        <button @click="submit">Submit</button>

        </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
export default {
    data() {
        return {
            status: '',
            username: '',
            password: '',
            image: ''
        }
    },
    methods : {
        onSelect() {
            const image = this.$refs.file.files[0]
            this.image = image
        },
        async submit() {
            const formData = new FormData()
            formData.append('image', this.image)
            try {
                await ImageService.uploadImage(formData)
            } catch (err) {
                console.log(err)
            }
        }

    }
}
</script>
