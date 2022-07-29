<template>
  <div class="about">
    <h1>This is test view</h1>
    <input @input="inputName" placeholder="Enter your name">
    <br>
    <input @input="inputPassword" placeholder="Enter your password">
    <br>
    <button @click="registerUser">Register</button>
    <button @click="loginUser">Login</button>
    <p>{{ status }}</p>
</div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
    data() {
        return {
            status: '',
            username: '',
            password: '',
        }
    },
    methods : {
        async registerUser() {
            await UserService.addUser({
                username: this.username,
                password: this.password
            })
        },
        inputName(e) {
            this.username = e.target.value 
        },
        inputPassword(e) {
            this.password = e.target.value
        },
        async loginUser() {
            await UserService.loginUser({
                username: this.username,
                password: this.password
            })

            const response = await UserService.fetchLoginStatus()
            this.status = response.message
        }
    }
}
</script>
