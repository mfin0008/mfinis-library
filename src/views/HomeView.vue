<template>
  <SignupForm class="mb-5" @newUser="handleNewUser"/>
  <CustomTable :userData="userData"/>
</template>

<script setup>
import CustomTable from '@/components/CustomTable.vue';
import SignupForm from '@/components/SignupForm.vue';
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
