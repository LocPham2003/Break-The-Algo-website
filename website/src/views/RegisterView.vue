<template>
    <div class="register_container">
        <h1>One step closer to success</h1>
        
        <div class="ide_container">
            <nav class = "file_header">
                <ul>
                    <li class="element"><span style="color: red"><i class="fas fa-circle"></i></span></li>
                    <li class="element"><span style="color: yellow"><i class="fas fa-circle"></i></span></li>
                    <li class="element"><span style="color: green"><i class="fas fa-circle"></i></span></li>
                    <li class="main_title"><a>{{ file_name }}</a></li>
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
            <input v-focus id="initial_command" v-model="input_text" v-on:keyup.enter="onEnter" ref="first_command" @input="onInput" autofocus>
            <li v-for="index in displayed_commands" :key="index">
                <span v-if="commands[index - 1].id != 7">&#62 </span>
                {{ commands[index - 1].text }}
                <input v-on:keyup.enter="onEnter" v-if="(commands[index - 1].id === 4 || commands[index - 1].id === 5)" type="password">
                <input v-on:keyup.enter="onEnter" v-if="!(commands[index - 1].id === 4 || commands[index - 1].id === 5) && commands[index - 1].id != 7">
            </li>

        </div>
        </div>
        
    </div>
</template>

<script>
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue'

// Give each commands an unique id
let id = 0

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
            selected: 'Java',
            file_name: 'JoinBTA.java',
            displayed_commands: 0,
            date: Date(),
            commands: [
                {id: id++, text:"Enter your name: "},
                {id: id++, text:"Enter your study major: "},
                {id: id++, text:"Enter your current study year: "},
                {id: id++, text:"Enter your username: "},
                {id: id++, text:"Enter your password: "},
                {id: id++, text:"Re-enter your password: "},
                {id: id++, text:"(Optional) Enter your email for future notification and newsletter: "},
                {id: id++, text:"Congrats! You've been registered, welcome to BTA :D"}
            ]
        }
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
            if (tab === 'Java') {
                this.file_name = 'JoinBTA.java'
            } else if (tab === 'Python') {
                this.file_name = 'JoinBTA.py'
            } else if (tab === 'C++') {
                this.file_name = 'JoinBTA.cpp'
            }
        },
        onEnter() {
            this.displayed_commands = this.displayed_commands + 1
        }
    }
}

</script>

<style>
    @import '../assets/css/register_terminal_view.css';
    @import url('http://fonts.cdnfonts.com/css/menlo');
</style>