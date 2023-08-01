<!-- Results.vue -->
<template>
    <div class="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
    <div v-for="movie in movies" :key="movie.id">
      <Thumbnail :key="movie.id" :movieProp="movie" /> 
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useMovieStore } from '../../stores/results';
import { requests } from "../../utils/requests.js";
import { useRoute } from 'vue-router';
import Thumbnail from  "./Thumbnail.vue"

const movieStore = useMovieStore();
const movies = ref([]);
const route = useRoute(); // Access the current route information

// Fetch movies on component mount
onMounted(async () => {
  await fetchMovies();
});

// Fetch movies when the route changes
watch(route, async () => {
  if (route.query.genre) {
    const genreKey = route.query.genre;
    let apiUrl = '';
    if (requests[genreKey]) {
      apiUrl = `https://api.themoviedb.org/3/${requests[genreKey].url}`;
    } else {
      // If the genreKey does not exist in requests, default to fetchTrending
      apiUrl = `https://api.themoviedb.org/3/${requests.fetchTrending.url}`;
    }
    await fetchMovies(apiUrl);
  } else {
    await fetchTrendingMovies();
  }
});

const fetchTrendingMovies = async () => {
  const apiUrl = `https://api.themoviedb.org/3/${requests.fetchTrending.url}`;
  await fetchMovies(apiUrl);
};

const fetchMovies = async (apiUrl) => {
  const totalPages = 1; // Fetch a total of 10 pages (100 results)
  await movieStore.fetchMovies(apiUrl, totalPages);
};

// Update the visible movies whenever movieResults changes
watch(() => movieStore.movieResults, () => {
  movies.value = movieStore.movieResults;
});
</script>
