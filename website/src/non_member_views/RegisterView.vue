<template>
    <div class="register_container">
        <h1>One step closer to success</h1>
        
        <div class="ide_container">
            <nav class = "file_header">
                <ul>
                    <li class="element"><span style="color: red"><i class="fas fa-circle"></i></span></li>
                    <li class="element"><span style="color: yellow"><i class="fas fa-circle"></i></span></li>
                    <li class="element"><span style="color: green"><i class="fas fa-circle"></i></span></li>
                    <li class="main_title"><a>{{ fileName }}</a></li>
                </ul>
            </nav>
            
            <TabNav class="ide_body" :tabs="['Java', 'Python', 'C++']" :selected="selected" @selected="setSelected">
            <Tab :isSelected="selected === 'Java'">
                <div style="
                    background-color: #31353E;
                    text-align: left;
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    font-family: Menlo;
                    color: white;
                ">
                    <span style="color:#F22739">import java.util.<span style="color:orange">*</span>;</span>
                    <br>
                    <br>
                    <span style="color:#F22739">class </span>
                    <span style="color:#A6E22E;
                                text-decoration: underline;
                                text-underline-offset: 2px;
                    ">BreakTheAlgo</span>
                    <span> {</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color:aqua">String[]</span> founders = {<span style="color: yellow">"Asfandyar Azhar", "Marissa Manago"</span>};</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color:#F22739">static</span> <span style="color: aqua">Map</span>&#60<span style="color: aqua">String</span>, <span style="color: aqua">String</span>&#62 socials;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color:#F22739">static</span> {</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp socials = <span style="color:#F22739">new</span> <span style="color: aqua">HashMap</span>&#60&#62<span style="color: cadetblue">()</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp socials.<span style="color:greenyellow">put</span><span style="color:cadetblue">(</span><span style="color: yellow">"facebook"</span>, <span style="color: yellow">"https://www.facebook.com/breakthealgo"</span><span style="color: cadetblue">)</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp socials.<span style="color:greenyellow">put</span><span style="color:cadetblue">(</span><span style="color: yellow">"linkedin"</span>, <span style="color: yellow">"https://www.linkedin.com/company/break-the-algo/"</span><span style="color: cadetblue">)</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp socials.<span style="color:greenyellow">put</span><span style="color:cadetblue">(</span><span style="color: yellow">"discord"</span>, <span style="color: yellow">"https://discord.com/invite/3daSHa7"</span><span style="color: cadetblue">)</span>;</span>
                    <br>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color:aqua">ArrayList</span>&#60<span style="color: aqua">Member</span>&#62 members = <span style="color:#F22739">new</span> <span style="color: aqua">ArrayList</span>&#60&#62<span style="color: cadetblue">()</span>;</span>
                    <br>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color: #F22739">public static</span> <span style="color: aqua">void</span> <span style="color: greenyellow">join</span>(<span style="color: aqua">String</span> name, 
                    <span style="color: aqua">String</span> studyMajor, 
                    <span style="color: aqua">int</span> year){</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color: orange">this</span>.members.<span style="color: greenyellow">add</span><span style="color: cadetblue">(</span><span style="color: #F22739">new </span> <span style="color: greenyellow">Member</span><span style="color: yellow">(</span>name, studyMajor, year<span style="color: yellow">)</span><span style="color: cadetblue">)</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp }</span>
                    <br>
                    <span>}</span>
                </div>
            </Tab>
            <Tab :isSelected="selected === 'Python'">
                <div style="
                    background-color: #31353E;
                    text-align: left;
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    font-family: Menlo;
                    color: white;
                ">
                    <span style="color:aqua">class </span>
                    <span style="color:#A6E22E;
                                text-decoration: underline;
                                text-underline-offset: 2px;">
                            BreakTheAlgo</span>
                    <span>:</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbspfounders<span style = "color: #F22739"> = </span><span style="color: yellow">['Asfandyar Azhar', 'Marissa Manago']</span></span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbspsocials<span style = "color: #F22739"> = 
                        </span><span style="color: yellow">{
                            <br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'facebook' <span style="color: white">:</span> 'https://www.facebook.com/breakthealgo'<span style="color: white">,</span>
                            <br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'linkedin' <span style="color: white">:</span> 'https://www.linkedin.com/company/break-the-algo/'<span style="color: white">,</span>
                            <br>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'discord' <span style="color: white">:</span> 'https://discord.com/invite/3daSHa7'
                            <br>
                            &nbsp&nbsp&nbsp&nbsp}</span></span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbspmembers <span style = "color: #F22739"> = </span></span>
                    <span style="color:#A6E22E;
                                text-decoration: underline;
                                text-underline-offset: 2px;">
                            list</span>
                    <span style="color: yellow">()</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp</span>
                    <span style="color:#A6E22E;
                                text-decoration: underline;
                                text-underline-offset: 2px;">@staticmethod</span>
                    <br>
                    <span style="color: aqua">&nbsp&nbsp&nbsp&nbspdef </span><span style="color: #A6E22E">join</span>
                    <span style="color: yellow">(</span><span style="color: orange">name, studyMajor, year, username, password, email</span><span style="color: yellow">)</span>
                    <span>:</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspnew_member = Member<span style="color: yellow">(</span><span style="color: orange">name, studyMajor, year, username, password, email</span><span style="color: yellow">)</span></span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                    <span style="color:#A6E22E;
                                text-decoration: underline;
                                text-underline-offset: 2px;">BreakTheAlgo</span>
                    <span>.members.</span>
                    <span style="color:#A6E22E">append</span>
                    <span style="color: yellow">(</span>new_member<span style="color: yellow">)</span>
                </div>
            </Tab>
            <Tab :isSelected="selected === 'C++'">
                <div style="
                    background-color: #31353E;
                    text-align: left;
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    font-family: Menlo;
                    color: white;
                ">
                    <span style="color:#F22739">#include <span style="color:#E6DB74">&#60string.h&#62</span>;</span>
                    <br>
                    <span style="color:#F22739">#include <span style="color:#E6DB74">&#unordered_map&#62</span>;</span>
                    <br>
                    <span style="color:#F22739">#include <span style="color:#E6DB74">&#60vector&#62</span>;</span>
                    <br>
                    <span style="color:#F22739">#include <span style="color:#E6DB74">&#60members.hpp&#62</span>;</span>
                    <br>
                    <br>
                    <span style="color:#F22739">class </span>
                    <span style="color:#A6E22E;
                                text-decoration: underline;
                                text-underline-offset: 2px;
                    ">BreakTheAlgo</span>
                    <span> {</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color:#A6E22E; text-decoration: underline; text-underline-offset: 2px;">string</span> founders<span style="color: #DA70D6">[<span style="color: #AE76C6">2</span>]</span> = <span style="color:#DA70D6">{</span><span style="color: yellow">"Asfandyar Azhar", "Marissa Manago"</span><span style="color:#DA70D6">}</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color:#A6E22E; text-decoration: underline; text-underline-offset: 2px;">unordered_map</span></span>
                    <span style="color: #F22739;">&#60</span>   
                    <span style="color:#A6E22E; text-decoration: underline; text-underline-offset: 2px;">string</span>, <span style="color:#A6E22E; text-decoration: underline; text-underline-offset: 2px;">string</span>
                    <span style="color: #F22739; ">&#62</span>       
                    <span> socials;</span>            
                    <br>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp socials<span style="color:#DA70D6">[<span style = "color: yellow">"facebook"</span>]</span> = <span style="color: yellow">"https://www.facebook.com/breakthealgo"</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp socials<span style="color:#DA70D6">[<span style = "color: yellow">"linkedin"</span>]</span> = <span style="color: yellow">"https://www.linkedin.com/company/break-the-algo/"</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp socials<span style="color:#DA70D6">[<span style = "color: yellow">"discord"</span>]</span> = <span style="color: yellow">"https://discord.com/invite/3daSHa7"</span>;</span>
                    <br>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color:#A6E22E; text-decoration: underline; text-underline-offset: 2px;">vector</span></span>
                    <span style="color: #F22739;">&#60</span>   
                    <span style="color:#A6E22E; text-decoration: underline; text-underline-offset: 2px;">string</span>
                    <span style="color: #F22739; ">&#62</span>
                    <span> members;</span>                   
                    <br>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color: aqua">public:</span> 
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span>
                    <span style="color: aqua">void </span>
                    <span style="color: greenyellow">join</span>(<span style="color: aqua">String</span> name, 
                    <span style="color: aqua">String</span> studyMajor, 
                    <span style="color: aqua">int</span> year) {</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="color: orange">this</span>.members.<span style="color: greenyellow">push_back</span><span style="color: cadetblue">(</span><span style="color: #F22739">new </span> <span style="color: greenyellow">Member</span><span style="color: yellow">(</span>name, studyMajor, year<span style="color: yellow">)</span><span style="color: cadetblue">)</span>;</span>
                    <br>
                    <span>&nbsp&nbsp&nbsp&nbsp }</span>
                    <br>
                    <span>}</span>
                </div>
            </Tab>
        </TabNav>
        
        <div class="terminal_container">
            <h5>BreakTheAlgo Terminal</h5>
            <span>Copyright (C) BreakTheAlgo. All rights reserved</span>
            <br>
            <br>
            <span>Last login: </span>
            <span>{{ date }}</span>
            <p>Glad to have you here, let's get started :)</p>
            <p>To login, type BreakTheAlgo.login(). Here for the first time ? Type BreakTheAlgo.join()</p>
            <span>Type your command: </span>
            <input v-focus id="initial_command" v-model="input_text" v-on:keyup.enter="getInitialCommand" ref="first_command" autofocus>
            <div v-if="!isLogin">
                <li v-for="index in displayedCommands" :key="index">
                <span v-if="commands[index - 1].id != 7">&#62 </span>
                {{ commands[index - 1].text }}
                <input v-bind:id="commands[index - 1].id" v-if="(commands[index - 1].id === 4 || commands[index - 1].id === 5)" v-on:keyup.enter="onEnter" @input="getData" @click="editField" type="password">
                <input v-bind:id="commands[index - 1].id" v-if="!(commands[index - 1].id === 4 || commands[index - 1].id === 5) && (commands[index - 1].id != 6)" v-on:keyup.enter="onEnter" @input="getData" @click="editField" type="text">
                <input v-bind:id="commands[index - 1].id" v-if="commands[index - 1].id === 6" v-on:keyup.enter="sendUserRequest" @input="getData" @click="editField" type="text">
            </li>
            </div>
            

            <div v-if="isLogin">
                <li v-for="index in displayedCommands" :key="index">
                <span v-if="commands[index - 1].id != 7">&#62 </span>
                {{ commands[index - 1].text }}
                <input v-bind:id="commands[index - 1].id" v-if="commands[index - 1].id === 0" v-on:keyup.enter="onEnter" @input="getData" type="text">
                <input v-bind:id="commands[index - 1].id" v-if="commands[index - 1].id === 1" v-on:keyup.enter="sendUserRequest" @input="getData" type="password">
            </li>
            </div>
            <!--Need a better way to do this so it is uniform in both register and login view-->
            <p v-if="requestDone">{{ status }}</p>
        </div>
        </div>
        
    </div>
</template>

<script>
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue'
import UserService from '@/services/UserService'

// for autofocusing on the terminal when the page is loaded
const focus = {
    mounted: (el) => el.focus()
}

export default {
    name: 'Login', 
    components : {
        Tab, TabNav
    },
    directives: {
        focus
    },
    data() {
        return {
            // UI state control variables
            selected: 'Java',
            fileName: 'JoinBTA.java',
            displayedCommands: 0,
            selectedInitialCommand: '',
            isLogin : false,
            date: Date(),
            commands: [
                {id: 0, text:"Enter your name: "},
                {id: 1, text:"Enter your study major: "},
                {id: 2, text:"Enter your current study year: "},
                {id: 3, text:"Enter your username: "},
                {id: 4, text:"Enter your password: "},
                {id: 5, text:"Re-enter your password: "},
                {id: 6, text:"(Optional) Enter your email for future notification and newsletter: "},
            ],
            // User authentication variables
            name: '',
            studyMajor: '',
            studyYear: '',
            username: '',
            password: '',
            passwordReEntry: '',
            email: '',

            // Terminal control variables
            status: '',
            requestDone: false
        }
    },
    methods: {
        setCookie(cookieName, cookieValue) {
            document.cookie = cookieName + "=" + cookieValue
        },
        setSelected(tab) {
            this.selected = tab;
            if (tab === 'Java') {
                this.fileName = 'JoinBTA.java'
            } else if (tab === 'Python') {
                this.fileName = 'JoinBTA.py'
            } else if (tab === 'C++') {
                this.fileName = 'JoinBTA.cpp'
            }
        },
        onEnter() {
            // If the request is not sent, display the next message
            if (!this.requestDone) {
                this.displayedCommands = this.displayedCommands + 1
            // If the request has already been sent, then resend the user request if the user press enter
            } else {
                this.sendUserRequest()
            }
        },
        getInitialCommand(e) {
           this.selectedInitialCommand = e.target.value 

           if (this.selectedInitialCommand === "BreakTheAlgo.join()") {
                this.displayedCommands = this.displayedCommands + 1
           } else if (this.selectedInitialCommand === "BreakTheAlgo.login()") {
                this.isLogin = true
                this.commands = [
                    {id: 0, text:"Enter your username: "},
                    {id: 1, text:"Enter your password: "},
                ]
                // Reset the id so when iterating through the list, it starts from the beginning
                this.displayedCommands = this.displayedCommands + 1
           } else {
                console.log("You type in the wrong command, try again")
           }
        },  
        getData(e) {
            // If this is true then we know the user wants to register
            if (!this.isLogin) {
                switch(parseInt(e.target.id)) {
                case 0:
                    this.name = e.target.value
                    break;
                case 1:
                    this.studyMajor = e.target.value
                    break;
                case 2: 
                    this.studyYear = e.target.value
                    break;
                case 3:
                    this.username = e.target.value
                    break;
                case 4: 
                    this.password = e.target.value
                    break;
                case 5: 
                    this.passwordReEntry = e.target.value
                    break;
                case 6: 
                    this.email = e.target.value
                    break;
            }
            } else {
                // If the code reaches here then the user wants to login
                switch(parseInt(e.target.id)) {
                    case 0:
                        this.username = e.target.value
                        break;
                    case 1:
                        this.password = e.target.value
                        break;
                }
            }
            
        }, 
        async sendUserRequest() {
            if (!this.isLogin) {
                await UserService.addUser({
                    name: this.name,
                    studyMajor: this.studyMajor,
                    studyYear: this.studyYear,
                    username: this.username,
                    password: this.password,
                    passwordReEntry: this.passwordReEntry,
                    email: this.email
                }).then(res => {
                    this.status = res.data.message
                    this.requestDone = true
                    setTimeout(() => this.$router.push({name: 'memberHome'}), 2000);
                }, err => {
                    this.status = err.response.data.message
                    this.requestDone = true
                })
                // Use this to redirect to another page once sign in is done
            } else {
                await UserService.loginUser({
                    username: this.username,
                    password: this.password
                }).then(res => {
                    this.status = res.data.message
                    //this.setCookie('accessToken', res.data.token)
                    this.requestDone = true
                    setTimeout(() => this.$router.push({name: 'memberHome'}), 2000);
                }, err => {
                    this.status = err.response.data.message
                    this.requestDone = true
                })
            }
        }
    }
}
</script>

<style>
    @import '../assets/css/register_terminal_view.css';
    @import url('http://fonts.cdnfonts.com/css/menlo');
</style>