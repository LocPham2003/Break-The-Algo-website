<template>
    <h1>Your dashboard</h1>
    <div v-if="isLoggedIn" class="dashboard_container">
        <div class="row_container">
            <div id="1" @click="onClick($event)" class="utility">
                <i class="fa fa-user"></i>
                <p>User info</p>
            </div>
            <div id="2" @click="onClick" class="utility">
                <i class="fa fa-calendar"></i>
                <p>Your events</p>
            </div>
            <div id="3" @click="onClick" class="utility">
                <i class="fa fa-folder"></i>
                <p>Resources</p>
            </div>
            <div id="4" @click="onClick" class="utility">
                <i class="fa fa-calendar-check"></i>
                <p>Mock Interview</p>
            </div>
            <div id="5" @click="onClick" class="utility">
                <i class="fa fa-star"></i>
                <p>Nominate</p>
            </div>
        </div>

        <div v-if="role===0 || role===1" class="row_container">
            <div id="6" @click="onClick" class="utility">
                <i class="fa fa-list"></i>
                <p>Schedule</p>
            </div>
            <div id="7" @click="onClick" class="utility">
                <i class="fa fa-clock"></i>
                <p>History</p>
            </div>
        </div>

        <div v-if="role===0 || role===2" class="row_container">
            <div id="8" @click="onClick" class="utility">
                <i class="fa fa-calendar-plus"></i>
                <p>Post an event</p>
            </div>
            <div id="9" @click="onClick" class="utility">
                <i class="fa fa-calendar-plus"></i>
                <p>Manage Events</p>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
    name: 'Dashboard',
    data() {
        return {
            isLoggedIn: '',
            role: 0,
            isTasked: false, // Is tasked means check if one of the button is clicked
            detectedUsername: '',
            message: ''
        }
    }, 
    methods: {
        /**
         * This functions handle the click event of buttons on the dashboard
         * Buttons are distinguishable by ids, based on the id of the clicked button, it can do specific task.
         * Id as tasks as follows:
         * 1 - Take user to the user info page
         * 2 - Show user registered events
         * 3 - Show available resources
         * 4 - Schedule a mock interview 
         * 5 - Nominate themselves to be featured on the website
         * 6 - Display interviews to be conducted (exclusive to InterviewCommittee)
         * 7 - Show history of interviews (exclusive to InterviewCommittee)
         * 8 - Post an event (exclusive to ActivityCommittee)
         * 9 - Manage events (exclusive to ActivityCommittee)
         */
        onClick(event) {
            switch(parseInt(event.currentTarget.id)) {
                case 1:
                    this.$router.push({name: 'userInfo'})
                    break;
                case 2:
                    // Need to finish all other cases
                    this.$router.push({name: 'userEvents'})
                    break;
                case 3:
                    this.$router.push({name: 'resources'})
                    break;
                case 4:
                    this.$router.push({name: 'mockInterview'})
                    break;
                case 5:
                    this.$router.push({name: 'nominate'})
                    break;
                case 6:
                    this.$router.push({name: 'schedule'})
                    break;
                case 7:
                    this.$router.push({name: 'history'})
                    break;
                case 8: 
                    this.$router.push({name: 'postEvent'})
                    break;
                case 9: 
                    this.$router.push({name: 'manageEvent'})
                    break;

            }
        }
    },
    beforeMount() {
        const fetchData = async () => {
            const response = await UserService.fetchUserState()
            this.isLoggedIn = response.data.isLoggedIn
            this.detectedUsername = response.data.detectedUsername

            /**
             * The role system: Assign the role variable with a number that corresponds to the detected role of the user in the database
             * If admin -> role = 0
             * If interviewCommittee -> role = 1
             * If activityCommittee -> role = 2
             */
            switch(response.data.role) {
                case "admin":
                    this.role = 0;
                    break;
                case "interviewCommittee":
                    this.role = 1;
                    break;
                case "activityCommittee":
                    this.role = 2;
                    break;
            }
        }
        fetchData()
    }
}
</script>

<style>

h1 {
    font-family: Jeko;
}

div.dashboard_container div.row_container {
    display: flex;
    flex-direction: row;
    font-family: Poppins;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin: 10px;
}

div.dashboard_container div.row_container div.utility {
    background-color: red;
    color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 150px;
    height: 150px;
    padding: 10px;
    text-align: center;
}

div.dashboard_container div.row_container div.utility:hover {
    background-color: darkred;
    cursor: pointer;
}

div.dashboard_container div.row_container div.utility i {
    display: block;
    font-size: 20px;
    margin-top: 10%;
    margin-bottom: 20px;
}

div.dashboard_container div.row_container div.utility p {
    font-size: 16px;
    font-family: Poppins;
    margin-bottom: 10%;
}

div.row_container div.utility p:hover {
    cursor: pointer;
}

@media screen and (max-width: 650px) {
    div.dashboard_container div.row_container {
        flex-direction: column;
    }

    div.dashboard_container div.row_container div.utility {
        width: 80%;
    }
}
</style>