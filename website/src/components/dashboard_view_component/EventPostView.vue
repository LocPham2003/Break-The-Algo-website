<template>
    <div class="event_post_container">
        <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Post an event</h1>
        
        <h2>Event code: </h2>
        <input @input="getData" v-bind:id="0" placeholder="Enter the code of the event">

        <h2>Event title: </h2>
        <input @input="getData" v-bind:id="1" placeholder="Enter the title of the event">

        <h2>Company logo</h2>
        <label><input v-bind:id="2" type="file"/></label>

        <h2>Start time and end time: </h2>
        <div class="section">
            <input @input="getData" v-bind:id="3" class="start_time" placeholder="Start time">
            <h2 style="width: 5%; text-align: center;">-</h2>
            <input @input="getData" v-bind:id="4" class="end_time" placeholder="End time">
        </div>

        <h2>Start Month and date</h2>
        <div class="section">
            <input @input="getData" v-bind:id="5" class="start_time" placeholder="Month">
            <h2 style="width: 5%;  text-align: center;">&</h2>
            <input @input="getData" v-bind:id="6" class="end_time" placeholder="Date">
        </div>

        <h2>Event location: </h2>
        <input @input="getData" v-bind:id="7" placeholder="Enter the location of the event">

        <h2>Event description: </h2>
        <textarea @input="getData" v-bind:id="8" style="height: 128px; margin-bottom: 30px;" placeholder="Enter the title of the event"></textarea>

        <div style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            ">
            <a @click="onClick()" class="event_submit_button">Submit</a>
        </div>

        <p style="color: white; font-size: 16px; margin-bottom: 100px;">{{status}}</p>

    </div>

    
</template>

<script>
import EventService from '@/services/EventService';

export default {
    data() {
        return {
            code: '',
            title: '',
            startTime: '',
            endTime: '',
            startMonth: '',
            startDate: '',
            location: '',
            description: '',
            img: '',
            participants: [],
            status: ''
        }
    }, 
    methods: {
        getData(e){
            switch(parseInt(e.target.id)) {
                case 0:
                    this.code = e.target.value
                    break;
                case 1: 
                    this.title = e.target.value
                    break;
                case 2: 
                    this.image = e.target.value
                    break;
                case 3: 
                    this.startTime = e.target.value
                    break
                case 4: 
                    this.endTime = e.target.value
                    break
                case 5: 
                    this.startMonth = e.target.value
                    break
                case 6: 
                    this.startDate = e.target.value
                    break;
                case 7: 
                    this.location = e.target.value
                    break
                case 8: 
                    this.description = e.target.value
                    break;
            }
        },
        onClick() {
            if (!this.title || !this.code || !this.startDate || !this.startMonth || !this.startTime || !this.endTime || !this.description || !this.location) {
                this.status = "Please fill in all required fields!"
            } else {
                this.addEvent();
            }
        },
        async addEvent() {
            await EventService.eventCreate({
                code: this.code,
                title: this.title,
                startTime: this.startTime,
                endTime: this.endTime,
                startMonth: this.startMonth,
                startDate: this.startDate,
                location: this.location,
                description: this.description,
                participants: this.participants
            }).then(res => {
                this.status = res.data.message
            }, err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.event_post_container label {
    color: white; 
    text-align: left; 
    width: fit-content; 
    font-family: Poppins;
    border-radius: 5px;
}

.event_post_container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding-left: 5%;
    padding-right: 5%;
}

.event_post_container h2 {
    font-family: Poppins;
    color: white;
    text-align: left;
    width: 100%;
    margin: 0;
}

.event_post_container input {
    width: 100%;
    margin-bottom: 10px;
    height: 32px;
}

.event_post_container div.section {
    display: flex;
    flex-direction: row;
}

.event_post_container div.section input {
    height: 32px;
}

a.event_submit_button {
    padding: 10px 30px;
    margin-bottom: 50px;
    color: white;
    font-family: Poppins;
    text-decoration: none;
    background-color: red;
    border-radius: 10px;
}

a.event_submit_button:hover {
    color: white;
    cursor: pointer;
    background-color: darkred;
}
</style>