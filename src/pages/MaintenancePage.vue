<template>
    <div>
        <Header @open="mobile_nav = true"/>
        <Nav v-if="mobile_nav" class="mobile_nav" @close="mobile_nav = false"/>
        <Nav class="desktop_nav"/>
        <Maintenance/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/NavBar';
import Maintenance from '@/components/Maintenance';
export default {
    components: {
        Header,
        Nav,
        Maintenance
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