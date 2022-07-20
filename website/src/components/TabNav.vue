<template>
    <div style = "width: 100%;">
        <ul class = "nav nav-item">
            <li class = "nav-pills language">
                <a class="nav-link" :class="{active: 'Java' === selected}" @click="setTab('Java')">
                    <i class = "fab fa-java" style="color: orange"></i>
                    Main.java
                </a>
            </li>

            <li class = "nav-pills language">
                <a class="nav-link" :class="{active: 'Python' === selected}" @click="setTab('Python')">
                    <i class = "fab fa-python" style = "color:#3C78AA"></i>
                    Main.py
                </a>
            </li>

            <li class = "nav-pills language">
                <a class="nav-link" :class="{active: 'C++' === selected}" @click="setTab('C++')">
                    <i class = "fab fa-cuttlefish" style="color: #4B6D92">++</i>
                    Main.cpp
                </a>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            tabs: {
                type: Array,
                required: true,
            },
            selected : {
                type: String, 
                required: true,
            }
        },
        methods: {
            setTab(tab) {
                this.$emit('selected', tab)
            }
        }
    }
</script>

<style scoped>

    div {
        margin: 0;
    }
    ul.nav{
        background-color: #1B2029;
    }

    ul.nav li.language {
        font-family: Menlo;
    }

    ul.nav li.language a {
        color: white;
        font-size: 12 px;
    }

    ul.nav li.language .active {
        background-color: #31353E;
    }

</style>
