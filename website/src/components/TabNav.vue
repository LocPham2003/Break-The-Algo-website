<template>
    <div style = "width: 100%">
        <ul class = "nav nav-item">
            <li v-for="tab in tabs" :key="tab" class = "nav-pills language">
                <a class="nav-link" :class="{active: tab === selected}" @click="setTab(tab)">
                    
                    {{tab}}
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
