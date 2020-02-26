<template>
    <div id="addModuleFab">
        <v-btn
                fab
                color="cyan accent-2"
                bottom
                right
                absolute
                @click="dialog = !dialog"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="500px">
            <AddModule></AddModule>
        </v-dialog>
    </div>
</template>

<script>
    import AddModule from "@/components/AddModule";
    export default {
        name: "AddModuleFab",
        components: {AddModule},
        data() {
            return {
                dialog: false,
            }
        }
    }
</script>

<style scoped>

</style>
