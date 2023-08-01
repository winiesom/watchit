<template>
  <div>
    <!-- Render Header and Navbar on the same line for large screens -->
    <header class="hidden md:flex flex-row m-5 items-center h-auto">
      <Header />
      <Navbar @genre-selected="handleGenreSelected" /> <!-- Listen for the custom event -->
    </header>

    <!-- Render Header and Navbar on different lines for medium and smaller screens -->
    <div class="flex md:hidden flex-col m-5 items-center h-auto">
      <Header />
    </div>
    <div class="md:hidden">
      <Navbar @genre-selected="handleGenreSelected" /> <!-- Listen for the custom event -->
    </div>

    <div class="flex flex-row flex-wrap-reverse md:flex-wrap w-full">
      <div class="w-full md:w-1/6">
        <Sidebar />
      </div>

      <div class="w-full md:w-5/6">
        <Results />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMovieStore } from '../stores/results';

// Import components
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Results from "./components/Results.vue";

const movieStore = useMovieStore();
const movies = ref([]);

const handleGenreSelected = (genreKey) => {
  if (genreKey && requests[genreKey]) {
    const apiUrl = `https://api.themoviedb.org/3/${requests[genreKey].url}`;
    fetchMovies(apiUrl);
  } else {
    fetchTrendingMovies();
  }
};

const fetchTrendingMovies = async () => {
  const apiUrl = `https://api.themoviedb.org/3/${requests.fetchTrending.url}`;
  fetchMovies(apiUrl);
};

const fetchMovies = async (apiUrl) => {
  const totalPages = 10; // Fetch a total of 10 pages (100 results)
  await movieStore.fetchMovies(apiUrl, totalPages);
};
</script>
