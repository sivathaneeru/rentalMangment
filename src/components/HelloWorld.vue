<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app :value="drawerVisible">
      <v-list v-if="drawerVisible">
        <v-list-item>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <p>This is the main content area.</p>
    </v-main>
  </v-app>
</template>

<script>
export default {
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
