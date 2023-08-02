<template>
    <div class="flex z-40 items-center w-[120px] m-5 relative">
    <div class="sm:block hidden">

      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <Magnify fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>

      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <HomeOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>

      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <TrendingUp fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>

      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <Television fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>

      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <MovieOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>

      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <Plus fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>
    </div>
</div>
</template>

<script setup>

import Magnify from 'vue-material-design-icons/Magnify.vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import TrendingUp from 'vue-material-design-icons/TrendingUp.vue';
import Television from 'vue-material-design-icons/Television.vue';
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

</script>