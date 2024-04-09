import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import mappings from "@/mappings";
import constants from "@/services/constants";

import LoginForm from "@/components/LoginForm";
import RegistrationPage from "@/components/RegistrationPage";

export default new Router({
  base: constants.BASE_URL + mappings.LOGIN_URL,
  routes: [
    {
    path: mappings.ROOT,
    name: 'User login',
    component: LoginForm
  },

  {
    path:mappings.REGISTRATION,
    name:'Registration',
    component:RegistrationPage,
  }

]
});
