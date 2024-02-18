<template>
    <div>
        <Header @open="mobile_nav = true"/>
        <Nav v-if="mobile_nav" class="mobile_nav" @close="mobile_nav = false"/>
        <Nav class="desktop_nav"/>
        <Main/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/NavBar';
import Main from '@/components/Main';
import axios from 'axios';
export default {
    components: {
        Header,
        Nav,
        Main
    },
    data(){
        return{
            mobile_nav : false,
            
        }
    },
    created(){
        this.$store.dispatch('title/setTitle', 'Room List');
    }
}
</script>

<style lang="scss" scoped>

</style>