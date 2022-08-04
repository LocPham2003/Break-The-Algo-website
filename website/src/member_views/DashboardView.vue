<template>
    <h1 v-if="isLoggedIn === true">This is a dashboard</h1>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    name: 'Dashboard',
    data() {
        return {
            isLoggedIn: '',
            role: '',
            detectedUsername: '',
            message: ''
        }
    }, 
    methods: {
        checkLoginState() {
            if(!this.isLoggedIn) {
                this.$router.push({name: 'test'})
            }
        }
    },
    beforeMount() {
        const fetchData = async () => {
            const response = await UserService.fetchLoginState()
            this.isLoggedIn = response.data.isLoggedIn
            this.detectedUsername = response.data.detectedUsername
        }

        fetchData()
    }
}
</script>