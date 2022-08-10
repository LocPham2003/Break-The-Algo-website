<template>
  <title>Break The Algo</title>
  <body>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <div class="content">
      <div class = "homepage_content">
        <h3>hi. let's</h3>
        <h1>break the algo.</h1>

        <a class="get_started">Get started.</a>

        <div class = "social_container">
          <div>
            <a class="social" href="../places"><i class="fab fa-twitter"></i></a>
            <a class="social" href="../places"><i class="fab fa-facebook"></i></a>
            <a class="social" href="../places"><i class="fab fa-instagram"></i></a>
            <a class="social" href="../places"><i class="fab fa-discord"></i></a>
            <a class="social" href="../places"><i class="fab fa-linkedin"></i></a>            
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