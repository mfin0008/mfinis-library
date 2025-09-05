import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import LoginView from '@/views/LoginView.vue';
import { isAuthenticated } from '@/auth/auth';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';

const inAppLoginRoute = {
  path: '/login',
  name: 'Login',
  component: LoginView
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: () => {
      if (!isAuthenticated.value) {
        alert('You must be logged in to reach about page!')
        return inAppLoginRoute
      }
    }
  },
  inAppLoginRoute,
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView,
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
