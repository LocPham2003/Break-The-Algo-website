<template>
    <div class="card" style="width: 80vw; height: fit-content">
        <div class="card_title">
            <img v-bind:src="image" alt="company logo">
            <svg width="1" height="40px">
                <rect width="1" height="100" style="fill:#696969;stroke-width:0;stroke:rgb(0,0,0)" />
            </svg>
            <h5 class="event_title">{{title}} - {{code}}</h5>
        </div>
        <div class="card_body">
            <div class="card_body_time">
                <h5>Start:</h5>
                <p>{{startTime}}</p>

                <h5>End:</h5>
                <p>{{endTime}}</p>

                <h5>Location:</h5>
                <p>{{location}}</p>
            </div>

            <div class="card_body_description">
                <p>{{description}}</p>
            </div>

            <div class="card_body_date">
                <div class="date">
                     <h3>{{startMonth}}</h3>
                    <h5>{{startDate}}</h5>
                </div>

                <div class="sign_up_button">
                    <a v-if="!isSignedUp" @click="handleRegister" href="#">Sign up</a>
                    <a v-else @click="handleRegister" href="#">De-register</a>
                </div>
            </div>
        </div>   
    <p v-if="show" style="color: white; font-size: 30px; font-family: Jeko;">{{status}}</p>
    </div>
</template>

<script>
import EventService from '@/services/EventService'
import UserService from '@/services/UserService'

export default {
    name: "EventCard",
    props: ["email", "name", "studyMajor", "title", "image", "description", "startTime", "endTime", "location", "startMonth", "startDate", "code", "isLoggedIn", "isSignedUp"],
    data() {
        return {
            status: '',
            show: false
        }
    }, 
    methods: {
        handleRegister() {
            if (this.isLoggedIn) {
                this.sendEventRegisterRequest()
            } else {
                // Take the user to a page for the user to fill in their credentials
                this.$router.push({name: "eventRegister"})
            }
        }, 
        async sendEventRegisterRequest() {
            if (!this.isSignedUp) {
                await EventService.eventRegister({
                    code: this.code,
                    name: this.name,
                    studyMajor: this.studyMajor,
                    email: this.email
                }).then(res => {
                    this.show = true
                    this.status = res.data.message
                    setTimeout(() => this.$router.go(), 1500);
                }, err => {
                    this.status = err.response.data.message
                })

                await UserService.userSignUpEvent({
                    email: this.email,
                    code: this.code
                })
            } else {
                await EventService.eventDeregister({
                    code: this.code,
                    name: this.name,
                    studyMajor: this.studyMajor,
                    email: this.email
                }).then(res => {
                    this.show = true
                    this.status = res.data.message
                    setTimeout(() => this.$router.go(), 1500);
                }, err => {
                    this.status = err.response.data.message
                })

                await UserService.userDeregisterEvent({
                    code: this.code,
                    email: this.email
                })
            }
        }        
    }
}
</script>

<style>
    div.card {
        background-color: #2E2E2F;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        margin: 2.5vh;
        padding: 15px;
        border-radius: 10px;
        font-family: Poppins;
    }

    div.card div.card_title {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        flex-basis: 20%;
        margin: 0;
    }

    div.card div.card_title h5.event_code {
        margin-right: 15px;
        margin-left: auto;
    }

    div.card div.card_title img {
        width: 32px;
        height: 32px;
        margin-top: 0;
        padding: 0;
        margin-right: 15px;
    }

    div.card div.card_title h5 {
        font-size: 24px;
        margin-top: 10px;
        margin-left: 15px;
        display: block;
        text-align: left;
    }

    div.card div.card_body {
        color: white;
        flex-basis: 80%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;
        padding-top: 10px;
    }


    div.card div.card_body div.card_body_time {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        margin-right: 5%;
    }

    div.card div.card_body div.card_body_time h5 {
        text-align: left;
        font-size: 12.5px;
        font-weight: bolder;
        margin-top: 5px;
        margin-bottom: 4px;
    }

    div.card div.card_body div.card_body_time p {
        text-align: left;
        margin: 0;
        font-size: 15px;
        text-decoration: none;
    }

    div.card div.card_body div.card_body_description {
        width: 60%;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.card div.card_body div.card_body_description p {
        text-align: left;
        font-size: 12.5px;
    }

    div.card div.card_body div.card_body_description p {
        text-align: left;
    }

    div.card div.card_body div.card_body_date{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: -2.5%;
        margin-left: 2.5%;
        align-items: center;
        margin-bottom: 0;
        width: 20%;
    }

    div.card div.card_body div.card_body_date h3{
        margin-bottom: 10%;
    }

    div.card div.card_body div.card_body_date h5{
        margin-bottom: 25%;
    }

    div.card div.card_body div.card_body_date a{
        background-color: red;
        text-decoration: none;
        color: white;
        padding: 7.5px;
        border-radius: 5px;
    }

    div.card div.card_body div.card_body_date a:hover{
        background-color: darkred;
        transition: all 0.1s ease-in;
    }

    @media screen and (max-width: 650px) {
        div.card {
            flex-direction: column;
        }

        div.card div.card_body {
            flex-direction: column;
        }

        div.card div.card_body div.card_body_description {
            display: none;
        }

        div.card div.card_body div.card_body_date {
            margin-top: 5%;
            flex-direction: row;
            justify-content: center;
            margin-top: 5%;
            align-items: center;
            margin-bottom: 0;
        }  

        div.card div.card_body div.card_body_date div.sign_up_button {
            margin-left: auto;
            margin-right: 0;
        }  

    }

</style>