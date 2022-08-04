<template>
    <div v-if="isLoggedIn === true">
        <h1>Welcome back, {{ name }}</h1>
        <h2>Your role is {{ role }}</h2>
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    name: 'MemberHome',
    data() {
        return {
            isLoggedIn: '',
            role: '',
            name: '',
            message: ''
        }
    }, 
    methods: {
        // Run this function when this view loads
        async fetchLoginState() {
            const response = await UserService.fetchLoginState()
            this.isLoggedIn = response.data.isLoggedIn
            this.role = response.data.role
            this.name = response.data.name
        }
    },
    created() {
        this.fetchLoginState() 
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