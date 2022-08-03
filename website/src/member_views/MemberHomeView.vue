<template>
    <h1 v-if="isLoggedIn">Welcome back, {{ detectedName }}</h1>
    <h1 v-else>Not authenticated, please log in</h1>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    name: 'MemberHome',
    data() {
        return {
            isLoggedIn: false,
            detectedName: '',
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
            this.detectedName = response.data.name
        },
        async logOut() {
            const response = await UserService.logoutUser()
            this.isLoggedIn = response.data.isLoggedIn
            this.message = response.data.message
        }
    },
    beforeMount() {
        this.fetchLoginState() 
    },
    // Mounted is when all components are rendered in the website, so we want to reload the page to update the navigation bar
    mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        window.location.reload();
    }
    }
}
</script>