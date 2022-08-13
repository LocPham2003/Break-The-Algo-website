<template>
    <div class="nominations_container">
            <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">List of Nominations</h1>
        <div class="nomination_container">
            <div class="nomination_row" v-for="nominationrow in nominations">
            <div class="nomination_card" v-for="nomination in nominationrow">
                <h2 style="color: white;"><i class="fa fa-user"></i>{{nomination.name}}</h2>
                <p><i class="fa fa-graduation-cap"></i>{{nomination.studyMajor}}</p>
                <a style="color: white; text-align: left; margin-left: 5px; margin-bottom: 10px;"><i class="fa fa-paperclip"></i>LocPhamCV.pdf</a>
                <p><i class="fa fa-clipboard"></i>{{nomination.description}}</p>

                <div class="buttons">
                    <a class="action_button">Accept</a>
                    <a class="action_button">Deny</a>
                </div>
            </div>
            </div>
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
            nominations: []
        }
    },
    methods: {

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
                        name: res.data[i].name,
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
                console.log(this.nominations[0][1].name)
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