<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { isAuthenticated, logout } from '@/auth/auth';
</script>

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" active-class="active" exact-active-class="active" aria-current="page">
            Home (Week 5)
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link" active-class="active" aria-current="page">
            About
          </RouterLink>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <RouterLink to="/login" class="nav-link" active-class="active" aria-current="page">
            Login
          </RouterLink>
        </li>
        <li v-else>
          <button class="nav-link" @click="logout()">Logout</button>
        </li>
      </ul>
    </header>
  </div>
  <div class="b-example-divider"></div>
</template>

<style scoped>
.b-example-divider {
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
