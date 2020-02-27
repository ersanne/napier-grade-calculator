<template>
    <v-app-bar app>
        <div class="d-flex align-center">
            <v-img
                    alt="Napier Logo"
                    src="/logo/napier_logo_white_text.png"
                    class="shrink mr-3"
                    contain
                    transition="scale-transition"
                    width="180"
            >
            </v-img>
        </div>
        <v-toolbar-title>
            Napier Grade Calculator
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn disabled>
                Export
            </v-btn>
            <v-btn disabled>
                About
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar"
    }
</script>

<style scoped>

</style>
