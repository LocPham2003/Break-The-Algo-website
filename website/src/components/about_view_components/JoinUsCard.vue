<template>
    <div class="join_us_card">
        <div style="flex-basis: 30%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <i :class="iconName"></i>
            <h4>{{cardTitle}}</h4>
        </div>
        <div style="flex-basis: 70%;">
            <p>{{cardDescription}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["cardTitle", "cardDescription", "iconName"],
    data() {
        return {

        }
    }
}
</script>

<style>
.join_us_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 425px;
    background-color: #2E2E2F;
    border-radius: 10px;
    margin: 20px;
    padding: 30px 40px 30px 40px;
    transition: transform .2s;
}

.join_us_card:hover {
     transform: scale(1.05);
     cursor: default;
}

.join_us_card i {
    color: white;
    background-color: red;
    font-size: 20px;
    padding: 20px;
    margin-top: 15px;
    margin-bottom: 15px; 
    border-radius: 50%;
}

.join_us_card h4 {
    font-family: Poppins;
    margin-bottom: 20px;
    color: white;
}

.join_us_card p {
    color: white;
    font-family: Poppins;
    text-align: left;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 30px;
}
</style>