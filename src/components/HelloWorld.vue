<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer">
        <i class="mdi mdi-menu icon-20" ></i>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        My App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app :value="drawerVisible">
      <v-list v-if="drawerVisible">
        <v-list-item to="/home">
          <v-list-item-title>bill</v-list-item-title>
        </v-list-item>
        <v-list-item to="/contactUs">
          <v-list-item-title>payments</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
 

</template>

<script>
// import AboutPage from "./AboutPage"
// import ContactusPage from "./ContactusPage"
//import mappings from '@/mappings';
import 'vuetify/dist/vuetify';

export default {

  components:{
    // AboutPage,
    // ContactusPage,

  },
  data() {
    return {
      drawerVisible: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
  },
};
</script>
