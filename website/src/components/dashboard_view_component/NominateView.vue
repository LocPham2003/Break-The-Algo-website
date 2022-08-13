<template>
    <div class="nominate_container">
        <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 3.5%;">Nominate a member</h1>

        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Nominee's name:</h3>
        <input v-bind:id='0' @input="getData" style="margin: 5px;" placeholder="Enter the name of the nominee">

        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Nominee's study major:</h3>
        <input v-bind:id='1' @input="getData" style="margin: 5px;" placeholder="Enter the study major of the nominee">

        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Nominee's CV:</h3>
        <a id="0" @click="onClick($event)" class="button">Attach File</a>

        <h3 style="text-align: center; color: white; font-family: Poppins; margin: 5px;">Other descriptions</h3>
        <input v-bind:id='2' @input="getData" style="margin: 5px;" placeholder="Other achievements, community contributions, etc">

        <a id="1" @click="onClick($event)" class="button">Submit</a>

        <p style="color: white; font-family: Poppins;">{{status}}</p>
    </div>
</template>

<script>
import NominationService from '@/services/NominationService'
export default {
    data() {
        return {
            name: '',
            studyMajor: '',
            description: '',
            status: ''
        }
    },
    methods: {
        getData(e) {
            switch(parseInt(e.target.id)) {
                case 0:
                    this.name = e.target.value
                    break;
                case 1: 
                    this.studyMajor = e.target.value
                    break;
                case 2:
                    this.description = e.target.value
                    break;
            }
        },
        onClick(event) {
            switch(parseInt(event.currentTarget.id)) {
                case 0:
                    console.log("I just submit my CV")
                    break;
                case 1:
                    if (!this.name || !this.studyMajor || !this.description) {
                        this.status = "Please fill in all required fields!"
                    } else {    
                        this.postNomination()
                    }
                    break;
            }
        },
        async postNomination() {
            NominationService.nominationCreate({
                name: this.name,
                studyMajor: this.studyMajor,
                description: this.description
            }).then(res => {
                this.status = res.data.message;
                setTimeout(() => this.$router.go(), 2000);
            }, err => {
                this.status = err.response.data.message    
            })
        }
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


</style>