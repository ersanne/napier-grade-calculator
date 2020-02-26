<template>
    <v-card>
        <v-card-title>Modules</v-card-title>
        <v-simple-table fixed-header>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Semester</th>
                    <th class="text-left">Module Code</th>
                    <th class="text-left">Module Name</th>
                    <th class="text-left">Component 1 Weight</th>
                    <th class="text-left">Component 1 Grade</th>
                    <th class="text-left">Component 2 Weight</th>
                    <th class="text-left">Component 2 Grade</th>
                    <th class="text-left">Overall Grade</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in items" :key="item.name">
                    <td>{{item.semester}}</td>
                    <td>{{item.code}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.component1Weight}}</td>
                    <td>{{item.component1Grade}}</td>
                    <td>{{item.component2Weight}}</td>
                    <td>{{item.component2Grade}}</td>
                    <td>{{item.grade}}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
    export default {
        name: "ModuleList",
        data() {
            return {
                items: [
                    {
                        semester: 'Semester 1',
                        code: 'TestCode',
                        name: 'Test Name',
                        component1Weight: 50,
                        component1Grade: 70,
                        component2Weight: 50,
                        component2Grade: 86,
                        grade: 78
                    },
                    {
                        semester: 'Semester 1',
                        code: 'TestCode',
                        name: 'Test Name',
                        component1Weight: 50,
                        component1Grade: 70,
                        component2Weight: 50,
                        component2Grade: 86,
                        grade: 78
                    },
                    {
                        semester: 'Semester 1',
                        code: 'TestCode',
                        name: 'Test Name',
                        component1Weight: 50,
                        component1Grade: 70,
                        component2Weight: 50,
                        component2Grade: 86,
                        grade: 78
                    },
                    {
                        semester: 'Semester 1',
                        code: 'TestCode',
                        name: 'Test Name',
                        component1Weight: 50,
                        component1Grade: 70,
                        component2Weight: 50,
                        component2Grade: 86,
                        grade: 78
                    },
                    {
                        semester: 'Semester 1',
                        code: 'TestCode',
                        name: 'Test Name',
                        component1Weight: 50,
                        component1Grade: 70,
                        component2Weight: 50,
                        component2Grade: 86,
                        grade: 78
                    },
                    {
                        semester: 'Semester 1',
                        code: 'TestCode',
                        name: 'Test Name',
                        component1Weight: 50,
                        component1Grade: 70,
                        component2Weight: 50,
                        component2Grade: 86,
                        grade: 78
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
