<template>
    <div class="nomination_card">
        <div class="nominee_image">
            <img v-if="image != null" :src="image">
            <img v-if="image === null" src="@/assets/media/empty_profile.png">
        </div>
        <div class="nominee_information">
            <h2 style="font-size: 24px; font-family: sans-serif; color: white;">{{nominee}}</h2>
            <h5 style="font-size: 18px; color: white; font-family: Monospace;">{{studyMajor}} <br>{{description}}</h5>
            <a v-bind:href="cvLink" class="see_more">&#8594 See more of {{nominee.split(" ")[0]}}'s work</a>
            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%;">
                <a @click="displayDiscord($event)" v-bind:id="discord" class="social_plugins"><i style="margin-right: 5px;" class="fab fa-discord"></i>Discord</a>
                <a v-bind:href="linkedin" class="social_plugins"><i style="margin-right: 5px;" class="fab fa-linkedin"></i>Linkedin</a>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    props: ['cvLink','nominee', 'image', 'studyMajor', 'description', 'discord', 'linkedin'],
    methods: {
        displayDiscord(event) {
            alert("This student discord username is: " + event.currentTarget.id)
        }
    }
}
</script>

<style>
div.nomination_card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px 20px;
    max-width: 550px;
    max-height: 400px;
    background-color: #2E2E2F;
    border-radius: 10px;
}

div.nomination_card div.nominee_image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

div.nomination_card div.nominee_image img {
    max-width: 200px;
    max-height: 200px;
}

div.nomination_card div.nominee_information {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nomination_card .nominee_information a.see_more {
    color: white;
    display: block;
    text-decoration: underline;
    text-decoration-color: red;
    text-underline-offset: 8px;
    font-family: Menlo;
    font-size: 16px;
}

.nomination_card .nominee_information a.see_more:hover {
    text-underline-offset: 12px;
    cursor: pointer;
}

.nomination_card .nominee_information a.social_plugins {
    font-family: Menlo;
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
}

.nomination_card .nominee_information a.social_plugins:hover {
    background-color: red;
    cursor: pointer;
}

@media screen and (max-width: 1026px) {
    div.nomination_card {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.nomination_card div.nominee_information {
        width: 100%;
    }

    div.nomination_card div.nominee_image {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
}

</style>