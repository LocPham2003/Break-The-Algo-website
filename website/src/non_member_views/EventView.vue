<template>
    <p style="color: white; font-size: 30px; font-family: Poppins; margin-top: 10%" v-if="fetchingInfo">Please wait, fetching events from database...</p>
    <div class="selector_container">
        <a :class="selector1" id="0" @click="onClick($event)">Upcoming Event</a>
        <svg width="2.5" height="40px">
            <rect width="2.5" height="100" style="fill:white;stroke-width:0;stroke:rgb(0,0,0)" />
        </svg>
        <a :class="selector2" id="1" @click="onClick($event)">Past events</a> 
    </div>
    <h1 v-if="events.length === 0 && !fetchingInfo && selectedTarget === 0" style="font-family: Poppins; margin-top: 100px;">There are no upcoming events at the moment, stay tuned for more!</h1>
    <div class="event_container">
        <div v-if="selectedTarget === 0" v-for="event in events">
            <EventCard
                    :name="name"
                    :email="email"
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

        <div v-if="selectedTarget === 1">
            <h1 style="font-family: Poppins; margin-top: 100px;">Please check our instagram page (@breakthealgo) to see our past events!</h1>
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
            selector1: 'selected',
            selector2: 'unselected',
            selectedTarget: 0,
            name: '',
            username: '',
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
            this.selectedTarget = parseInt(event.currentTarget.id)
            if (parseInt(event.currentTarget.id) == 0) {
                this.selector1 = 'selected';
                this.selector2 = 'unselected';
            } else {
                this.selector2 = 'selected';
                this.selector1 = 'unselected';
            }
        }
    },
    beforeMount() {
        const fetchData = async() => {
            await ImageService.getImage().then(res => {
                for(var i = 0; i < res.data.images.length; i++){
                    this.images.push("data:image/png;base64," + res.data.images[i].data)
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
                this.email = res.data.email
            })
            
            if (this.isLoggedIn) {
                await UserService.getUserListOfEvents({ email: this.email }).then(res => {
                    console.log(res.data.events)
                    if (res.data.events.length != 0) {
                        var j = 0;
                        var i = 0;
                        for (var i = 0; i < res.data.events.length; i++) {
                            for (var j = 0; j < this.events.length; j++) {
                                if (this.events[j].code === res.data.events[i].code) {
                                    this.events[i].isSignedUp = true;
                                    break;
                                }
                            }
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
.selector_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.selector_container a.selected {
    color: white;
    background-color: #2E2E2F;
    padding: 5px;
    text-decoration: none;
    margin: 10px;
    font-size: 32px;
    font-family: Poppins;
}

.selector_container a.unselected {
    color: white;
    text-decoration: none;
    padding: 5px;
    margin: 10px;
    font-size: 32px;
    font-family: Poppins;
}

.selector_container a.selected:hover {
    cursor: pointer;
}

.selector_container a.unselected:hover {
    cursor: pointer;
}

.event_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
}
</style>