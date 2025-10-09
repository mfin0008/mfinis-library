<script setup>
import SiteHeader from './components/SiteHeader.vue';
import { RouterView } from 'vue-router';
import router from './router';
import { API_ROUTE_PATHS } from '../src/router/index';
import { computed } from 'vue';

const showHeader = computed(() => !API_ROUTE_PATHS.includes(router.currentRoute.value.path));
</script>

<template>
  <header v-if="showHeader">
    <SiteHeader />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
