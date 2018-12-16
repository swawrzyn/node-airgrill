<template>
  <v-toolbar fixed dark class="cyan">
    <router-link class="toolbar-title" to="/">
      <v-toolbar-title>AirGrill</v-toolbar-title>
    </router-link>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark router to="grills">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="login">Log in</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="register">Sign up</v-btn>
      <v-btn
      v-if="$store.state.isUserLoggedIn"
      flat
      dark
      @click="logout">Log out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'root',
      });
    },
  },
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
