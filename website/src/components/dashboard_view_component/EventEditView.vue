<template>
    <div class="event_edit_container">
        <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Edit event</h1>
        
        <h3>Title <i id="0" @click="toggleEdit($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[0]">{{title}}</h4>
        <div style="display: flex; flex-direction: row; width: 100%; align-items: center;">
            <input ref="newTitle" placeholder="Enter new title" v-bind:value="title" v-if="isEdit[0]">
            <a class="utility_button" @click="getData($event)" id="0" v-if="isEdit[0]">Save</a>
            <a class="utility_button" @click="toggleEdit($event)" id="0" v-if="isEdit[0]">Cancel</a>
        </div>
        

        <h3>Start time - end time <i id="1" @click="toggleEdit($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[1]">{{startTime}} - {{endTime}}</h4>
        <div style="display: flex; flex-direction: row; width: 100%; align-items: center;">
            <input ref="newStartTime" v-bind:id="1" placeholder="Enter start new start time" v-bind:value="startTime" v-if="isEdit[1]">
            <input ref="newEndTime" v-bind:id="2" placeholder="Enter start new end time" v-bind:value="endTime" v-if="isEdit[1]">
            <a class="utility_button" @click="getData($event)" id="1" v-if="isEdit[1]">Save</a>
            <a class="utility_button" @click="toggleEdit($event)" id="1" v-if="isEdit[1]">Cancel</a>
        </div>
        
        <h3>Start month and date <i id="2" @click="toggleEdit($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[2]">{{startMonth}} {{startDate}}</h4>
        <div style="display: flex; flex-direction: row; width: 100%; align-items: center;">
            <input ref="newStartMonth" placeholder="Enter start new start month" v-bind:value="startMonth" v-if="isEdit[2]">
            <input ref="newStartDate" placeholder="Enter start new start date" v-bind:value="startDate" v-if="isEdit[2]">
            <a class="utility_button" @click="getData($event)" id="2"  v-if="isEdit[2]">Save</a>
            <a class="utility_button" @click="toggleEdit($event)" id="2" v-if="isEdit[2]">Cancel</a>
        </div>
        

        <h3>Location <i id="3" @click="toggleEdit($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[3]">{{location}}</h4>
        <div style="display: flex; flex-direction: row; width: 100%; align-items: center;">
            <input ref="newLocation" placeholder="Enter new location" v-bind:value="location" v-if="isEdit[3]">
            <a class="utility_button" @click="getData($event)" id="3" v-if="isEdit[3]">Save</a>
            <a class="utility_button" @click="toggleEdit($event)" id="3" v-if="isEdit[3]">Cancel</a>
        </div>

        <h3>Description <i id="4" @click="toggleEdit($event)" class="fa fa-pen"></i></h3>
        <h4 v-if="!isEdit[4]" style="margin-bottom: 50px;">{{description}}</h4>
        <div style="display: flex; flex-direction: row; width: 100%; align-items: center;">
            <textarea ref="newDescription" placeholder="Enter new description" v-bind:value="description" v-if="isEdit[4]"></textarea>
            <a class="utility_button" @click="getData($event)" id="4" v-if="isEdit[4]">Save</a>
            <a class="utility_button" @click="toggleEdit($event)" id="4" v-if="isEdit[4]">Cancel</a>
        </div>

        <a @click="update" class="update_button">Update</a>

        <h4 style="font-family: Poppins; text-align: center; color: white; margin-top: 10px;">{{status}}</h4>
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
            isEdit: [false, false, false, false, false],
            status: ''
        }  
    },
    methods: {
        toggleEdit(event) {
            this.isEdit[parseInt(event.currentTarget.id)] = !this.isEdit[parseInt(event.currentTarget.id)]
        },
        async update() {
            var checkAllFalse = true
            for (var i = 0; i < this.isEdit.length; i++) {
                if (this.isEdit[i]) {
                    checkAllFalse = false;
                    break;
                }
            }

            if (checkAllFalse) {
                await EventService.updateEvent({
                code: this.code,
                title: this.title,
                startTime: this.startTime,
                endTime: this.endTime,
                startMonth: this.startMonth,
                startDate: this.startDate,
                location: this.location,
                description: this.description
                }).then(res => {
                    this.status = res.data.message
                }, err => {
                    console.log(err)
                })
            } else {
                this.status = "Make sure you have already saved all fields"
            }
            
        },
        getData(event) {
            switch(parseInt(event.currentTarget.id)) {
                case 0:
                    this.title = this.$refs.newTitle.value;
                    break;
                case 1: 
                    this.startTime = this.$refs.newStartTime.value;
                    this.endTime = this.$refs.newEndTime.value;
                    break
                case 2:
                    this.startMonth = this.$refs.newStartMonth.value
                    this.startDate = this.$refs.newStartDate.value
                    break
                case 3: 
                    this.location = this.$refs.newLocation.value
                    break
                case 4: 
                    this.description = this.$refs.newDescription.value
                    break;
            }
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
    padding: 10px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.event_edit_container h3 {
    width: 100%;
    text-align: left;
    margin: 10px;
    font-family: Poppins; 
    color: white;
}

.event_edit_container h4 {
    width: 100%;
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
    width: 100%;
    font-family: Poppins;
    margin-right: 10px;
    font-size: 16px;
}

.event_edit_container textarea {
    font-family: Poppins;
    display: block;
    margin: 10px;
    width: 100%;
}

a.utility_button {
    color: white;
    background-color: red;
    text-decoration: none;
    font-family: Poppins;
    margin-right: 5px;
    padding: 5px 10px;
    border-radius: 2.5px;
    height: fit-content;
}

a.utility_button:hover {
    color: white;
    background-color: darkred;
    cursor: pointer;
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