<template>
    <div v-if="!fetchingData && isLoggedIn && (role == 'admin' || role == 'interviewCommittee')" class="event_post_container">
        <h1 style="font-family: Poppins; margin-top: 2.5%; margin-bottom: 2.5%; font-size: 64px;">Post event</h1>
        
        <h2>Event code: </h2>
        <input @input="getData" v-bind:id="0" placeholder="Enter the code of the event">

        <h2>Event title: </h2>
        <input @input="getData" v-bind:id="1" placeholder="Enter the title of the event">

        <h2>Company logo (Make sure the background is transparent!)</h2>
         <form enctype="multipart/form-data">
            <input @change="onChange" ref="image" style="color: white;" type="file">
        </form>

        <h2>Start time and end time: </h2>
        <div class="section">
            <input @input="getData" v-bind:id="2" class="start_time" placeholder="Start time">
            <h2 style="width: 5%; text-align: center;">-</h2>
            <input @input="getData" v-bind:id="3" class="end_time" placeholder="End time">
        </div>

        <h2>Start Month and date</h2>
        <div class="section">
            <input @input="getData" v-bind:id="4" class="start_time" placeholder="Month">
            <h2 style="width: 5%;  text-align: center;">&</h2>
            <input @input="getData" v-bind:id="5" class="end_time" placeholder="Date">
        </div>

        <h2>Event location: </h2>
        <input @input="getData" v-bind:id="6" placeholder="Enter the location of the event">

        <h2>Event description: </h2>
        <textarea @input="getData" v-bind:id="7" style="height: 128px; margin-bottom: 30px;" placeholder="Enter the title of the event"></textarea>

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
import UserService from '@/services/UserService';
import EventService from '@/services/EventService';
import ImageService from '@/services/ImageService.js'

export default {
    data() {
        return {
            fetchingData: '',
            isLoggedIn: '',
            role: '',
            email: '',
            code: '',
            title: '',
            startTime: '',
            endTime: '',
            startMonth: '',
            startDate: '',
            location: '',
            description: '',
            image: '',
            participants: [],
            status: '',
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
                    this.startTime = e.target.value
                    break
                case 3: 
                    this.endTime = e.target.value
                    break
                case 4: 
                    this.startMonth = e.target.value
                    break
                case 5: 
                    this.startDate = e.target.value
                    break;
                case 6: 
                    this.location = e.target.value
                    break
                case 7: 
                    this.description = e.target.value
                    break;
            }
        },
        onChange() {
            const image = this.$refs.image.files[0]
            this.image = image
        },
        onClick() {
            if (!this.title || !this.code || !this.startDate || !this.startMonth || !this.startTime || !this.endTime || !this.description || !this.location) {
                this.status = "Please fill in all required fields!"
            } else {
                this.addImage();
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
        },
        async addImage() {
            const formData = new FormData()
            formData.append('image', this.image)
            formData.append('code', this.code)
            try {
                await ImageService.uploadImage(formData)
            } catch (err) {
                console.log(err)
            }
        }
    },
    beforeMount() {
            const fetchData = async() => {
                await UserService.fetchUserState().then(res => {
                    this.interviewer = res.data.name
                    this.isLoggedIn = res.data.isLoggedIn
                    this.email = res.data.email

                    UserService.getUserRole({email : this.email }).then(res => {
                        this.role = res.data.role
                    })
                    this.fetchingData = false;
                })
            }
    
            fetchData()
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