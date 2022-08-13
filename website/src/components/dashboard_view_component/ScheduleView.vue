<template>
    <div v-if="!fetchingData && isLoggedIn" class="content_container">
        <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Upcoming interviews</h1>
        
        <div v-if="!isEmpty" class="interview_container">
            <div class="interview_row" v-for="interviewrow in interviews">
            <div class="interview_card" v-for="interview in interviewrow">
                <h2 style="color: white;"><i class="fa fa-user"></i>{{interview.interviewee}}</h2>
                <p><i class="fa fa-building"></i>{{interview.company}}</p>
                <p><i class="fa fa-user-tag"></i>{{interview.role}}</p>
                <p><i class="fa fa-calendar-alt"></i>{{interview.date}} - {{interview.time}}</p>

                <div class="buttons">
                    <a class="action_button">Accept</a>
                    <a class="action_button">Transfer</a>
                    <a class="action_button">Deny</a>
                </div>
            </div>
            </div>
            
        </div>

        <div v-else>
            <h1>Your schedule is empty... for now</h1>
        </div>
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
            isLoggedIn: false,
            fetchingData: true,
            isEmpty: false
        }
    },
    methods: {

    },
    beforeMount() {
        const fetchData = async() => {
            await UserService.fetchUserState().then(res => {
                this.interviewer = res.data.name
                this.isLoggedIn = res.data.isLoggedIn
            })

            await InterviewService.getIntervewSchedule({
                interviewer: this.interviewer
            }).then(res => {
                if (res.data.length != 0) {
                    var size = 0;
                var interviewRow = []
                for (var i = 0; i < res.data.length; i++) {
                    interviewRow.push({
                        interviewee: res.data[i].interviewee,
                        role: res.data[i].role,
                        company: res.data[i].company,
                        date: res.data[i].date,
                        time: res.data[i].time
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
    justify-content: center;
    align-items: center;
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

.interview_container .interview_row .interview_card a.action_button {
    text-decoration: none;
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