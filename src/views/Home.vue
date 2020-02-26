<template>
  <v-container class="home">
    <v-row>
      <v-col cols="9">
        <ModuleList></ModuleList>
      </v-col>
      <v-col cols="3">
        <GradePanel></GradePanel>
      </v-col>
    </v-row>
    <AddModuleFab></AddModuleFab>
  </v-container>
</template>

<script>

import AddModuleFab from "@/components/AddModuleFab";
import ModuleList from "@/components/ModuleList";
import GradePanel from "@/components/GradePanel";
export default {
  name: 'Home',
  components: {
    GradePanel,
    ModuleList,
    AddModuleFab
  }
}
</script>
