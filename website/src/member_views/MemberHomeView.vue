<template>
    <h1 v-if="fetchingData">Loading your homescreen...</h1>
    <div class="member_home_container" v-if="!fetchingData && isLoggedIn === true">
        <h1>Welcome back, {{ name }}</h1>
        <div class="member_home_content_container">
            <div class="job_postings_and_leetcode">
                <h1>Daily problems</h1>
                <h3>Computer Science<i class="fa fa-laptop"></i></h3>
                <p>Please check #daily_problem channel from the #programming category in our discord server!</p>
                <!-- <a class="problem_link" href="">Leetcode link</a> -->
                <h3>Data Science<i class="fa fa-database"></i></h3>
                <p>Please check #daily_problem channel from the data_science category in our discord server!</p>

                <h1>Feedback</h1>
                <p>If you think the website can be done better or you would like to report a bug, please do so by clicking <a href="" style="color: white; text-decoration: underline;">here</a></p>
            </div>
            <div class="instruction_and_feedback">
                <h1>Website instruction</h1>
                <p>This is the first version of the BTA website. There are plenty of functionalities that you can try out.</p>
                <p>You can find most of these functionalities by navigating to your dashboard, which can be done by clicking the member button on the screen</p>
                <p>Here is an explanation of the website functionalities (found in the dashboard):</p>
                <p>- User info: View your credentials</p>
                <p>- Your events: View the list of events you have signed up for</p>
                <p>- Resources: Educational materials that help you succeed in your career. Contributed from our community</p>
                <p>- Mock interview: Schedule an interview with an experienced student/ employee in our community</p>
                <p>- Nominate: Nominate a member to be featured on our website</p>
            </div>
        </div>
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

<style>
.member_home_container {
    min-height: 100vh;
    margin: 2.5% 5% 100px 5%;
}

.member_home_container i {
    margin: 5px;
    text-align: center;
    display: inline-block;
}

.member_home_container h1 {
    font-family: Poppins;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
}

.member_home_container h3 {
    font-family: Poppins;
    color: white;
    text-align: left;
    margin: 10px;
}

.member_home_container p {
    color: white;
    margin: 10px;
    text-align: left;
    font-family: Poppins;
}

.member_home_content_container {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.member_home_content_container .job_postings_and_leetcode {
    flex: 1;
    width: 40%;
    background-color: #2E2E2F;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
}

.member_home_content_container .job_postings_and_leetcode a.problem_link {
    width: 100%; color: white; 
    background-color: red; 
    padding: 5px 10px; 
    margin: 10px; 
    border-radius: 10px; 
    font-family: Poppins; 
    text-decoration: none;
    text-align: left;
}

.member_home_content_container .job_postings_and_leetcode a.problem_link:hover {
    background-color: darkred;
    color: white;
}

.member_home_content_container .instruction_and_feedback {
    flex: 1;
    width: 60%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    background-color: #2E2E2F;
}

.member_home_content_container .instruction_and_feedback ul {
    margin: 0;
    padding: 0;
}

.member_home_content_container .instruction_and_feedback ul li {
    color: white;
    text-align: left;
    font-family: Poppins;
}

@media screen and (max-width: 700px) {
    .member_home_content_container {
        flex-direction: column;
    }

    .member_home_content_container .job_postings_and_leetcode {
        width: 100%;
    }

    .member_home_content_container .instruction_and_feedback {
        width: 100%;
    }
}


</style>