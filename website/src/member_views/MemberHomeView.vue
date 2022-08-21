<template>
    <h1 v-if="fetchingData">Loading your homescreen...</h1>
    <div v-if="!fetchingData && isLoggedIn === true">
        <h1>Welcome back, {{ name }}</h1>
        <h2>Your role is {{ role }}</h2>
    </div>

    <div v-if="!fetchingData && !isLoggedIn">
        <h1>You need to login first</h1>
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
            fetchingData: true,
            name: '',
            message: ''
        }
    }, 
    methods: {
        // Run this function when this view loads
        async fetchUserState() {
            await UserService.fetchUserState().then(res => {
                this.fetchingData = false
                this.isLoggedIn = res.data.isLoggedIn
                this.role = res.data.role
                this.name = res.data.name
            })
        }
    },
    created() {
        this.fetchUserState() 
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