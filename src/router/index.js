import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue"
import ViewNotFound from "@/views/ViewNotFound.vue"
import ViewFavorite from "@/views/ViewFavorite.vue"
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
  {
    path: "/favourites",
    name: "Favourites",
    component: ViewFavorite,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: ViewNotFound,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
