<script setup>
import { ref } from "@vue/reactivity";
import CalendarIcon from "@/assets/icons/CalendarIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import { useFavoritStore } from "@/store/favourite";
const store = useFavoritStore();

const props = defineProps({
  movie: "",
});

const title = props.movie.Title.substr(0, 20) + "...";

const toggleFav = (id, e) => {
  const favList = store.favMovies.filter((movie) => movie.imdbID == id);
  if (favList.length > 0) {
    store.removeFromFavorite(id);
  } else {
    store.addToFavorite(id);
  }
};

const isFav = (imdbID) => {
  if (store.favMovies) {
    const result = store.favMovies.filter((movie) => movie.imdbID == imdbID);

    return result.length ? true : false;
  }
};
</script>
    
<template>
  <div
    class="w-full h-48 rounded-md overflow-hidden bg-gray-50 lg:h-64 relative"
  >
    <RouterLink :to="`/detail/${movie.imdbID}`" class="w-full h-full">
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
    <div
      class="
        mt-4
        w-full
        absolute
        left-0
        bottom-0
        p-2
        bg-white/10
        backdrop-blur-md
      "
    >
      <div class="text-red-400 flex items-center justify-between">
        <RouterLink :to="`/Details/${movie.imdbID}`">
          <h3
            class="font-medium text-md tracking-wide text-amber-300"
            :title="movie.Title"
          >
            {{ title }}
          </h3>
        </RouterLink>
        <!--  -->
      </div>
      <div class="flex justify-between items-center mt-5">
        <div class="text-gray-300 flex items-center font-medium text-sm">
          <CalendarIcon />
          {{ movie.Year }}
        </div>
        <button
          @click="toggleFav(movie.imdbID, $event)"
          class="cursor-pointer text-white"
        >
          <HeartIcon :isFav="isFav(movie.imdbID)" />
        </button>
      </div>
    </div>
  </div>
</template>
    