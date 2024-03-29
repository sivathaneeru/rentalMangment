<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="name" label="Name" required></v-text-field>
        <v-text-field v-model="phoneNumber" label="Phone Number" required></v-text-field>
        <v-autocomplete
        v-model="selectedItem"
        :items="dropdownItems"
        label="Select Item"
        item-text="name"
        item-value="id"
        search-input
        return-object
        required
        multiple
        variant="solo-inverted"
        clearable
        chips
      ></v-autocomplete>

        <v-btn type="submit" color="primary">Submit</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import utilitHelpers from "@/helpers/utilityHelpers";

  export default {
    data() {
      return {
        name: '',
        phoneNumber: '',
        selectedItem: null,
      dropdownItems: [
        { id: 1, name: 'chair' },
        { id: 2, name: 'tent' },
        { id: 3, name: 'glass' },
        // Add more dummy data items as needed
      ],
      };
    },
    methods: {
      submitForm() {
        // Validate form data
        if (!this.name || !this.phoneNumber) {
            utilitHelpers.error(this.$toast,'Please fill out all fields',"top-right");
          return;
        }
  
        // Submit form data (here you would typically make an API request)
        console.log('Name:', this.name);
        console.log('Phone Number:', this.phoneNumber);
        console.log("selected",this.selectedItem);
  
        // Reset form fields
        this.name = '';
        this.phoneNumber = '';
        this.selectedItem="";
  
        // Show success message
        utilitHelpers.success(this.$toast,'Form submitted successfully');
      },
    },
  };
  </script>
  