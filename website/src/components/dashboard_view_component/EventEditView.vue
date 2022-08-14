<template>
    <div class="event_edit_container">
        <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Edit event</h1>
        
        <h3>Title <i id="0" @click="onClick($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[0]">{{title}}</h4>
        <input placeholder="Enter new title" v-bind:value="title" v-if="isEdit[0]">

        <h3>Start time - end time <i id="1" @click="onClick($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[1]">{{startTime}} - {{endTime}}</h4>
        <input placeholder="Enter start new start time" v-bind:value="startTime" v-if="isEdit[1]">
        <input placeholder="Enter start new end time" v-bind:value="endTime" v-if="isEdit[1]">

        <h3>Start month and date <i id="2" @click="onClick($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[2]">{{startMonth}} {{startDate}}</h4>
        <input placeholder="Enter start new start month" v-bind:value="startMonth" v-if="isEdit[2]">
        <input placeholder="Enter start new start date" v-bind:value="startDate" v-if="isEdit[2]">

        <h3>Location <i id="3" @click="onClick($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[3]">{{location}}</h4>
        <input placeholder="Enter start location" v-bind:value="location" v-if="isEdit[3]">

        <h3>Description <i id="4" @click="onClick($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[4]" style="margin-bottom: 50px;">{{description}}</h4>
        <textarea placeholder="Enter new description" v-bind:value="description" v-if="isEdit[4]"></textarea>
        <a @click="onClick" class="update_button">Update</a>
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
            isEdit: [false, false, false, false]
        }  
    },
    methods: {
        onClick(event) {
            this.isEdit[parseInt(event.currentTarget.id)] = !this.isEdit[parseInt(event.currentTarget.id)]
        }
    },
    beforeMount() {
        this.code = this.$route.params.code;
        const fetchData = async() => { 
            await EventService.getEventByCode({code: this.code}).then(res => {
                this.description = res.data.description
                this.location = res.data.location
                this.startMonth = res.data.startMonth
                this.startDate = res.data.startDate
                this.startTime = res.data.startTime
                this.endTime = res.data.endTime
                this.title = res.data.title
            }, err => {
                console.log(err)
            })
        }

        fetchData()
    }
}
</script>

<style>
.event_edit_container {
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

.event_edit_container h3 {
    text-align: left;
    margin: 10px;
    font-family: Poppins; 
    color: white;
}

.event_edit_container h4 {
    text-align: left;
    margin: 10px;
    margin-bottom: 20px;
    font-family: Poppins; 
    color: white;
}

.event_edit_container i:hover {
    cursor: pointer;
    color: red;
}

.event_edit_container input {
    margin: 10px;
    font-family: Poppins;
    font-size: 16px;
}

.event_edit_container textarea {
    font-family: Poppins;
    display: block;
    margin: 10px;
}

a.update_button {
    color: white;
    background-color: red;
    text-decoration: none;
    padding: 10px 30px;
    margin-top: 10px;
    font-family: Poppins;
    border-radius: 10px;
}

a.update_button:hover {
    color: white;
    cursor: pointer;
    background-color: darkred;
}
</style>