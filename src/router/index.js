import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import LoginView from '@/views/LoginView.vue';
import { isAuthenticated } from '@/auth/auth';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import AddBookView from '@/views/AddBookView.vue';
import GetBookCountView from '../views/GetBookCountView.vue';
import WeatherView from '@/views/WeatherView.vue';
import CountBookAPI from '@/views/CountBookAPI.vue';
import GetAllBooksAPI from '@/views/GetAllBooksAPI.vue';

const inAppLoginRoute = {
  path: '/login',
  name: 'Login',
  component: LoginView
};

const countBookApiRoute = {
  path: '/CountBookAPI',
  name: 'CountBookAPI',
  component: CountBookAPI,
};

const getAllBooksApiRoute = {
  path: '/GetAllBooksAPI',
  name: 'GetAllBooksAPI',
  component: GetAllBooksAPI,
}

export const API_ROUTE_PATHS = [countBookApiRoute.path, getAllBooksApiRoute.path];

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
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/GetWeather',
    name: 'GetWeather',
    component: WeatherView,
  },
  countBookApiRoute,
  getAllBooksApiRoute,
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
