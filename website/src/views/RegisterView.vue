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
            
            <TabNav :tabs="['Java', 'Python', 'C++']" :selected="selected" @selected="setSelected">
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
                    <span>&nbsp&nbsp&nbsp&nbsp <span style="color: #F22739">public static</span> <span style="color: aqua">void</span> <span style="color: greenyellow">join</span>(<span style="color: aqua">String</span> name, <span style="color: aqua">String</span> studyMajor, <span style="color: aqua">int</span> year) {</span>
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
                ">
                    <p style="color: white">This is Python</p>
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
                ">
                    <p style="color: white">This is C++</p>
                </div>
            </Tab>
        </TabNav>
        
        <div class="terminal_container">
            <h5>Terminal</h5>
            <span>Last login: </span>
            <span>{{ date }}</span>
            <p>Glad to have you here, let's get started :)</p>
            <p>To login, type BreakTheAlgo.login(). To register, type BreakTheAlgo.register()</p>
            <span>&#62 </span>
            <input v-model="input_text" v-on:keyup.enter="onEnter" @input="onInput">
            <li v-for="index in displayed_commands" :key="index">
                <span v-if="commands[index - 1].id != 7">&#62 </span>
                {{ commands[index - 1].text }}
                <input  v-on:keyup.enter="onEnter" v-if="(commands[index - 1].id === 4 || commands[index - 1].id === 5)" type="password">
                <input  v-on:keyup.enter="onEnter" v-if="!(commands[index - 1].id === 4 || commands[index - 1].id === 5) && commands[index - 1].id != 7">
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

export default {
    name: 'App', 
    components : {
        Tab, TabNav
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