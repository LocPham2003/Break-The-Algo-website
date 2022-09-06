<template>
    <div class="change_password_container">
        <h1 style="font-family: Poppins; margin-top: 2.5%; margin-bottom: 2.5%;">Change your password</h1>
        
        <h2>Email address</h2>
        <input type="email" v-bind:id="0" @input="getData">

        <h2>Current password</h2>
        <input type="password" v-bind:id="1" @input="getData">

        <h2>New password</h2>
        <input type="password" v-bind:id="2" @input="getData">

        <h2>Retype new password</h2>
        <input type="password" v-bind:id="3" @input="getData">
        
        <a class="submit_button" @click="submit">Submit</a>
        <p style=" color: white; font-size: 30px; font-family: Poppins; margin-bottom: 2.5%;">{{message}}</p>    
        
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            email: '',
            currentPassword: '',
            newPassword: '',
            newPasswordReEntry: '',
            message: ''
        }
    },
    // Still need to implement the backend function
    methods: {
        getData(e) {
            switch(parseInt(e.target.id)) {
                case 0:
                    this.email = e.target.value;
                    break;
                case 1:
                    this.currentPassword = e.target.value
                    break
                case 2:
                    this.newPassword = e.target.value
                    break
                case 3:
                    this.newPasswordReEntry = e.target.value
                    break
            }
        },
        async submit() {
            if (!this.email || !this.currentPassword || !this.newPassword || !this.newPasswordReEntry) {
                this.message = 'Please fill in all fields!'
            } else {
                UserService.changePassword({
                    email : this.email,
                    currentPassword : this.currentPassword,
                    newPassword : this.newPassword,
                    newPasswordReEntry : this.newPasswordReEntry
                }).then(res => {
                    this.message = res.data.message
                }, (err => {
                    this.message = err.response.data.message
                })
            )
            }
           
        }
    }
}
</script>

<style>
.change_password_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.change_password_container h2 {
    font-family: Poppins;
    color: white;
    margin: 10px;
    text-align: center;
    width: 100%;
}

.change_password_container input {
    background-color: rgb(32,32,32);
    border: 1px solid white;
    color: white;
    width: 50%;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
}
</style>