<template>
    <!-- Root component is in EventView.vue. Modify the header_container in EventView to change the appearance of this -->
    <div class="header_container">
        <a class="event_selector" id="0" @click="selectActiveSession($event)">Nominate a member</a>
        <svg width="2.5" height="40px">
            <rect width="2.5" height="100" style="fill:white;stroke-width:0;stroke:rgb(0,0,0)" />
        </svg>
        <a class="event_selector" id="1" @click="selectActiveSession($event)">Pending nominations</a> 
    </div>
    
    <div v-if="activeSession === 0" class="nominate_container">
        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Nominee's name:</h3>
        <input v-bind:id='0' @input="getData" style="margin: 5px;" placeholder="Enter the name of the nominee">

        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Nominee's study major:</h3>
        <input v-bind:id='1' @input="getData" style="margin: 5px;" placeholder="Enter the study major of the nominee">

        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Nominee's CV:</h3>
        <input v-bind:id='2' @input="getData" style="margin: 5px;" placeholder="Link to nominee's CV (e.g Google Drive, Microsoft Outlook, etc)">

        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Other descriptions</h3>
        <input v-bind:id='3' @input="getData" style="margin: 5px;" placeholder="Other achievements, community contributions, etc">

        <a @click="onClick()" class="button">Submit</a>

        <p style="color: white; font-family: Poppins;">{{status}}</p>
    </div>

    <div v-if="activeSession === 1">
        <div v-if="!isEmpty" class="nominations_container">
            <div class="nomination_row" v-for="nominationrow in nominations">
            <div class="nomination_card" v-for="nomination in nominationrow">
                <h2 style="color: white;"><i class="fa fa-user"></i>{{nomination.nominee}}</h2>
                <p><i class="fa fa-graduation-cap"></i>{{nomination.studyMajor}}</p>
                <a v-bind:href="nomination.cvLink" style="color: white; text-align: left; font-family: Poppins; margin-left: 5px; margin-bottom: 10px; word-wrap: break-word;"><i class="fa fa-paperclip"></i>Nominee CV</a>
                <p><i class="fa fa-clipboard"></i>{{nomination.description}}</p>
                <p><i class="fa fa-file"></i>{{nomination.status}}</p>

                <p style="text-align: center;">{{message}}</p>
            </div>
            </div>
        </div>

        <div v-else>
            <h1>Your schedule is empty... for now</h1>
        </div>
    </div>
</template>

<script>
import NominationService from '@/services/NominationService'
import UserService from '@/services/UserService';
export default {
    data() {
        return {
            activeSession: 0,
            nominee: '',
            nominator: '',
            studyMajor: '',
            cvLink: '',
            description: '',
            status: '',
            nominations: [],
            isEmpty: false
        }
    },
    methods: {
        selectActiveSession(event) {
            this.activeSession = parseInt(event.currentTarget.id)
        },
        getData(e) {
            switch(parseInt(e.target.id)) {
                case 0:
                    this.nominee = e.target.value
                    break;
                case 1: 
                    this.studyMajor = e.target.value
                    break;
                case 2:
                    this.cvLink = e.target.value
                    break;
                case 3: 
                    this.description = e.target.value
                    break;
            }
        },
        onClick() {
             if (!this.nominee || !this.studyMajor || !this.description || !this.cvLink) {
                        this.status = "Please fill in all required fields!"
                } else {    
                    this.postNomination()
            }
        },
        async postNomination() {
            await NominationService.nominationCreate({
                nominee: this.nominee,
                nominator: this.nominator,
                studyMajor: this.studyMajor,
                description: this.description,
                cvLink: this.cvLink,
                status: "0",
                reason: ''
            }).then(res => {
                this.status = res.data.message;
                setTimeout(() => this.$router.go(), 2000);
            }, err => {
                this.status = err.response.data.message    
            })
        }
    },
    beforeMount() {
        const fetchData = async() => { 
            await UserService.fetchUserState().then(res => {
                this.nominator = res.data.name
            }, err => {
                console.log(err)
            })

            await NominationService.getPendingNominations({
                nominator: this.nominator
            }).then(res => {
                console.log(res)
                if (res.data.length != 0) {
                    var size = 0;
                var nominationRow = []
                for (var i = 0; i < res.data.length; i++) {
                    var currentStatus = ''
                    switch(parseInt(res.data[i].status)) {
                        case 0:
                            currentStatus = 'Waiting for decision from board members'
                            break;
                        case 1: 
                            currentStatus = 'Congratulations! Your nomination request has been approved'
                            break;
                        case 2:
                            currentStatus = 'Sorry, your nomination request is denied. Reason for denial:  ' + res.data[i].reason
                            break;
                    }

                    nominationRow.push({
                        code: res.data[i].code,
                        nominee: res.data[i].nominee,
                        nominator: res.data[i].nominator,
                        description: res.data[i].description,
                        studyMajor: res.data[i].studyMajor,
                        cvLink: res.data[i].cvLink,
                        status: currentStatus,
                    })
                    size++
                    if (size == 2){
                        size = 0
                        this.nominations.push(nominationRow)
                        interviewRow = []
                    } else if (i == res.data.length - 1) {
                        this.nominations.push(nominationRow)
                    }
                }
                } else {
                    this.isEmpty = true;
                }
            }, err => {
                console.log(err)
            })
        }

        fetchData()
    }
}
</script>

<style>
.nominate_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nominate_container input {
    background-color: rgb(32,32,32);
    border: 1px solid white;
    color: white;
    width: 50%;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
}

.nominate_container a.button {
    color: white;
    text-decoration: none;
    font-family: Poppins;
    background-color: red;
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
}

.nominate_container a.button:hover {
    background-color: darkred;
    color: white;
    cursor: pointer;
}

.nominations_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nominations_container .nomination_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.nominations_container .nomination_row .nomination_card {
    background-color: #2E2E2F;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 400px;
}

.nominations_container .nomination_row .nomination_card i {
    margin-right: 10px;
    margin-left: 0;
}

.nominations_container .nomination_row .nomination_card h2 {
    font-family: Poppins;
    margin-left: 5px;
    margin-right: 5px;
}

.nominations_container .nomination_row .nomination_card p {
    font-family: Poppins;
    color: white;
    text-align: left;
    margin-bottom: 10px;
    margin-left: 5px; 
}

.nominations_container .nomination_row .nomination_card a.action_button {
    text-decoration: none;
    color: white;
    background-color: red;
    font-family: Poppins;
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 5px;
    padding-bottom:5px;
    padding-left: 7.5px;
    padding-right: 7.5px;
    border-radius: 5px;
}

.nominations_container .nomination_row .nomination_card a.action_button:hover {
    cursor: pointer;
    background-color: darkred;
}

@media screen and (max-width: 650px) {
    .nominations_container .nomination_row {
        display: flex;
        flex-direction: column;
    }
}


</style>