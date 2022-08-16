<template>
    <div v-if="!fetchingData && isLoggedIn">
        <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Manage Event</h1>
        <h1 v-if="events.length === 0" style="font-family: Jeko;">There are no existing events</h1>
        <div class="event_manage_card" v-for="event in events">
            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                <img style="width: 64px; height: 64px; margin-right: 10px;" v-bind:src="event.image">
                <h3 style="margin: 0;">{{event.title}} - {{event.code}}</h3>
            </div>
            <div class="event_manage_card_body">
                <div class="event_manage_card_time">
                    <h5>Start time - End time</h5>
                    <p>{{event.startTime}} - {{event.endTime}}</p>

                    <h5>Month and date</h5>
                    <p>{{event.startMonth}} {{event.startDate}}</p>

                    <h5>Location</h5>
                    <p>{{event.location}}</p>
                </div>

                <div class="event_manage_card_description">
                    <h5>Description</h5>
                    <p>{{event.description}}</p>
                </div>

                <div class="event_manage_card_buttons">
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                        <a v-bind:id="event.code + 0" @click="onClick($event)" class="event_manage_button">Edit Event</a>
                        <a v-bind:id="event.code + 1" @click="onClick($event)" class="event_manage_button">Delete Event</a>
                        <a v-bind:id="event.code + 2" @click="onClick($event)" class="event_manage_button">Hide Event</a>
                    </div>
                </div>

                <p v-if="show" style="color: white; font-size: 30px; font-family: Jeko;">{{status}}</p>
            </div>
        </div>
    </div>

    <div v-else>
        <h1>Fetching from database, please wait</h1>
    </div>
</template>

<script>
import EventService from '@/services/EventService'
import UserService from '@/services/UserService'
import ImageService from '@/services/ImageService'
export default {
    data() {
        return {
            isLoggedIn: false,
            fetchingData: true,
            events: [],
            images: [],
            status: ''
        }
    }, 
    methods: {
        // The id is as follows: 
        /**
         * Event_code + number 
         * -> Get the last char of the id to know what action you're supposed to do (0 = edit, 1 = delete, 2 = hide)
         * Event code is to find the event whose content will be modified in the database
         */
        onClick(event) {
            var action = event.currentTarget.id.substr(event.currentTarget.id.length - 1)
            var code = event.currentTarget.id.slice(0, event.currentTarget.id.length - 1)
            switch(parseInt(action)) {
                case 0:
                    // Edit
                    this.$router.push({
                        name: "editEvent",
                        params: { code: code }
                    })
                    break;
                case 1: 
                    // Delete
                    const deleteImageAndEvent = async() => {
                        await ImageService.deleteImageByCode({ code: code })

                        await EventService.deleteEvent({ code: code }).then(res => {
                            this.status = res.data.message
                        }, err => {
                            console.log(err)
                        })
                    }

                    deleteImageAndEvent()
                    break;
                case 2: 
                    // Hide
                    break;
            }
        }
    }, 
    beforeMount() {
        const fetchData = async() => {
            await ImageService.getImage().then(res => {
                for(var i = 0; i < res.data.images.length; i++){
                    this.images.push("data:image/png;base64," + res.data.images[i].data)
                    console.log(this.images[i])
                }
            })

            await EventService.fetchEventList().then(res => {
                for (var i = 0; i < res.data.length; i++) {
                this.events.push({
                    title: res.data[i].title,
                    image: this.images[i],
                    description: res.data[i].description,
                    startTime: res.data[i].startTime,
                    endTime: res.data[i].endTime,
                    location: res.data[i].location,
                    startMonth: res.data[i].startMonth,
                    startDate: res.data[i].startDate,
                    code: res.data[i].code
                })
            }
            })

            await UserService.fetchUserState().then(res =>{
                this.isLoggedIn = res.data.isLoggedIn
                this.fetchingData = false;
            })
        }
        fetchData()
    }
}
</script>

<style>
.event_manage_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background-color: #2E2E2F;
    border-radius: 10px;
    margin: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.event_manage_card .event_manage_card_body {
    display: flex;
    flex-direction: row;
}

.event_manage_card h3 {
    text-align: center;
    font-family: Poppins;
    color: white;
}

.event_manage_card h5{
    text-align: left;
    color: white;
    font-family: Poppins;
}

.event_manage_card p{
    text-align: justify;
    display: block;
    color: white;
    font-family: Poppins;
}

.event_manage_card .event_manage_card_body .event_manage_card_description {
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    width: 40%;
}

.event_manage_card .event_manage_card_body .event_manage_card_time {
    width: 30%;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.event_manage_card .event_manage_card_body .event_manage_card_buttons {
    padding: 10px;
    width: 30%;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.event_manage_card .event_manage_card_body .event_manage_card_buttons a.event_manage_button {
    text-decoration: none;
    font-family: Poppins;
    color: white;
    border-radius: 10px;
    background-color: red;
    margin: 10px;
    padding: 10px 20px;
}

.event_manage_card .event_manage_card_body .event_manage_card_buttons a.event_manage_button:hover {
    color: white;
    background-color: darkred;
    cursor: pointer;
}

@media screen and (max-width: 650px) {
    .event_manage_card .event_manage_card_body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .event_manage_card .event_manage_card_body .event_manage_card_description {
        width: 100%;
    }

    .event_manage_card .event_manage_card_body .event_manage_card_time {
        width: 100%;
    }

    .event_manage_card .event_manage_card_body .event_manage_card_buttons {
        width: 100%;
    }
}

</style>