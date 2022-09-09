<template>
    <div class="register_container">
        <h1 style="font-family: Poppins; margin-top: 2.5%; margin-bottom: 2.5%; font-size: 64px;">One step closer to success</h1>
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
            <span>Lastest visit: </span>
            <span>{{ date }}</span>
            <p>Glad to have you here, let's get started :)</p>
            <div v-for="flow in terminalFlow">
                <div v-if="flow.command != 'register' || flow.command != 'login'">   
                    <p v-if="!isLoginOrRegister">{{flow.content}}</p>
                </div>
                <div v-if="flow.command === 'register'">
                    <p>{{flow.content}}</p>
                    <div v-for="displayedCommand in displayedCommands" :key="displayedCommand">
                        <span>{{registerCommands[displayedCommand - 1].text}}</span>
                        <input v-if="displayedCommand == 5 || displayedCommand == 6" type="password" autocomplete="off" v-bind:id="displayedCommand - 1" v-focus v-on:keyup.enter="onEnter" @input="getData">
                        <input v-else type="text" v-bind:id="displayedCommand - 1" v-focus v-on:keyup.enter="onEnter" @input="getData" >

                    </div>
                    <p>{{status}}</p>
                </div>
                <div v-if="flow.command === 'login'">
                    <p>{{flow.content}}</p>
                    <div v-for="displayedCommand in displayedCommands" :key="displayedCommand">
                        <span>{{loginCommands[displayedCommand - 1].text}}</span>
                        <input v-if="displayedCommand == 1" v-bind:id="displayedCommand - 1" v-focus v-on:keyup.enter="onEnter" @input="getData">
                        <input v-if="displayedCommand == 2" v-bind:id="displayedCommand - 1" v-focus v-on:keyup.enter="onEnter" type="password" autocomplete="off" @input="getData">

                    </div>
                    <p>{{status}}</p>
                </div>
                <span v-if="!isLoginOrRegister">guest@breakthealgo.com:$ ~ </span>
                <input v-if="flow.command === 'initial' && !isLoginOrRegister" v-focus v-model="input_text" v-on:keyup.enter="getCommand($event)">
                <input v-if="flow.command != 'initial' && !isLoginOrRegister" v-focus v-on:keyup.enter="getCommand($event)">

            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import TabNav from '../components/register_view_components/TabNav.vue'
import Tab from '../components/register_view_components/Tab.vue'
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
            // To manage how many commands are being displayed 
            displayedCommands: 1,
            selectedInitialCommand: '',
            isLogin : false,
            date: Date(),
            registerCommands: [
                {id: 0, text:"Enter your name: "},
                {id: 1, text:"Enter your study major: "},
                {id: 2, text:"Enter your current study year: "},
                {id: 3, text:"Enter your username: "},
                {id: 4, text:"Enter your password: "},
                {id: 5, text:"Re-enter your password: "},
                {id: 6, text:"Enter your email: "},
                {id: 7, text: this.status}
            ],
            registerCommandsFlow: [{id: 0, text:"Enter your name: "}],
            loginCommands: [
                {text: "Enter your username: "},
                {text: "Enter your password: "}
            ],
            isLoginOrRegister: false,
            // User authentication variables
            name: '',
            studyMajor: '',
            studyYear: '',
            username: '',
            password: '',
            role: 'member',
            passwordReEntry: '',
            email: '',

            // Terminal control variables
            availableCommands: ['help', 'register', 'login', 'discord', 'linkedin', 'instagram', 'email', 'facebook', 'github', 'techstack', 'founders'],
            availableContent: ['These are the following commands that are available to you: help, register, login, exit, founders, discord, instagram, linkedin, email, github.\n You can clear the terminal by typing the \'exit\' command.', 
            'You are currently in register mode. Please fill in the fields below.', 
            'You are currently in login mode. Please fill in the fields below.',
            'https://discord.gg/3daSHa7',
            'https://www.linkedin.com/company/break-the-algo/',
            'https://www.instagram.com/breakthealgo/',
            'info@breakthealgo.com',
            'https://www.facebook.com/breakthealgo/',
            'https://github.com/LocPham2003/Break-The-Algo-website',
            'This website is developed using the MEVN (MongoDB + ExpressJS + VueJS + NodeJS) stack',
            'Founded in 2020 by Asfandyar Azhar (Data Science Bachelor) & Marissa Manago (Computer Science Bachelor)'],
            terminalFlow: [
                {command: 'initial', content: 'Type \'help\' in the terminal to get a list of available commands'}
            ], // This variable will decide how the kind of content the terminal would display based on the user input
            status: '',
            requestDone: false,
            wrongCommand: false
        }
    },
    methods: {
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
        onEnter(e) {
            // If the target == 6 then we know this is the last field
            if (!this.isLogin) {
                if (parseInt(e.target.id) == 6 || this.requestDone) {
                    this.sendUserRequest();
                } else {
                    this.displayedCommands = this.displayedCommands + 1
                }
            } else {
                if (parseInt(e.target.id) == 1 || this.requestDone) {
                    this.sendUserRequest();
                } else {
                    this.displayedCommands = this.displayedCommands + 1;
                }
            }
        },
        getCommand(event) {
            var enteredCommand = event.currentTarget.value;
            
            if (enteredCommand === 'exit') {
                this.$router.go();
            } else {
                if (enteredCommand === 'register' || enteredCommand === 'login') {
                this.isLoginOrRegister = true;
                
                if (enteredCommand === 'login') {
                    this.isLogin = true;
                }
            }

            var commandNotFound = true;
            for (var i = 0; i < this.availableCommands.length; i++) {
                if (this.availableCommands[i] === enteredCommand) {
                    this.terminalFlow.push({
                        command: enteredCommand,
                        content: this.availableContent[i]
                    })
                    commandNotFound = false
                    break;
                }
            }

            if (commandNotFound) {
                this.terminalFlow.push({
                    command: 'not found',
                    content: 'Command \'' + enteredCommand + '\' is not found. Type help to see a list of available commands and try again'
                })
            }
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
                    role: this.role,
                    password: this.password,
                    passwordReEntry: this.passwordReEntry,
                    email: this.email,
                    events: []
                }).then(res => {
                    this.status = res.data.message
                    this.requestDone = true
                    // Need to request the user to login again in here
                    setTimeout(() => this.$router.go(), 2000);
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
</style>