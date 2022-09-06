<template>
    <div style="min-height: 100vh;" v-if="!fetchingData && isLoggedIn">
        <h1 style="font-family: Poppins; margin-top: 2.5%; margin-bottom: 2.5%; font-size: 64px;">User info</h1>
        <div class="user_info_container">
            <div class="profile_row">
                <div class="profile_card">
                    <i class="fa fa-user"></i>
                    <h3>{{userInfoArr[1].data}}</h3>
                </div>
                
            </div>
            
            <div class="database_information_container">
                <div class="database_information">
                <div class="information_row" v-for="attributes in userInfoArr">
                    <h5 class="text">{{userInfoArr[attributes.id].text}}</h5>
                    <h5 class="data">{{userInfoArr[attributes.id].data}}</h5>
                </div>

                <div class="button_container">
                    <a id="4" @click="onClick($event)" class="profile_button">Change password</a>
                    <a id="5" @click="onClick($event)" class="profile_button">Change information</a>                    
                </div>
            </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
    data() {
        return {
            isLoggedIn: false,
            fetchingData: true,
            userInfoArr: [],

        }
    },
    methods: {
        onClick(event) {
            switch(parseInt(event.currentTarget.id)) {
                case 4:
                    this.$router.push({name: 'changePassword'})
                    break;
                case 5: 
                    alert('Please contact Loc Pham (Board member) to change your personal information in the database.')
                    break;
            }
        }
    }, 
    beforeMount() {
        const fetchData = async() => {
            await UserService.fetchUserState().then(res => {
                this.isLoggedIn = res.data.isLoggedIn
                this.userInfoArr.push({id: 0, text: "Username",data: res.data.username})
                this.userInfoArr.push({id: 1, text: "Name",data: res.data.name})
                this.userInfoArr.push({id: 2, text: "Study Major",data: res.data.studyMajor})
                this.userInfoArr.push({id: 3, text: "Study Year",data: res.data.studyYear})
                this.userInfoArr.push({id: 4, text: "Role",data: res.data.role})
                this.userInfoArr.push({id: 5, text: "Email",data: res.data.email})
                this.fetchingData = false
            })
        }

        fetchData()
    }
}
</script>

<style>
.user_info_container {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    height: fit-content;
}

.user_info_container .profile_row {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 5%;
    flex-basis: 30%;
}

.user_info_container .profile_row .profile_card {
    border-style: solid;
    padding-top: 75px;
    padding-bottom: 75px;
    padding-left: 30px;
    padding-right: 30px;
    border-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.user_info_container .profile_row .profile_card i {
    color: white;
    font-size: 60px;
    padding: 10%;
    border-style: solid;
    border-radius: 50%;
    margin-bottom: 5%;
}


.user_info_container .profile_row .profile_card h3 {
    text-align: center;
    color: white;
    margin-left: 5%;
    margin-right: 5%;
}

.user_info_container .profile_row .profile_card p {
    text-align: center;
    color: white;
    margin-left: 5%;
    margin-right: 5%;
}

.user_info_container .profile_row .profile_card .socials i {
    padding: 0;
    font-size: 16px;
    margin: 10px;
    border-radius: 0;
    border-style: none;
}

.user_info_container .profile_row .profile_card .socials i:hover {
    cursor:pointer;    
    color: red;
}

.user_info_container .database_information_container {
    flex-basis: 70%;
}

.user_info_container .database_information {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-style: solid;
    border-color: white;
    height: 100%;
}

.user_info_container .database_information .information_row {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 12.5px;
    
}

.user_info_container .database_information .information_row h5.text {
    font-family: Poppins;
    color: white;
    text-align: left;
    flex-basis: 50%;
    margin: 0;
}

.user_info_container .database_information .information_row h5.data {
    font-family: Poppins;
    text-align: right;
    color: white;
    flex-basis: 50%;
    margin: 0;
}

.user_info_container .database_information .button_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.user_info_container .database_information .button_container a.profile_button {
    text-decoration: none;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    color: white;
    background-color: red;
    font-family: Poppins;
}

.user_info_container .database_information .button_container a.profile_button:hover {
    cursor: pointer;
    background-color: darkred;   
}

@media screen and (max-width: 650px) {
    .user_info_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .user_info_container .profile_row {
        margin: 0;
        margin-bottom: 2.5%;
        width: 100%;
    }

    .user_info_container .database_information_container {
        width: 100%;
        padding-bottom: 20px;
    }

    .user_info_container .database_information .button_container {
        display: flex;
        flex-direction: column;
    }
}

</style>