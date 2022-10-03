<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import MoviesList from "@/components/MoviesList.vue";
// import Search from "@/components/Search.vue";
import Loading from "@/components/Loading.vue";
import { useMoviesStore } from "@/store/movies";
const store = useMoviesStore();

const keyword = ref(
  localStorage.getItem("keyword")
    ? localStorage.getItem("keyword")
    : "Harry potter"
);

onMounted(() => {
  store.getAllMovies(keyword.value);
});
</script>
  
  <template>
  <main>
    <!-- <Search /> -->

    <article ref="scrollComponent">
      <MoviesList :movies="store.movies" />
    </article>
    <IsLoading v-if="store.isLoading" />
  </main>
</template>