<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import Movies from "../components/Movies.vue";
import Search from "../components/Search.vue";
import IsLoading from "../components/IsLoading.vue";
import { useMoviesStore } from "../store/movies";
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
    <Search />

    <article ref="scrollComponent">
      <Movies :movies="store.movies" />
    </article>
    <IsLoading v-if="store.isLoading" />
  </main>
</template>