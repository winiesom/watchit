import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movieResults: [],
  }),
  actions: {
    async fetchMovies(apiUrl, totalPages) {
      try {
        const resultsPerPage = 100; // The TMDb API supports up to 20 results per page

        const allMovieResults = [];

        // Fetch multiple pages in parallel using Promise.all
        const promises = Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const urlWithPage = `${apiUrl}&page=${page}&per_page=${resultsPerPage}`;
          return fetch(urlWithPage).then((response) => response.json());
        });

        const responses = await Promise.all(promises);

        // Concatenate the results from all pages
        responses.forEach((data) => {
          allMovieResults.push(...data.results);
        });

        this.movieResults = allMovieResults;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  },
});
