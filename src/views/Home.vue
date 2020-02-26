<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12" md="9">
        <ModuleList></ModuleList>
      </v-col>
      <v-col cols="12" md="3">
        <GradePanel></GradePanel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ModuleList from "@/components/ModuleList";
import GradePanel from "@/components/GradePanel";
export default {
  name: 'Home',
  components: {
    GradePanel,
    ModuleList,
  }
}
</script>
