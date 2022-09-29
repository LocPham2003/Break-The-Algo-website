<template>
    <div v-if="!fetchingData && isLoggedIn && (role == 'admin' || role == 'interviewCommittee')" style="min-height: 100vh;">
        <h1 style="font-family: Poppins; margin-top: 2.5%; margin-bottom: 2.5%; font-size: 64px;">Past interviews</h1>
        <h2 style="font-family: Poppins; color: white;">There are currently no past interviews</h2>
    </div>

</template>

<script>
import UserService from '@/services/UserService';
    export default {
        data() {
            return {
                interviewer: '',
                interviews: [],
                email: '',
                role: '',
                isLoggedIn: false,
                fetchingData: true,
                isEmpty: false,
                displayConfirm: false,
                message: ''
            }
        },
        beforeMount() {
            const fetchData = async() => {
                await UserService.fetchUserState().then(res => {
                    this.interviewer = res.data.name
                    this.isLoggedIn = res.data.isLoggedIn
                    this.email = res.data.email

                    UserService.getUserRole({email : this.email }).then(res => {
                        console.log(res)
                        this.role = res.data.role
                    })
                    this.fetchingData = false;
                })
            }
    
            fetchData()
        }
    }
    </script>