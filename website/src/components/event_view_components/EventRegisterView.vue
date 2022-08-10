<template>
    <h1 style="font-family: Jeko; margin-top: 2.5%; margin-bottom: 2.5%;">Register for Event</h1>
    <p style=" color: white; font-size: 30px; font-family: Jeko; margin-bottom: 2.5%;">It seems you aren't a member. Please fill in your information below</p>
    <div class="content_container">
        <h2>Event code</h2>
        <input>
        
        <h2>Name:</h2>
        <input>

        <h2>Study major:</h2>
        <input>

        <h2>University</h2>
        <input>

        <h2>Email</h2>
        <input>

        <a class="button" @click="submit">Submit</a>
    </div>

</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style>
.content_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
}

.content_container input {
    background-color: rgb(32,32,32);
    border: 1px solid white;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
}

.content_container h2 {
    font-family: Poppins;
    color: white;
    margin: 10px;
    text-align: left;
    width: 100%;
}

a.button {
    background-color: red;
    color: white;
    font-family: Poppins;
    font-size: 30px;
    padding: 12.5px 30px;
    border-radius: 10px;
    text-decoration: none;
    margin-top: 30px;
    margin-bottom: 30px;
}

a.button:hover {
    cursor: pointer;
    color: white;
    background-color: darkred;
}

</style>