<template>
    <div>
        <Header @open="mobile_nav = true"/>
        <Nav v-if="mobile_nav" class="mobile_nav" @close="mobile_nav = false"/>
        <Nav class="desktop_nav"/>
        <Reservation/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/NavBar';
import Reservation from '@/components/Reservation';
export default {
    components: {
        Header,
        Nav,
        Reservation
    },
    data(){
        return{
            mobile_nav : false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>