import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as Sentry from "@sentry/vue";

import App from './App.vue';
import Home from './components/Home.vue'; // Import your Home component
import Results from './components/Results.vue'; // Import your Results component

// Import other components and create your routes as needed

const routes = [
  { path: '/home', component: Home },
  // Define other routes here, including the Results route with dynamic segment for genre
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

Sentry.init({
  app,
  dsn: "https://2a65fef87f270921e2273f2fd723ab2c@o4505703098286080.ingest.sentry.io/4505703726448640",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["https://vue-watchit.netlify.app/"],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  trackComponents: ["Header", "Nabvar", "Sidebar", "Results"],
  hooks: ["create", "mount"],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router); // Mount the router to the Vue app

// Optionally, provide the store globally so that you can access it from anywhere
app.provide('pinia', pinia);

app.mount('#app'); // Mount the Vue app to the DOM element with ID 'app'
