<script setup>
import { onMounted } from "@vue/runtime-core";
import MoviesList from "@/components/MoviesList.vue";
import Loading from "@/components/Loading.vue";
import { useFavoritStore } from "@/store/favourite";
import { useMoviesStore } from "@/store/movies";
const store = useFavoritStore();
const moviesStore = useMoviesStore();

onMounted(() => {
  if (store.favMovies.length < 1) {
    moviesStore.isLoading = true;
    moviesStore.loadingMessage = "Empty";
  }
});
</script>
    
<template>
  <main>
    <h3 class="text-gray-500 text-xl tracking-widest">Your Favorite Movies</h3>
    <MoviesList :movies="store.favMovies" />
    <Loading v-if="moviesStore.isLoading" />
  </main>
</template>
    