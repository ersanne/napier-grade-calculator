<template>
    <v-app>
        <AppBar></AppBar>
        <v-content>
            <router-view/>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import AppBar from "@/components/AppBar";
    import Footer from "@/components/Footer";

    export default {
        components: {Footer, AppBar}
    }
</script>

<style>

</style>
