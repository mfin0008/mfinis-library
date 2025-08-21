<script setup>
import LoginForm from './components/LoginForm.vue';
import CustomTable from './components/CustomTable.vue';
import { ref } from 'vue';

const userData = ref([]);
const handleNewUser = (newUserData) => {
  userData.value = [...userData.value, newUserData]
}
</script>

<template>
  <header></header>

  <main>
    <LoginForm class="mb-5" @newUser="handleNewUser"/>
    <CustomTable :userData="userData"/>
  </main>
</template>

<style scoped></style>
