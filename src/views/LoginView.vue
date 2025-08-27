<script setup>
import { ref } from 'vue';
import { isAuthenticated, login } from '@/auth/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = 'test_username';
const password = 'test_password';

const enteredUsername = ref('');
const enteredPassword = ref('');
const errorMsg = ref('');

const checkLogin = () => {
  return enteredUsername.value === username && enteredPassword.value === password;
}

const submitForm = () => {
  if (checkLogin()) {
    errorMsg.value = '';
    enteredUsername.value = '';
    enteredPassword.value = '';
    login();
    router.replace('/')
  }
  else {
    errorMsg.value = 'Invalid login credentials.'
  }
}
</script>

<template>
  <div class="about text-center container mt-5">
    <form v-if="!isAuthenticated" @submit.prevent="submitForm">
      <h1 class="mb-3">Login</h1>
      <div class="row mb-3">
          <div class="col-sm-3"/>
          <div class="col-sm-6">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              v-model="enteredUsername"
              @input="errorMsg=''"
              :placeholder="'try ' + username"
            />
          </div>
          <div class="col-sm-3"/>
      </div>
      <div class="row mb-3">
          <div class="col-sm-3"/>
          <div class="col-sm-6">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="enteredPassword"
              @input="errorMsg=''"
              :placeholder="'try ' + password"
            />
          </div>
          <div class="col-sm-3"/>
      </div>
      <div v-if="errorMsg" class="text-danger mb-3">{{ errorMsg }}</div>
      <button type="submit" class="btn btn-primary me-2">Login</button>
    </form>
  </div>
</template>
