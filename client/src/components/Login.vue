<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Log in">
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
          <v-alert
            class="ml-4"
            :value="error"
            transition="scale-transition"
            error>
            {{error}}
          </v-alert>
          <br>
          <v-btn class="cyan" dark @click="login">Login</v-btn>
      </panel>
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
  components: {
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'grills',
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
</style>
