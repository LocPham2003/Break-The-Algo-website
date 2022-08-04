<template>
    <title>Break the Algo</title>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <nav v-if="!isLoggedIn">
      <ul class = "topnav" id = "dropdown_menu">
        <li class = "logo_container"><router-link to="/"><img src = "./assets/media/bta-assets/bta.png" alt = "logo" class = "logo"/></router-link></li>
        <li class = "home_element"><router-link to="/">Home</router-link></li>
        <li class = "text"><router-link to="/event">Event</router-link></li>
        <li class = "text"><router-link to="/blog">Blog</router-link></li>
        <li class = "text"><router-link to="/support">Support</router-link></li>
        <li class = "text"><router-link to="/about">About</router-link></li>
        <li class = 'button'><router-link to = "/register">Register</router-link></li>
        <li class="collapse_icon"><a @click="collapse()">&#x2715</a></li>    
        <li class="dropdown_icon"><a @click="navBarToggle()">&#9776</a></li>    
      </ul>
    </nav>

    <nav v-else>
      <ul class = "topnav" id = "dropdown_menu">
        <li class = "logo_container"><router-link to="/memberHome"><img src = "./assets/media/bta-assets/bta.png" alt = "logo" class = "logo"/></router-link></li>
        <li class = "home_element"><router-link to="/">Home</router-link></li>
        <li class="text"><router-link to="/event">Event</router-link></li>
        <li class="text"><router-link to="/blog">Blog</router-link></li>
        <li class="text"><router-link to="/support">Support</router-link></li>
        <li class="text"><router-link to="/about">About</router-link></li>
        <li class = 'button'><a @click="logOut">Log out</a></li>
        <li class = 'button'><router-link to = "/dashboard">Member</router-link></li>
        <li class="collapse_icon"><a @click="collapse()">&#x2715</a></li>    
        <li class="dropdown_icon"><a @click="navBarToggle()">&#9776</a></li>    
      </ul>
    </nav>
    <router-view/>
    
</template>

<script>
import UserService from '@/services/UserService'

export default {
  data() {
    return {
      isLoggedIn : false
    }
  },
  methods: {
    // UI methods
    navBarToggle() {
      var x = document.getElementById("dropdown_menu");
      if (x.className === "topnav") {
        x.className += " responsive";
      } 
    },
    collapse() {
      var x = document.getElementById("dropdown_menu");
      if (x.className != "topnav") {
        x.className = "topnav";
      } 
    },
    // Get the navigation bar display according to the login state of the user
    async selectDisplay() {
        const response = await UserService.fetchLoginState()
        this.isLoggedIn = response.data.isLoggedIn
    },
    // Logout the user 
    async logOut() {
      const response = await UserService.logoutUser()
      console.log(response.data.isLoggedIn)
      this.$router.push({name: 'home'})
    }
  },
  beforeMount() {
    document.title = "Break the Algo"
    this.selectDisplay()
  }
}
</script>

<style type="text/css">
  @import './assets/css/universal_navbar.css';
   body { background: rgb(32,32,32) !important; } /* Adding !important forces the browser to overwrite the default style applied by Bootstrap */
</style>

