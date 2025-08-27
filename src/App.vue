<script setup>
import SiteHeader from './components/SiteHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <SiteHeader />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
