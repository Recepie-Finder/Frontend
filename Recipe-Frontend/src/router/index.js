import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/pages/Home.vue";
import Feed from "../views/pages/Feed.vue";
import Dashboard from "../views/pages/Dashboard.vue";
import Login from "../views/pages/Login.vue";
import Signup from "../views/pages/Signup.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/feed", component: Feed },
  { path: "/dashboard", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
