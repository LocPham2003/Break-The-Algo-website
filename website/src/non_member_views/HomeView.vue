<template>
  <title>Break The Algo</title>
  <body>

    <div class="content">
      <div class = "homepage_content">
        <h3>hi. let's</h3>
        <h1>break the algo.</h1>

        <a @click="redirectToRegister()" class="get_started">Get started.</a>
        
        <div style="margin: 10px 10px 10px 10px; display: flex; flex-direction: row; justify-content: center; align-items: center;">
          <a class="social" href="https://www.facebook.com/breakthealgo/"><i class="fab fa-facebook"></i></a>
          <a class="social" href="https://www.instagram.com/breakthealgo/"><i class="fab fa-instagram"></i></a>
          <a class="social" href="https://discord.gg/3daSHa7"><i class="fab fa-discord"></i></a>
          <a class="social" href="https://www.linkedin.com/company/break-the-algo/"><i class="fab fa-linkedin"></i></a>     
        </div>
      </div>

      <div class="picture_container">
        <img style="width: 100%; height: 100%;" src="@/assets/media/homepagepicture.png">
      </div>
    </div>
  </body>
  
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    redirectToRegister() {
      this.$router.push({name: 'register'})
    }
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        window.location.reload();
        }
    }
}
</script>

<style>
  @import '../assets/css/homepage.css';
</style>