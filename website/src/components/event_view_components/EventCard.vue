<template>
    <div class="card" style="width: 80vw; height: fit-content">
        <div class="card_title">
            <i style="color: #0089E8;" class="fab fa-facebook"></i>
            <svg width="1" height="40px">
                <rect width="1" height="100" style="fill:#696969;stroke-width:0;stroke:rgb(0,0,0)" />
            </svg>
            <h5>Facebook Networking event</h5>
        </div>
        <div class="card_body">
            <div class="card_body_time">
                <h5>Start:</h5>
                <p>Tuesday, May 25, 2021 - 12:30 PM</p>

                <h5>End:</h5>
                <p>Thursday, March 18, 2021 - 01:30 PM</p>

                <h5>Location:</h5>
                <p>Zoom</p>
            </div>

            <div class="card_body_description">
                <p>Wondering how you get into Google? This talk is about the interview process at Google, and how 
                to prepare for it. The host is Sander Alewijnse, who started his job as software engineer at Google 
                London 7 years ago after graduating from the TU Eindhoven and being active at GEWIS. Besides 
                his main job working on various software projects (Android, the Google Play store, Google Fit and 
                Fitbit) he has led plenty of coding interviews and knows all the ins and outs about applying at 
                Google, which this talk will focus on ..</p>
            </div>

            <div class="card_body_date">
                <div class="date">
                     <h3>MAY</h3>
                    <h5>25</h5>
                </div>

                <div class="sign_up_button">
                    <a href="#">Sign up</a>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data() {

    }, 
    methods: {
        async signUpForEvent() {
            
        }
    }
}
</script>

<style>
    div.card {
        background-color: #2E2E2F;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        margin: 2.5vh;
        padding: 15px;
        border-radius: 10px;
        font-family: Poppins;
    }

    div.card div.card_title {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        flex-basis: 20%;
        margin: 0;
    }

    div.card div.card_title i {
        font-size: 32px;
        margin-top: 0;
        padding: 0;
        margin-right: 15px;
    }

    div.card div.card_title h5 {
        font-size: 24px;
        margin-top: 10px;
        margin-left: 15px;
        display: block;
        text-align: left;
    }

    div.card div.card_body {
        color: white;
        flex-basis: 80%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;
        padding-top: 10px;
    }


    div.card div.card_body div.card_body_time {
        flex-basis: 25%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        margin-right: 5%;
    }

    div.card div.card_body div.card_body_time h5 {
        text-align: left;
        font-size: 12.5px;
        font-weight: bolder;
        margin-top: 5px;
        margin-bottom: 4px;
    }

    div.card div.card_body div.card_body_time p {
        text-align: left;
        margin: 0;
        font-size: 12.5px;
        text-decoration: none;
    }

    div.card div.card_body div.card_body_description {
        flex-basis: 50%;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.card div.card_body div.card_body_description p {
        text-align: left;
        font-size: 12.5px;
    }

    div.card div.card_body div.card_body_description p {
        text-align: left;
    }

    div.card div.card_body div.card_body_date{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: -2.5%;
        margin-left: 2.5%;
        align-items: center;
        margin-bottom: 0;
    }

    div.card div.card_body div.card_body_date h3{
        margin-bottom: 10%;
    }

    div.card div.card_body div.card_body_date h5{
        margin-bottom: 25%;
    }

    div.card div.card_body div.card_body_date a{
        background-color: red;
        text-decoration: none;
        color: white;
        padding: 7.5px;
        border-radius: 5px;
    }

    div.card div.card_body div.card_body_date a:hover{
        background-color: darkred;
        transition: all 0.1s ease-in;
    }

    @media screen and (max-width: 650px) {
        div.card {
            flex-direction: column;
        }

        div.card div.card_body {
            flex-direction: column;
        }

        div.card div.card_body div.card_body_description {
            display: none;
        }

        div.card div.card_body div.card_body_date {
            margin-top: 5%;
            flex-direction: row;
            justify-content: center;
            margin-top: 2.5%;
            align-items: center;
        }  

        div.card div.card_body div.card_body_date div.sign_up_button {
            margin-left: auto;
            margin-right: 0;
        }  

    }

</style>