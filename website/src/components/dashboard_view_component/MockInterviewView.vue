<template>
    <div class="header_container">
        <a class="event_selector" id="0" @click="selectTab($event)">Schedule an interview</a>
        <svg width="2.5" height="40px">
            <rect width="2.5" height="100" style="fill:white;stroke-width:0;stroke:rgb(0,0,0)" />
        </svg>
        <a class="event_selector" id="1" @click="selectTab($event)">Upcoming interviews</a> 
    </div>
    <div v-if="!fetchingData && isLoggedIn && selectedTab === 0" class="mock_interview_container">
            <h5>Enter (maximum) 5 different dates and time over the next 2 weeks to have your interview</h5>
            <textarea placeholder="Enter your availability as the following format: 
- Monday 16th November - 10am-5pm CET 
- Tuesday 17th November - 11am-3pm CET" v-bind:id="0" @input="getData"></textarea>
            
            <h5>Company name</h5>
            <input placeholder="Enter your company name here" v-bind:id="1" @input="getData">

            <h5>Role</h5>
            <input placeholder="Enter your role here (e.g: SWE intern, AI intern, etc)" v-bind:id="2" @input="getData">

            <h5>Discord account name</h5>
            <input placeholder="Enter your discord account name" v-bind:id="3" @input="getData">

            <h5>Selected Interviewer: {{selectedInterviewer}}</h5>  

            <div class="dropdown">
            <button class="dropbtn">Pick your interviewer</button>
            <div class="dropdown-content">
                <a id="0" @click="onClick($event)">Yusef Ahmed <br> (Computer Science)</a>
                <a id="1" @click="onClick($event)">Asfandyar Azhar <br>  (Data Science)</a>
                <a id="2" @click="onClick($event)">Jeroen Schols <br> (Computer Science)</a>
                <a id="3" @click="onClick($event)">All interviewers</a>
            </div>
            </div>
            
            <a class="submit_button" @click="submit">Submit</a>
            <h5 style="margin-bottom: 100px;">{{message}}</h5>
        </div>
        
        <div v-if="!fetchingData && isLoggedIn && selectedTab === 1" class="mock_interview_container">
            <div class="interviewee_container">
            <h1 v-if="interviews.length === 0" style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">You have no upcoming interviews</h1>
            <div class="interviewee_row" v-for="interviewrow in interviews">
            <div class="interviewee_card" v-for="interview in interviewrow">
                <h2 style="color: white;"><i class="fa fa-user"></i>{{interview.interviewer}}</h2>
                <p><i class="fa fa-building"></i>{{interview.company}}</p>
                <p><i class="fa fa-user-tag"></i>{{interview.role}}</p>
                <p><i class="fa fa-calendar-alt"></i>{{interview.availability}}</p>
                <p><i class="fa fa-file"></i>{{interview.status}}</p>
            </div>
            </div>
            
        </div>
        </div>    
</template>

<script>
import InterviewService from '@/services/InterviewService'
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            interviewers: ["Yusef Ahmed", "Asfandyar Azhar", "Jeroen Schols", "All"],
            selectedInterviewer: '',
            selectedTab: 0,
            availability: '',
            company: '',
            interviewee: '',
            contactInfo: '',
            role: '',
            message: '',
            interviews: [],
            fetchingData: true
        }
    },
    methods: {
        onClick(event) {
            this.selectedInterviewer = this.interviewers[parseInt(event.currentTarget.id)]
        },
        selectTab(event) {
            this.selectedTab = parseInt(event.currentTarget.id)
        },
        async submit() {
            // We have the following system to represent the status of the interview
            // If status = 0, means the interview is waiting for the response of the interviewer
            // If status = 1 means the interviewer accepts the interview with the given details
            // If status = 2 means the interviewer transfered the interview to another interviewer or propose an update for the interview (can be discussed via discord)
            await InterviewService.scheduleInterview({
                availability: this.availability,
                company: this.company,
                interviewer: this.selectedInterviewer,
                interviewee: this.interviewee,
                role: this.role,
                contactInfo: this.contactInfo,
                status: "0"
            }).then(res => {
                this.message = res.data.message
            }, err => {
                console.log(err)
            })
        },
        getData(e) {
            switch(parseInt(e.target.id)) {
                case 0: 
                    this.availability = e.target.value
                    break;
                case 1: 
                    this.company = e.target.value;
                    break;
                case 2:
                    this.role = e.target.value;
                    break;
                case 3: 
                    this.contactInfo = e.target.value;
                    break;
            }
        }
    },
    beforeMount() {
        const fetchData = async() => {
            await UserService.fetchUserState().then(res => {
                this.isLoggedIn = res.data.isLoggedIn
                this.interviewee = res.data.name
                this.fetchingData = false
            })

            await InterviewService.getIntervieweeSchedule({ interviewee: this.interviewee }).then(res =>{
                if (res.data.length != 0) {
                    var size = 0;
                    var interviewRow = []
                for (var i = 0; i < res.data.length; i++) {
                    var parsedStatus = ""

                    switch(parseInt(res.data[i].status)) {
                        case 0:
                            parsedStatus = "Waiting for interviewer response"
                            break;
                        case 1:
                            parsedStatus = "Interviewer has accepted your interview request"
                            break;
                        case 2:
                            parsedStatus = "Interviewer has denied your interview request"
                            break;
                    }


                    interviewRow.push({
                        interviewer: res.data[i].interviewer,
                        role: res.data[i].role,
                        company: res.data[i].company,
                        availability: res.data[i].availability,
                        status: parsedStatus
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
                } 
            }, err => {
                console.log(err)
            })
        }
        
        fetchData()
    }
}
</script>

<style>

.mock_interview_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
}

.mock_interview_container h5 {
    color: white;
    font-family: Poppins;
    width: 80%;
    margin-bottom: 10px;
    margin-top: 10px;
}

.mock_interview_container input {
    background-color: rgb(32,32,32);
    border: 1px solid white;
    color: white;
    width: 50%;
    height: 40px;
    padding-left: 10px;
    margin-bottom: 10px;
}

.mock_interview_container textarea {
    background-color: rgb(32,32,32);
    border: 1px solid white;
    color: white;
    width: 50%;
    height: fit-content;
    padding-left: 10px;
    margin-bottom: 10px;
}

.dropbtn {
  background-color: red;
  font-family: Poppins;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  width: 300px;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  font-family: Poppins;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding-left: 30px;
  padding-right: 30px;
  text-decoration: none;
  font-size: 15px;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
    background-color: red;
    color: white;
    cursor: pointer;
    border-radius: 10px;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: darkred;
}

.mock_interview_container a.submit_button {
    background-color: red;
    font-family: Poppins;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: 20px;
}

.mock_interview_container a.submit_button:hover {
    background-color: darkred;
    color: white;
}

.interviewee_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.interviewee_container .interviewee_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.interviewee_container .interviewee_row .interviewee_card {
    background-color: #2E2E2F;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    width: 400px;
}

.interviewee_container .interviewee_row .interviewee_card i {
    margin-right: 10px;
    margin-left: 0;
}

.interviewee_container .interviewee_row .interviewee_card h2 {
    font-family: Poppins;
    margin-left: 5px;
    margin-right: 5px;
}

.interviewee_container .interviewee_row .interviewee_card p {
    font-family: Poppins;
    color: white;
    text-align: left;
    margin-left: 5px;
    margin-right: 5px;    
}

@media screen and (max-width: 650px) {
    .interviewee_container .interviewee_row {
        display: flex;
        flex-direction: column;
    }
}
</style>