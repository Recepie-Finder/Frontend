import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/pages/Home.vue";
import Feed from "../views/pages/Feed.vue";
import Dashboard from "../views/pages/Dashboard.vue";
import Login from "../views/pages/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/feed", component: Feed },
  { path: "/dashboard", component: Dashboard },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
