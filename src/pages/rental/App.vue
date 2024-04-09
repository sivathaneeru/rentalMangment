<template>
  <div>
    <v-app>
    
  
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
  
  </div>
   
  </template>
  
  <script>
  import HelloWorld from '@/components/HelloWorld';
  import 'vuetify/dist/vuetify';
  export default {
    name: 'App',
  
    components: {
      HelloWorld,
    },
  
    data: () => ({
      //
    }),
  };
  </script>
  