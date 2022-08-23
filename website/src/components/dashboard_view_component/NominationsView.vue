<template>
    <div class="nominations_container">
            <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">List of Nominations</h1>
        <div v-if="nominations.length != 0" class="nomination_container">
            <div class="nomination_row" v-for="nominationrow in nominations">
            <div class="nomination_card" v-for="nomination in nominationrow">
                <h2 style="color: white;"><i class="fa fa-user"></i>{{nomination.nominee}}</h2>
                <p><i class="fa fa-star"></i>{{nomination.nominator}}</p>
                <p><i class="fa fa-graduation-cap"></i>{{nomination.studyMajor}}</p>
                <a v-bind:href="nomination.cvLink" style="color: white; text-align: left; font-family: Poppins; margin-left: 5px; margin-bottom: 10px; word-wrap: break-word;"><i class="fa fa-paperclip"></i>Nominee CV</a>
                <p><i class="fa fa-clipboard"></i>{{nomination.description}}</p>

                <div style="margin-bottom: 10px;" class="buttons">
                    <a v-bind:id="nomination.code + 1" @click="onClick($event)" class="action_button">Accept</a>
                    <a @click="showRefusalReasonInput()" class="action_button">Deny</a>
                </div>

                <div style="margin-bottom: 5px;" v-if="showReasonInput">
                    <textarea @input="getData" style="width: 100%; margin-bottom: 5px;" placeholder="Enter the reason this request is denied"></textarea>
                    <a v-bind:id="nomination.code + 2" @click="onClick($event)" class="action_button">OK</a>
                    <a @click="showRefusalReasonInput()" class="action_button">Cancel</a>
                </div>

                <p style="text-align: center;">{{message}}</p>
            </div>
            </div>
        </div>

        <div v-if="nominations.length == 0">
            <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">There are currently no nominations</h1>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService'
import NominationService from '@/services/NominationService'

export default {
    data() {
        return {
            isLoggedIn: '',
            message: '',
            reason: '',
            showReasonInput: false,
            nominations: []
        }
    },
    methods: {
        showRefusalReasonInput() {
            this.showReasonInput = !this.showReasonInput
        },
        async onClick(event) {
            const nominationCode = event.currentTarget.id.substring(0, event.currentTarget.id.length - 1)
            const status = event.currentTarget.id.slice(-1)
            console.log(this.reason)
            NominationService.updateNomination({
                code: nominationCode,
                status: status,
                reason: this.reason
            }).then(res => {
                this.message = res.data.message
            }, err => {
                console.log(err)
            })
        },
        getData(e) {
            this.reason = e.target.value
        }
    },
    beforeMount() {
        const fetchData = async() => {
            await UserService.fetchUserState().then(res => {
                this.isLoggedIn = res.data.isLoggedIn
            })

            await NominationService.getNominations().then(res => {
                var size = 0;
                var nominationRow = []
                for (var i = 0; i < res.data.length; i++) {
                    nominationRow.push({
                        code: res.data[i].code,
                        nominee: res.data[i].nominee,
                        nominator: res.data[i].nominator,
                        cvLink: res.data[i].cvLink,
                        studyMajor: res.data[i].studyMajor,
                        description: res.data[i].description,
                    })
                    size++
                    if (size == 2){
                        size = 0
                        this.nominations.push(nominationRow)
                        nominationRow = []
                    } else if (i == res.data.length - 1) {
                        this.nominations.push(nominationRow)
                    }
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