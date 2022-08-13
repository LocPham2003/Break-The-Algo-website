<template>
    <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 2.5%;">Register for Event</h1>
    <p style=" color: white; font-size: 30px; font-family: Jeko; margin-bottom: 2.5%;">It seems you aren't a member. Please fill in your information below</p>
    <div class="event_register_container">
        <h2>Event code</h2>
        <input placeholder="Enter event code" v-bind:id="0" @input="getData">
        
        <h2>Name:</h2>
        <input placeholder="Enter your name" v-bind:id="1" @input="getData">

        <h2>Study major:</h2>
        <input placeholder="Enter your study major" v-bind:id="2" @input="getData">

        <h2>Email (Optional)</h2>
        <input placeholder="Enter your email" v-bind:id="3" @input="getData">

        <a class="submit_button" @click="submit">Submit</a>
        <p style=" color: white; font-size: 30px; font-family: Jeko; margin-bottom: 2.5%;">{{status}}</p>
    </div>

</template>

<script>
import EventService from '@/services/EventService';

export default {
    data() {
        return {
            eventCode: '',
            name: '',
            studyMajor: '',
            email: '',
            hasSignup: false,
            status: ''
        }
    },
    methods: {
        getData(e) {
            switch(parseInt(e.target.id)) {
                case 0:
                    this.eventCode = e.target.value;
                    break;
                case 1:
                    this.name = e.target.value;
                    break;
                case 2:
                    this.studyMajor = e.target.value;
                    break;
                case 3:
                    this.email = e.target.value;
                    break;
            }
        },
        async submit() {
           if (this.name == '' || this.eventCode == '' || this.studyMajor == '') {
                this.status = "Please fill in all required information"
           } else {
                await EventService.eventRegister({
                    code: this.eventCode,
                    name: this.name,
                    studyMajor: this.studyMajor,
                    email: this.email
                }).then(res => {
                    this.status = res.data.message;
                })
           }
        }
    }
}
</script>

<style>
.event_register_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
}

.event_register_container input {
    background-color: rgb(32,32,32);
    border: 1px solid white;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
}

.event_register_container h2 {
    font-family: Poppins;
    color: white;
    margin: 10px;
    text-align: left;
    width: 100%;
}

a.submit_button {
    background-color: red;
    color: white;
    font-family: Poppins;
    font-size: 30px;
    padding: 12.5px 30px;
    border-radius: 10px;
    text-decoration: none;
    margin-top: 30px;
    margin-bottom: 30px;
}

a.submit_button:hover {
    cursor: pointer;
    color: white;
    background-color: darkred;
}

</style>