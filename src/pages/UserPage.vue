<template>
    <div>
        <Header @open="mobile_nav = true"/>
        <Nav v-if="mobile_nav" class="mobile_nav" @close="mobile_nav = false"/>
        <Nav class="desktop_nav"/>
        <User/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/NavBar';
import User from '@/components/User';
export default {
    components: {
        Header,
        Nav,
        User
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