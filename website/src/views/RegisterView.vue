<template>
    <div class="register_container">
        <h1>One step closer to success</h1>
        
        <div class="terminal_container">
            <div class = "file_header">
                <h3>JoinBTA</h3>
            </div>
            
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
                ">
                    <p style="color: white">This is Java</p>
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

        </div>
        
    </div>
</template>

<script>
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue'

export default {
    name: 'App', 
    components : {
        Tab, TabNav
    },
    data() {
        return {
            selected: 'Java'
        }
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
            $("h3.head").html("your new header");
        }
    }
}

</script>

<style>
    @import '../assets/css/register_terminal_view.css';
    @import url('http://fonts.cdnfonts.com/css/menlo');
</style>