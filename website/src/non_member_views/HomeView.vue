<template>
  <title>Break The Algo</title>
  <body>

    <div class="content">
      <div class = "homepage_content">
        <h3>hi. let's</h3>
        <h1>break the algo.</h1>

        <a class="get_started">Get started.</a>
        
        <div style="margin: 10px 10px 10px 10px; display: flex; flex-direction: row; justify-content: center; align-items: center;">
          <a class="social" href="https://twitter.com/breakthealgo"><i class="fab fa-twitter"></i></a>
          <a class="social" href="https://www.facebook.com/breakthealgo/"><i class="fab fa-facebook"></i></a>
          <a class="social" href="https://www.instagram.com/breakthealgo/"><i class="fab fa-instagram"></i></a>
          <a class="social" href="https://www.instagram.com/breakthealgo/"><i class="fab fa-discord"></i></a>
          <a class="social" href="https://www.linkedin.com/company/break-the-algo/"><i class="fab fa-linkedin"></i></a>     
        </div>

        <div class = "social_container">
          <div>
          </div>
        </div> 
      </div>
      <div class = "bubble_effect">
        <div>
          <img class = "asfandyar" src = "../assets/media/asfandyar.jpg" alt = "coding_picture">
        </div>

        <div>
          <img class = "marissa" src = "../assets/media/marissa.jpg" alt = "coding_picture">
        </div>

        <div>
          <img class = "diako" src = "../assets/media/diako.jpg" alt = "coding_picture">
        </div>

        <div>
          <img class = "nidhish" src = "../assets/media/nidhish.jpg" alt = "coding_picture">     
        </div>

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
  methods() {

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