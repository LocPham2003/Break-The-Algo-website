<template>
    <title>Break the Algo</title>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <nav>
      <ul class = "topnav" id = "dropDownMenu">
        <li><router-link to="/"><img src = "./assets/media/bta-assets/bta.png" alt = "logo" class = "logo"/></router-link></li>
        <li><router-link to="/career">Careers</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/support">Support</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li class = 'register_button'><router-link to = "/register">Register</router-link></li>
      </ul>
    </nav>
    <router-view/>
    
</template>

<script>
export default {
  created() {
    document.title = "Break the Algo"
  }
}
</script>

<style type="text/css">
  @import './assets/css/universal_navbar.css';
   body { background: rgb(32,32,32) !important; } /* Adding !important forces the browser to overwrite the default style applied by Bootstrap */
</style>

