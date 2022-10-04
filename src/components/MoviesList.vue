<script setup>
import MovieCard from "./MovieCard.vue";
const props = defineProps({
  movies: Array,
});
</script>
    
    <template>
  <div
    class="
      mt-7
      w-full
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-5
      md:gap-8
      lg:gap-5
    "
  >
    <div v-for="movie in movies" :key="movie.imdbID">
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>