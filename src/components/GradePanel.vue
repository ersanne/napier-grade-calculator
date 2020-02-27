<template>
    <v-card>
        <v-card-title>Overall Grades</v-card-title>
        <v-card-text>
            <h2> Current Degree Average: {{getCurrentDegreeAverage}}</h2><br>
            <h3>Overall Average: {{getOverallAverage}}</h3><br>
            <div v-for="level in getLevels" :key="level">
                <h4>Level {{level}} Average: {{getAverageByLevel(level)}}</h4><br>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "GradePanel",
        computed: {
            ...mapGetters([
                'getCurrentDegreeAverage',
                'getOverallAverage',
                'getLevels',
                'getAverageByLevel',
            ])
        }
    }
</script>

<style scoped>

</style>
