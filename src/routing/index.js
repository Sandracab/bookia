import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import BookShelfPage from '../views/BookShelfPage'

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "BookShelfPage",
    path: "/bokhylle",
    alias: "/vår-bokhylle",
    component: BookShelfPage,
  }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;