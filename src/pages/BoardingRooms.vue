<template>
    <div>
        <Header/>
        <Nav/>
        <Main/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/NavBar';
import Main from '@/components/Main';
export default {
    components: {
        Header,
        Nav,
        Main
    },
}
</script>

<style lang="scss" scoped>

</style>