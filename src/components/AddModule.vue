<template>
    <v-card>
        <v-card-text>
            <v-text-field label="File name"></v-text-field>

            <small class="grey--text">* This doesn't actually save.</small>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text color="primary" @click="dialog = false">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "AddModule"
    }
</script>

<style scoped>

</style>
