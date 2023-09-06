import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import Results from './components/Results.vue'; // Import your Results component

// Import other components and create your routes as needed

const routes = [
  
  // Define  routes here, including the Results route with dynamic segment for genre
  { path: '/', component: Results, props: (route) => ({ genre: route.query.genre }) },
];

// Create the Vue app instance
const app = createApp(App);

// Create and use the Pinia store
const pinia = createPinia();
app.use(pinia);

// Use Vue Router plugin
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router); // Mount the router to the Vue app

// Optionally, provide the store globally so that you can access it from anywhere
app.provide('pinia', pinia);

app.mount('#app'); // Mount the Vue app to the DOM element with ID 'app'
