<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title='Grills'>
        <div v-for="grill in grills" :key="grill.id">
          {{ grill.name }} -
          {{ grill.owner }} -
          {{ grill.price }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import GrillsService from '@/services/GrillsService';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      grills: null,
    };
  },
  async mounted() {
    // request to backend all grills
    this.grills = (await GrillsService.index()).data;
  },
};
</script>

<style>
</style>
