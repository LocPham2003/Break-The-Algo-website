<template>
  <title>Break The Algo</title>
  <body>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      
    <nav>
        <ul class = "topnav" id = "dropDownMenu">
            <li><a href="..\html\HomePage.html" id="home">Home</a></li>
            <li><a href="..\html\Blogs-And-Articles.html" id="blogs">Blogs & Articles</a></li>
            <li><a href="..\html\Support.html" id="support">Support</a></li>
            <li><a href="..\html\About.html" id="about">About</a></li>
            <li class="register_button"><a href="places">Register</a></li>    
        </ul>               
    </nav>

    <div class="content">
      <div class = "homepage_content">
        <h3>hi. let's</h3>
        <h1>break the algo.</h1>

        <a class="get_started">Get started</a>

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
      <div class = "bubble_effect"></div>
    </div>

  </body>
  
</template>

<script>

export default {
  name: 'App',
  created() {
    document.title = "Break The Algo"
  },
  components: {

  }
}
</script>

<style>
  @import './assets/css/homepage.css';
</style>
