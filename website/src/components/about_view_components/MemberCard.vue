<template>
    <div class="card_parent_container">
        <div class="upper_half" style="background-color: red;">
            <img :src="getImage(fileName).toString()">
        </div>
        <div class="lower_half">
            <h3>{{name}}</h3>
            <p>{{role}}</p>
            <p>{{studyMajor}}</p>  
            
            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 10px;">
                <a v-bind:href="linkedin" style="font-size: 32px; color: white; margin: 5px;"><i class="fab fa-linkedin"></i></a>
                <a @click="displayDiscord" style="font-size: 32px; color: white; margin: 5px; transform: translateY(1.5px);"><i class="fab fa-discord"></i></a>
            </div>

            <a class="view_more_button">View More</a>
        </div>
    </div>    
</template>

<script>
export default {
    
    props : ['image', 'name', 'role', 'studyMajor', 'linkedin', 'discord'],
    data() {
        return {
            fileName: "@/assets/media/asfandyar.jpg",
            images : ["@/assets/media/asfandyar.jpg", "@/assets/media/asfandyar.jpg"]
        }   
    },
    methods: {
        displayDiscord() {
            console.log(this.image)
            alert(this.name + " discord username is: " + this.discord)
        },
        getImage(imagePath) {
            return require(imagePath)
        }
    }
}
</script>

<style>


</style>

