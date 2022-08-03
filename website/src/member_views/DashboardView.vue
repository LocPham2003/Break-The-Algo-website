<template>
    <h1 v-if="isLoggedIn">This is a dashboard</h1>
    <h1 v-else>You need to login</h1>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    name: 'Dashboard',
    data() {
        return {
            isLoggedIn: false,
            detectedUsername: '',
            message: ''
        }
    }, 
    methods: {
        reloadPage() {
            console.log("Reloading")
            window.location.reload();  
        },
        // Run this function when this view loads
        async fetchLoginState() {
            const response = await UserService.fetchLoginState()
            this.isLoggedIn = response.data.isLoggedIn
            this.detectedUsername = response.data.detectedUsername
        },
        async logOut() {
            const response = await UserService.logoutUser()
            this.isLoggedIn = response.data.isLoggedIn
            this.message = response.data.message
        }
    },
    beforeMount() {
        this.fetchLoginState()
    }
}
</script>