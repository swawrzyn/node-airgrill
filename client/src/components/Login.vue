<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-4 pb-4">
           <v-form v-model="valid">
            <v-text-field
              v-model="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              required
            ></v-text-field>
          </v-form>
          <br>
          <v-btn class="cyan" dark @click="register">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
