<script setup>
import HeartIcon from "@/assets/icons/HeartIcon.vue";
</script>

<template>
  <div class="flex justify-between items-center">
    <RouterLink to="/">
      <h1
        class="text-xl font-semibold tracking-wider text-gray-200 md:text-2xl"
      >
        MOVIES
      </h1>
    </RouterLink>

    <RouterLink to="/fav" class="flex text-red-600 items-center cursor-pointer">
      <HeartIcon />

      <span class="text-lg tracking-wide md:text-xl">Favorite Movies</span>
    </RouterLink>
  </div>
  <p
    class="
      mt-6
      mb-7
      text-gray-200 text-xs
      font-light
      tracking-wide
      md:text-lg md:tracking-wider
      lg:text-sm
    "
  >
    You can search any movies in this website
  </p>
</template>