<template>
    <v-card>
        <v-card-title>
            All Modules
            <v-spacer></v-spacer>
            <v-text-field
                    class="pt-0 mt-0"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on">Add Module</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="4">
                                    <v-text-field v-model="editedModule.year" label="Semester"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-text-field v-model="editedModule.semester" label="Semester"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-text-field v-model.number="editedModule.level"
                                                  label="Level"
                                                  type="number"
                                                  :rules="[rules.required, rules.number]"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedModule.name"
                                                  label="Name"
                                                  :rules="[rules.required]"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-text-field v-model="editedModule.code"
                                                  label="Code"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-text-field v-model.number="editedModule.credits"
                                                  label="Credits"
                                                  type="number"
                                                  :rules="[rules.number]"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model.number="editedModule.mark"
                                                  label="Mark"
                                                  type="number"
                                                  :rules="[rules.required, rules.number]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model.number="editedModule.grade"
                                                  label="Grade"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model.number="editedModule.component1Weight"
                                                  label="Component 1 Weight"
                                                  type="number"
                                                  :rules="[rules.number]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model.number="editedModule.component1Mark"
                                                  label="Component 1 mark"
                                                  type="number"
                                                  :rules="[rules.number]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model.number="editedModule.component2Weight"
                                                  label="Component 2 Weight"
                                                  type="number"
                                                  :rules="[rules.number]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model.number="editedModule.component2Mark"
                                                  label="Component 2 mark"
                                                  type="number"
                                                  :rules="[rules.number]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="modules"
                :search="search"
                class="elevation-1"
        >
            <template v-slot:item.mark="{ item }">
                <span>{{item.mark}}%</span>
            </template>
            <template v-slot:item.component1Weight="{ item }">
                <span v-if="item.component1Weight">{{item.component1Weight}}%</span>
            </template>
            <template v-slot:item.component1mark="{ item }">
                <span v-if="item.component1Mark">{{item.component1Mark}}%</span>
            </template>
            <template v-slot:item.component2Weight="{ item }">
                <span v-if="item.component2Weight">{{item.component2Weight}}%</span>
            </template>
            <template v-slot:item.component2mark="{ item }">
                <span v-if="item.component2Mark">{{item.component2Mark}}%</span>
            </template>
            <template v-slot:item.action="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editModule(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        @click="deleteModule(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    export default {
        name: "ModuleList",
        data() {
            return {
                rules: {
                    required: value => !!value || 'Required',
                    max25Chars: value => value.length <= 25 || 'Max 25 characters',
                    number: value => !isNaN(value) || 'Must be a number',
                },
                dialog: false,
                search: '',
                headers: [
                    {text: 'Year', value: 'year'},
                    {text: 'Semester', value: 'semester'},
                    {text: 'Level', value: 'level'},
                    {text: 'Module', value: 'name'},
                    {text: 'Module Code', value: 'code'},
                    {text: 'Credits', value: 'credits'},
                    {text: 'Mark', value: 'mark'},
                    {text: 'Grade', value: 'grade'},
                    {text: 'Component 1 Weight', value: 'component1Weight'},
                    {text: 'Component 1 mark', value: 'component1Mark'},
                    {text: 'Component 2 Weight', value: 'component2Weight'},
                    {text: 'Component 2 mark', value: 'component2Mark'},
                    {text: 'Actions', value: 'action'}
                ],
                defaultModule: {
                    year: '2016/17',
                    semester: 'TR1',
                    level: 7,
                    code: 'SET07102',
                    name: 'Software Development 1',
                    credits: 20,
                    mark: 77,
                    grade: 'M',
                    component1Weight: 100,
                    component1Mark: 77,
                    component2Weight: '',
                    component2Mark: '',
                },
                editedModule: {
                    year: '2016/17',
                    semester: 'TR1',
                    level: 7,
                    code: 'SET07102',
                    name: 'Software Development 1',
                    credits: 20,
                    mark: 77,
                    grade: 'M',
                    component1Weight: 100,
                    component1Mark: 77,
                    component2Weight: '',
                    component2Mark: '',
                },
                editedIndex: -1,
            }
        },
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Module' : 'Edit Module'
            },
            modules() {
                return this.$store.state.modules
            }
        },
        watch: {
            dialog(val) {
                val || this.close()
            },
        },
        methods: {
            editModule(module) {
                this.editedIndex = this.modules.indexOf(module);
                this.editedModule = Object.assign({}, module);
                this.dialog = true;
            },
            deleteModule(module) {
                confirm('Are you sure you want to delete this module?') && this.$store.dispatch('deleteModule', module)
            },
            close() {
                this.dialog = false;
                setTimeout(() => {
                    this.editedModule = Object.assign({}, this.defaultModule);
                    this.editedIndex = -1
                }, 300)
            },
            save() {
                this.$store.dispatch('updateOrAddModule', this.editedModule);
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>
