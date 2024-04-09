import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import mappings from "@/mappings";
import constants from "@/services/constants";

import RegistrationPage from "@/components/RegistrationPage";

export default new Router({
  base: constants.BASE_URL + mappings.REGISTRATION,
  routes: [
  {
    path:mappings.REGISTRATION,
    name:'Registration',
    component:RegistrationPage,
  }

]
});
