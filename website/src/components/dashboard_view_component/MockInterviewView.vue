<template>
    <div v-if="!fetchingData && isLoggedIn" class="mock_interview_container">
            <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Schedule your mock interview</h1>
            <h5>Pick a date within the next 2 weeks</h5>
            <input placeholder="Enter your available date here (e.g Jul 10)" v-bind:id="0" @input="getData">
            <h5>Pick your available time</h5>
            <input placeholder="Enter your available time here" v-bind:id="1" @input="getData">
        
            <h5>Company name</h5>
            <input placeholder="Enter your company name here" v-bind:id="2" @input="getData">

            <h5>Role</h5>
            <input placeholder="Enter your role here (e.g: SWE intern, AI intern, etc)" v-bind:id="3" @input="getData">


            <h5>Selected Interviewer: {{selectedInterviewer}}</h5>  

            <div class="dropdown">
            <button class="dropbtn">Pick your interviewer</button>
            <div class="dropdown-content">
                <a id="0" @click="onClick($event)">Yusef Ahmed <br> (Computer Science)</a>
                <a id="1" @click="onClick($event)">Asfandyar Azhar <br>  (Data Science)</a>
                <a id="2" @click="onClick($event)">Jeroen Schols <br> (Computer Science)</a>
            </div>
            </div>

            <a class="submit_button" @click="submit">Submit</a>
            <h5>{{message}}</h5>
        </div>    
</template>

<script>
import InterviewService from '@/services/InterviewService'
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            interviewers: ["Yusef Ahmed", "Asfandyar Azhar", "Jeroen Schols"],
            selectedInterviewer: '',
            date: '',
            time: '',
            company: '',
            interviewee: '',
            role: '',
            message: '',
            fetchingData: true
        }
    },
    methods: {
        onClick(event) {
            this.selectedInterviewer = this.interviewers[parseInt(event.currentTarget.id)]
        },
        async submit() {
            await InterviewService.scheduleInterview({
                date: this.date,
                time: this.time,
                company: this.company,
                interviewer: this.selectedInterviewer,
                interviewee: this.interviewee,
                role: this.role
            }).then(res => {
                this.message = res.data.message
            }, err => {
                console.log(err)
            })
        },
        getData(e) {
            switch(parseInt(e.target.id)) {
                case 0: 
                    this.date = e.target.value
                    break;
                case 1: 
                    this.time = e.target.value;
                    break;
                case 2: 
                    this.company = e.target.value;
                    break;
                case 3:
                    this.role = e.target.value;
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
        }
        
        fetchData()
    }
}
</script>

<style>

.mock_interview_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    border-radius: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
}

.dropbtn {
  background-color: red;
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
</style>