<template>
    <div v-if="!fetchingData && isLoggedIn && (role == 'admin' || role == 'interviewCommittee')" class="content_container">
        <h1 style="font-family: Poppins; margin-top: 2.5%; margin-bottom: 2.5%; font-size: 64px;">Your interview schedule</h1>
        
        <div v-if="!isEmpty" class="interview_container">
            <div class="interview_row" v-for="interviewrow in interviews">
            <div class="interview_card" v-for="interview in interviewrow">
                <h2 style="color: white;"><i class="fa fa-user"></i>{{interview.interviewee}}</h2>
                <p><i class="fa fa-building"></i>{{interview.company}}</p>
                <p><i class="fa fa-user-tag"></i>{{interview.role}}</p>
                <p><i class="fab fa-discord"></i>{{interview.contactInfo}}</p>
                <p><i class="fa fa-calendar-alt"></i>{{interview.availability}}</p>
                <div class="buttons">
                    <a v-bind:id="interview.code + 1" @click="onClick($event)" class="action_button">Accept</a>
                    <a v-bind:id="interview.code + 2" @click="onClick($event)" class="action_button">Deny</a>
                    <a v-bind:id="interview.code" @click="showConfirm()" class="action_button">Done</a>
                </div>
                <p v-if="displayConfirm">By clicking done, this interview will be deleted from the database. Are you sure you want to continue ?</p>
                <div v-if="displayConfirm" class="buttons">
                    <a v-bind:id="interview.code" @click="getConfirmInput($event)" class="action_button">Yes</a>
                    <a v-bind:id="0" @click="getConfirmInput($event)" class="action_button">No</a>
                </div>
                
                <p style="text-align: center">{{message}}</p>

            </div>
            </div>
            
        </div>

        <div style="min-height: 100vh;" v-else>
            <h1>Your schedule is empty... for now</h1>
        </div>
    </div>

    <div v-if="!fetchingData && !isLoggedIn">
        <h1>You need to login first</h1>
    </div>

</template>

<script>
import InterviewService from '@/services/InterviewService';
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
    methods: {
        onClick(event) {
            const interviewCode = event.currentTarget.id.substring(0, event.currentTarget.id.length - 1)
            const status = event.currentTarget.id.slice(-1)
            const updateInterviewStatus = async() => {
                await InterviewService.updateInterviewScheduleStatus({
                    code: interviewCode,
                    status: status
                }).then(res => {
                    this.message = res.data.message
                }, err => {
                    console.log(err)
                })
            }

            updateInterviewStatus()
        },
        showConfirm() {
            this.displayConfirm = true;
        },
        async getConfirmInput(event) {
            if (event.currentTarget.id == 0) {
                this.displayConfirm = false;
            } else {
                const interviewCode = event.currentTarget.id

                await InterviewService.deleteInterview({
                    code: interviewCode
                }).then(res => {
                    this.message = res.data.message
                }, err => {
                    console.log(err)
                })
            }

        }
    },
    beforeMount() {
        const fetchData = async() => {
            await UserService.fetchUserState().then(res => {
                this.interviewer = res.data.name
                this.isLoggedIn = res.data.isLoggedIn
                this.email = res.data.email
            })

            await UserService.getUserRole({email : this.email }).then(res => {
                console.log(res)
                this.role = res.data.role
            })

            await InterviewService.getInterviewerSchedule().then(res => {
                if (res.data.length != 0) {
                    var size = 0;
                var interviewRow = []
                for (var i = 0; i < res.data.length; i++) {
                    interviewRow.push({
                        code: res.data[i].code,
                        interviewee: res.data[i].interviewee,
                        role: res.data[i].role,
                        company: res.data[i].company,
                        availability: res.data[i].availability,
                        contactInfo: res.data[i].contactInfo
                    })
                    size++
                    if (size == 2){
                        size = 0
                        this.interviews.push(interviewRow)
                        interviewRow = []
                    } else if (i == res.data.length - 1) {
                        this.interviews.push(interviewRow)
                    }
                }
                } else {
                    this.isEmpty = true;
                }
                
                this.fetchingData = false;
            }, err => {
                console.log(err)
            })
        }

        fetchData()
    }
}
</script>

<style>

.interview_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
}

.interview_container .interview_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.interview_container .interview_row .interview_card {
    background-color: #2E2E2F;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    width: 400px;
}

.interview_container .interview_row .interview_card i {
    margin-right: 10px;
    margin-left: 0;
}

.interview_container .interview_row .interview_card h2 {
    font-family: Poppins;
    margin-left: 5px;
    margin-right: 5px;
}

.interview_container .interview_row .interview_card p {
    font-family: Poppins;
    color: white;
    text-align: left;
    margin-left: 5px;
    margin-right: 5px;    
}

.interview_container .interview_row .interview_card .buttons {
    margin-bottom: 10px;
}

.interview_container .interview_row .interview_card a.action_button {
    text-decoration: none;
    font-family: Poppins;
    color: white;
    background-color: red;
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 5px;
    padding-bottom:5px;
    padding-left: 7.5px;
    padding-right: 7.5px;
    border-radius: 5px;
}

.interview_container .interview_row .interview_card a.action_button:hover {
    cursor: pointer;
    background-color: darkred;
}

@media screen and (max-width: 650px) {
    .interview_container .interview_row {
        display: flex;
        flex-direction: column;
    }
}
</style>