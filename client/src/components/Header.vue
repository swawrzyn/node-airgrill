<template>
  <v-toolbar fixed dark class="cyan">
    <router-link class="toolbar-title" to="/">
      <v-toolbar-title>AirGrill</v-toolbar-title>
    </router-link>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
     <v-toolbar-items v-if="!$store.state.isUserLoggedIn" class="hidden-sm-and-down">
      <v-btn flat dark router to="login">Log in</v-btn>
      <v-btn flat dark router to="register">Sign up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
