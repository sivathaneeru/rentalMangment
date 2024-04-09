<template>
    <v-container>
      <v-form @submit.prevent="register">
        <center>Registration</center>
        <v-text-field v-model="username" label="Username" required></v-text-field>
        <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
        <v-btn type="submit" color="primary">Register</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Validate and submit registration data
        if (!this.username || !this.email || !this.password) {
          this.$toast.error('Please enter all required fields');
          return;
        }
        // Perform registration logic, e.g., make API request
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        // After successful registration, redirect user or perform appropriate action
        // For example, redirect to login page
        this.$router.push('/login');
      }
    }
  };
  </script>
  