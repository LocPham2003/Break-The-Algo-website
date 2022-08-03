<template>
    <div>
        <h1>User has logged in</h1>
        <button @click="fetchLoginState">Display State</button>
        <button @click="logOut">Log out</button>
        <p style="color: white; font-size: 50px">{{ isLoggedIn }}</p>
        <p style="color: white; font-size: 50px">{{ detectedUsername }}</p>
        <p style="color: white; font-size: 50px">{{ message }}</p>
    </div>

    <div v-if="isLoggedIn">
        <p>You can only see this if you have logged in</p>
    </div>

    <div v-else>
        <p>You need to log in first</p>
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    name: 'MemberHome',
    data() {
        return {
            isLoggedIn: false,
            detectedUsername: '',
            message: ''
        }
    }, 
    methods: {
        // Run this function when this view loads
        async fetchLoginState() {
            const response = await UserService.fetchLoginState()
            console.log(response)
            console.log(response.data.isLoggedIn)
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