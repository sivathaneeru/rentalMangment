import Vue from "vue";
import Router from "vue-router";
import AboutPage from "@/components/AboutPage";
import ContactusPage from "@/components/ContactusPage.vue";
//import mappings from "./mappings";
Vue.use(Router)


export default new Router({
    routes: [
  
      //medicalcenter user profile
      {
        path: "/home",
        name: "home",
        component: AboutPage,
        meta: {
        }
      },

      {
        path: "/contactUs",
        name: "contactUs",
        component: ContactusPage,
        meta: {
        }
      },


    ]
});