<template>
  <panel title="Search">
    <v-text-field
      label="Search by grill name, location or description"
      v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search: _.debounce(async function () {
      const route = {
        name: 'grills',
      };
      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },

};
</script>

<style>

</style>
