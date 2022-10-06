<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import MoviesList from "@/components/MoviesList.vue";
import Search from "@/components/Search.vue";
import Loading from "@/components/Loading.vue";
import { useMoviesStore } from "@/store/movies";
const store = useMoviesStore();

const keyword = ref(
  localStorage.getItem("keyword")
    ? localStorage.getItem("keyword")
    : "Harry potter"
);

const scrollComponent = ref(null);
const favMovies = ref(
  localStorage.getItem("favMovies")
    ? JSON.parse(localStorage.getItem("favMovies"))
    : []
);

let totalPage = 0;
setTimeout(() => {
  totalPage = Math.ceil(store.totalResults / 10);
}, 1000);

const handleScroll = (e) => {
  const element = scrollComponent.value;
  if (element) {
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      store.page++;
      if (store.page <= totalPage) {
        store.nextPage(store.page);
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  store.getAllMovies(keyword.value);
});
</script>
  
  <template>
  <main>
    <Search />

    <article ref="scrollComponent">
      <MoviesList :movies="store.movies" />
    </article>
    <Loading v-if="store.isLoading" />
  </main>
</template>