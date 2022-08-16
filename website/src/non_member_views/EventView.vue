<template>
    <p style="color: white; font-size: 30px; font-family: Jeko; margin-top: 10%" v-if="fetchingInfo">Please wait, fetching events from database...</p>
    <div class="header_container">
        <a class="event_selector" id="0" @click="onClick($event)">Upcoming events</a>
        <svg width="2.5" height="40px">
            <rect width="2.5" height="100" style="fill:white;stroke-width:0;stroke:rgb(0,0,0)" />
        </svg>
        <a class="event_selector" id="1" @click="onClick($event)">Past events</a> 
    </div>
    <h1 v-if="events.length === 0 && !fetchingInfo" style="font-family: Jeko;">There are no existing events</h1>
    <div class="event_container">
        <div v-if="activeSession === 0" v-for="event in events">
            <EventCard
                    :name="name"
                    :studyMajor="studyMajor"
                    :title="event.title"
                    :image="event.image"     
                    :description="event.description" 
                    :startTime="event.startTime" 
                    :endTime="event.endTime"
                    :location="event.location"
                    :startDate="event.startDate"
                    :startMonth="event.startMonth"
                    :code="event.code"
                    :isLoggedIn="isLoggedIn"
                    :isSignedUp="event.isSignedUp"
            ></EventCard>
        </div>

        <div v-if="activeSession === 1">
            <h1>Display past events</h1>
            <img src="http://localhost:8081/unknown.png">
        </div>
    </div>
    
</template>

<script>
import EventService from '@/services/EventService'
import ImageService from '@/services/ImageService'
import UserService from '@/services/UserService'
import EventCard from '../components/event_view_components/EventCard.vue'

export default {
    data() {
        return {
            name: '',
            isLoggedIn: false,
            fetchingInfo: true,
            activeSession: 0,
            events: [],
            images: [],
            name: '',
            studyMajor: ''
        }
    },  
    components : {
        EventCard
    },
    methods: {
        onClick(event) {
            this.activeSession = parseInt(event.currentTarget.id);
        }
    },
    beforeMount() {
        const fetchData = async() => {
            await ImageService.getImage().then(res => {
                console.log(res)
                for(var i = 0; i < res.data.images.length; i++){
                    this.images.push("data:image/png;base64," + res.data.images[i].data)
                    console.log(this.images[i])
                }
            })

            await EventService.fetchEventList().then(res => {
                for (var i = 0; i < res.data.length; i++) {
                this.events.push({
                    code: res.data[i].code,
                    title: res.data[i].title,
                    image: this.images[i],
                    description: res.data[i].description,
                    isSignedUp: false,
                    startTime: res.data[i].startTime,
                    endTime: res.data[i].endTime,
                    location: res.data[i].location,
                    startMonth: res.data[i].startMonth,
                    startDate: res.data[i].startDate,
                })
            }
            })

            await UserService.fetchUserState().then(res => {
                this.isLoggedIn = res.data.isLoggedIn
                this.name = res.data.name
                this.studymajor = res.data.studyMajor
            })
            
            if (this.isLoggedIn) {
                await EventService.fetchSignedupEventList({ name: this.name }).then(res => {
                    if (res.data.length != 0) {
                        var j = 0;
                        var i = 0;
                        while (i < this.events.length) {
                            if (j === res.data.length) {
                                break;
                            }

                            if (this.events[i].code === res.data[j].code) {
                                console.log(this.events[i].code + ' ' + res.data[j].code)
                                this.events[i].isSignedUp = true;
                                j++;
                                i = 0;
                            }
                            i++;
                        }
                    }
                    this.fetchingInfo = false
                })
            } else {
                this.fetchingInfo = false
            }
        }


        fetchData()
    }
}
</script>

<style>
.header_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.header_container a.event_selector{
    color: white; 
    font-size: 30px; 
    font-family: Jeko;
    text-decoration: none;
    margin-top: 2.5%; 
    margin-bottom: 2.5%;
    -webkit-transition: color 2s;
    transition: color 0.5s;
    margin-left: 10px;
    margin-right: 10px;
}

.header_container a:hover{
    color: red;
    cursor: pointer;
}

.event_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>