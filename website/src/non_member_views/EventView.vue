<template>
    <div class="event_container">
        <EventCard></EventCard>
        <EventCard></EventCard>
    </div>
    
</template>

<script>
import EventCard from '../components/event_view_components/EventCard.vue'

    
export default {
    components : {
    EventCard,
}
}
</script>

<style>
    @import '../assets/css/eventview.css';

</style>