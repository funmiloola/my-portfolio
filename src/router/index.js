import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectView from "../views/ProjectView.vue";
import ContactView from "../views/ContactView.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/project",
    name: "project",
    component:ProjectView
  },
  {
    path: "/contact",
    name: "contact",
    component:ContactView
  }
];

const router = new VueRouter({
  routes,
});

export default router;
