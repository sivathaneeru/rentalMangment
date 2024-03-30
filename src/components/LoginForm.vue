<template>
    <v-container>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" label="Username" required></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import utilityHelpers from "@/helpers/utilityHelpers";
  import mappings from "@/mappings"
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Validate and submit login credentials
        if (!this.username || !this.password) {
            utilityHelpers.error(this.$toast,'Please enter username and password');
          return;
        }
        // Perform login logic, e.g., make API request
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        utilityHelpers.success(this.$toast,'Please enter username and password');
        // After successful login, redirect user or perform appropriate action
        this.$router.push(mappings.Home); // Example: Redirect to dashboard page
      }
    }
  }
  </script>
  