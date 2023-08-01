<!-- Navbar.vue -->
<template>
  <nav class="relative">
    <div class="flex px-10 sm:px-20 text-base whitespace-nowrap space-x-5 font-semibold overflow-x-scroll scrollbar-hide">
      <div v-for="request in requests" :key="request.key">
        <h2 @click="handleClick(request.key)" class="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-yellow-700">
          {{ request.title }}
        </h2>
      </div>
    </div>
    <div class="absolute top-0 right-0 bg-gradient-to-l from-teal-950 h-10 w-1/12" />
  </nav>
</template>

<script setup>
import { requests } from "../../utils/requests.js";
import { useRouter } from 'vue-router';

// Making use of the router instance
const router = useRouter();

const handleClick = (genreKey) => {
  router.push({ query: { genre: genreKey } });
};
</script>
