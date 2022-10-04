<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
  
<template>
  <div class="container mx-auto px-6 py-7 lg:px-40 lg:py-14">
    <NavBar />
    <RouterView v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

