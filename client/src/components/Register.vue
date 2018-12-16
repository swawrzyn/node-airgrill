<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-4 pb-4">
           <v-form>
            <v-text-field
              v-model="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              required
            ></v-text-field>
          </v-form>
          <br>
          <v-btn class="cyan" dark @click="register">Register</v-btn>
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
      show: false,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
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
