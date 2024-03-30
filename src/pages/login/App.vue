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
import mappings from '../../mappings';
//import environment from '../../services/environment';
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
          this.$toast.error('Please enter username and password');
          return;
        }
        // Perform login logic, e.g., make API request
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        // After successful login, redirect user or perform appropriate action
     //  const base= environment.BASE_URL;
       window.location.href = "rental#"+mappings.ABOUT;
        //this.$router.push(base+); // Example: Redirect to dashboard page
      }
    }
  }
  </script>
  