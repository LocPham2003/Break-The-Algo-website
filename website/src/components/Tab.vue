<template>
    <div v-if="isSelected">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isSelected : {
            type: Boolean
        }
    }
}
    
</script>

<style>
    
</style>