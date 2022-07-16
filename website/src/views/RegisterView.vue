<template>
    <body>
        <h1>One step closer to success</h1>
        <div class = "terminal_container">
            <div class = "toolbar">
                <p>JoinBTA.py</p>
            </div>
            <div class = "ide">
                <nav>
                    <ul>
                        <li>
                            <div> 
                                <p><i style="color:orange" class="fab fa-java"></i>Main.java</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p><i style="color:#3B79AB" class="fab fa-python"></i>Main.py</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p><i style="color:#659AD2" class="fab fa-cuttlefish">++</i>Main.cpp</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            
                <div class = "text_editor">
                    <p>class BreakTheAlgo {</p>
                    <p>String[] founders = {"Asfandyar Azhar, "Marissa Manago"};</p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>

            </div>
            <div class = "terminal">
                <h3>Terminal</h3>
                <p>Last login: Sat 16 Jul 11:33</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>    
            </div>
        </div>
    </body>
</template>

<script>
export default {
    data() {
        return {
            isActive : false
        };
    }, 
    methods: {
        isClickedEvent(event) {
            console.log("Hey clicking bitch");
            if (event.target.className == 'blue') {
                event.target.className = 'red';
            } else if (event.target.className == 'red') {
                event.target.className = 'blue';
            }
        }
    },
};
</script>


<style>
    @import '../assets/css/register_terminal_view.css';
    @import url('http://fonts.cdnfonts.com/css/menlo');
</style>