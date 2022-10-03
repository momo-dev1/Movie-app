<script setup>
import { ref } from "@vue/reactivity";
import CalendarIcon from "@/assets/icons/CalendarIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import { useFavoritStore } from "@/store/favorite";
const store = useFavoritStore();

const props = defineProps({
  movie: "",
});

const title = props.movie.Title.substr(0, 15) + "...";

// const toggleFav = (id, e) => {
//   const cek = store.favMovies.filter((movie) => movie.imdbID == id);
//   if (cek.length > 0) {
//     store.removeFromFavorite(id);
//     e.target.classList.remove("text-red-600");
//   } else {
//     store.addToFavorite(id);
//     e.target.classList.add("text-red-600");
//   }
// };

// const isFav = (imdbID) => {
//   if (store.favMovies) {
//     const result = store.favMovies.filter((movie) => movie.imdbID == imdbID);

//     return result.length ? true : false;
//   }
// };
// { name: 'Details', params: { id: movie.imdbID } }
</script>
    
    <template>
  <div class="w-full h-48 rounded-md overflow-hidden bg-gray-50 lg:h-64">
    <RouterLink :to="'/'" class="w-full h-full">
      <div v-if="movie.Poster != 'N/A'" class="w-full h-full">
        <img
          :src="movie.Poster"
          class="w-full h-full aspect-auto md:object-cover lg:aspect-auto"
          :alt="movie.Title"
        />
      </div>
      <div v-else>
        <img
          src="@/assets/no-image.png"
          class="w-full h-full object-cover"
          :alt="movie.Title"
        />
      </div>
    </RouterLink>
  </div>

  <div class="mt-4 w-full">
    <div class="text-red-200 flex items-center justify-between">
      <RouterLink :to="'/'">
        <h3 class="font-medium text-md tracking-wide" :title="movie.Title">
          {{ title }}
        </h3>
      </RouterLink>
      <!-- @click="toggleFav(movie.imdbID, $event)" -->
      <button class="cursor-pointer">
        <!-- :class="{ 'text-red-600': isFav(movie.imdbID) }" -->
        <HeartIcon />
      </button>
    </div>
    <div class="text-gray-200 flex mt-3 items-center font-medium text-sm">
      <CalendarIcon />
      {{ movie.Year }}
    </div>
  </div>
</template>
    