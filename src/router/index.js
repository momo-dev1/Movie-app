import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: ViewHome,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
