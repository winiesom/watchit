<template>
<div
    class="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    
  >
  <div class="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
    <img
        :src="movieProp.backdrop_path
        ? `${BASE_URL}${movieProp.backdrop_path}`
        : `${BASE_URL}${movieProp.poster_path}`"
        height="300"
        width="400"
        :alt="movieProp.title"
        loading="lazy"
    />

    <div class="p-2">
        <p class="truncate max-w-md">{{ movieProp.overview }}</p>
        <h2 class="mt-1 text-1xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {{ movieProp.title || movieProp.original_name }}
        </h2>
        <p class="flex items-center opacity-0 group-hover:opacity-100">
            {{ movieProp.media_type && `${movieProp.media_type} •` }} {{" "}}
            {{ movieProp.release_date && `${movieProp.release_date}` }} {{"•"}}{{" "}}
            <ThumbUpOutline class="h-5 mx-2" /> {{ movieProp.vote_count }}
        </p>
    </div>
  </div>
   </div>
</template>

<script setup>
// import { defineProps } from 'vue';

import ThumbUpOutline from 'vue-material-design-icons/ThumbUpOutline.vue';
import ThumbUp from 'vue-material-design-icons/ThumbUp.vue';

// Import the props from the parent component
const { movieProp } = defineProps(['movieProp']);

const BASE_URL = "https://image.tmdb.org/t/p/original";

</script>
