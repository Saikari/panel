import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.svetle';
import LoginAPI from './components/LoginAPI.svetle';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/login', component: LoginAPI }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
