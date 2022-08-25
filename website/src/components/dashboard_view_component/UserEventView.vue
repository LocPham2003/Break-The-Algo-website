<template>
    <h1 v-if="fetchingInfo" style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Fetching info from database</h1>
    <div v-if="!fetchingInfo && isLoggedIn" class="content_container">
        <h1 style="font-family: Poppins; margin-top: 2.5%; margin-bottom: 3.5%;">Your events</h1>
        <div class="event_container">
        <div v-for="event in events">
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

        <div v-if="events.length === 0">
            <h1 style="margin: 10px;">You haven't signed up to any events yet. Go to Event section to sign up for one now!</h1>
        </div>
    </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService';
import EventService from '@/services/EventService';
import ImageService from '@/services/ImageService';
import EventCard from '@/components/event_view_components/EventCard.vue'
export default {
    components: {
        EventCard
    },
    data() {
        return {
            fetchingInfo: true,
            isLoggedIn: '',
            email: '',
            eventCode: [],
            events: [],
            images: []
        }
    },
    methods: {
        
    },
    beforeMount() {
        const fetchData = async() => {
            await UserService.fetchUserState().then(res => {
                this.email = res.data.email,
                this.isLoggedIn = res.data.isLoggedIn
            }, err => {
                console.log(err)
            })

            await UserService.getUserListOfEvents({
                email: this.email
            }).then(res => {
                for(var i = 0; i < res.data.events.length; i++) {
                    this.eventCode.push(res.data.events[i].code)
                }
            })

            await ImageService.getImage().then(res => {
                for(var i = 0; i < res.data.images.length; i++){
                    this.images.push("data:image/png;base64," + res.data.images[i].data)
                }
            })

            await EventService.fetchEventList().then(res => {
                var j = 0;
                var i = 0;

                if (this.eventCode.length != 0) {
                    while (i < res.data.length) {
                        if(j == this.eventCode.length) {
                            break;
                        }

                        if (res.data[i].code === this.eventCode[j]) {
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
                            i = -1;
                            j++;
                        }
                        i++;
                }
                }
                this.fetchingInfo = false
            })

        }

        fetchData()
    }
}
</script>