<template>
    <v-footer
            absolute>
        <v-col
                class="text-center"
                cols="12"
        >
            Made with VueJS, Vuetify and ❤
            <v-spacer></v-spacer>
            &copy;{{ new Date().getFullYear() }} Erik Sanne
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
