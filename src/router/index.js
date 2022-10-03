import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue"
import ViewMovieDetails from "@/views/ViewMovieDetails.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: ViewHome,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutLeft",
    }
  },
  {
    path: "/detail/:id",
    name: "Details",
    component: ViewMovieDetails,
    props: true,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
