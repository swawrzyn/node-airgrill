<template>
  <v-layout>
    <v-flex xs6 offset-xs3 dp-3>
      <grills-search-panel />
      <grills-panel :grills="grills" class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import GrillsService from '@/services/GrillsService';
import GrillsPanel from './GrillsPanel';
import GrillsSearchPanel from './GrillsSearchPanel';

export default {
  components: {
    GrillsPanel,
    GrillsSearchPanel,
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.grills = (await GrillsService.index(value)).data;
      },
    },
  },
};
</script>

<style>

</style>
