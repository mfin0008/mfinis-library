<script setup>
import SiteHeader from './components/SiteHeader.vue';
import { RouterView } from 'vue-router';
import router from './router';
import { countBookApiRoute } from '../src/router/index';
import { computed } from 'vue';

const showHeader = computed(() => router.currentRoute.value.path !== countBookApiRoute.path);
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
