import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Mars from "../views/Mars.vue";
import Posts from "../views/Posts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/mars",
    name: "mars",
    component: Mars
  },

  {
    path: "/posts",
    name: "posts",
    component: Posts
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
