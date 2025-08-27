<template>
  <LoginForm class="mb-5" @newUser="handleNewUser"/>
  <CustomTable :userData="userData"/>
</template>

<script setup>
import CustomTable from '@/components/CustomTable.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';

const userData = ref([]);
const handleNewUser = (newUserData) => {
  userData.value = [...userData.value, newUserData]
}
</script>

<style scoped>
.text-friend {
  color: green;
}
</style>
