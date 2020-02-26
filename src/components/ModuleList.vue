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
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.semester" label="Semester"
                                                  :rules="[rules.max25Chars]"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.level"
                                                  label="Level"
                                                  :rules="[rules.required, rules.number]"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.name"
                                                  label="Name"
                                                  :rules="[rules.required]"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.code"
                                                  label="Code"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="editedItem.grade"
                                                  label="Grade"
                                                  :rules="[rules.number]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.component1Weight"
                                                  label="Component 1 Weight"
                                                  :rules="[rules.number()]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.component1Grade"
                                                  label="Component 1 Grade"
                                                  :rules="[rules.number()]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.component2Weight"
                                                  label="Component 2 Weight"
                                                  :rules="[rules.number()]"
                                                  suffix="%"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="editedItem.component2Grade"
                                                  label="Component 2 Grade"
                                                  :rules="[rules.number()]"
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
            <template v-slot:item.action="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        @click="deleteItem(item)"
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
                    {text: 'Semester', value: 'semester'},
                    {text: 'Level', value: 'level'},
                    {text: 'Module', value: 'name'},
                    {text: 'Module Code', value: 'code'},
                    {text: 'Overall Grade %', value: 'grade'},
                    {text: 'Component 1 Weight %', value: 'component1Weight'},
                    {text: 'Component 1 Grade %', value: 'component1Grade'},
                    {text: 'Component 2 Weight %', value: 'component2Weight'},
                    {text: 'Component 2 Grade %', value: 'component2Grade'},
                    {text: 'Actions', value: 'action'}
                ],
                modules: [],
                defaultItem: {
                    semester: '',
                    code: '',
                    name: '',
                    grade: 0,
                    component1Weight: 0,
                    component1Grade: 0,
                    component2Weight: 0,
                    component2Grade: 0,
                },
                editedItem: {
                    semester: '',
                    code: '',
                    name: '',
                    component1Weight: 0,
                    component1Grade: 0,
                    component2Weight: 0,
                    component2Grade: 0,
                    grade: 0
                },
                editedIndex: -1,
            }
        },
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Module' : 'Edit Module'
            },
        },
        watch: {
            dialog(val) {
                val || this.close()
            },
        },
        methods: {
            editItem() {

            },
            deleteItem() {

            },
            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },
            save() {
                if (this.editedIndex > -1) {
                    console.log('xd')
                }
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>
