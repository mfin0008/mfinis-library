<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const jsonData = ref(null);
const error = ref(null);

const getAllBooks = async () => {
  try {
    const REQUEST_URL = 'https://getallbooks-7gjk5vxqca-uc.a.run.app';
    const response = await axios.get(REQUEST_URL);
    jsonData.value = response.data;
    error.value = null;
  } catch (err) {
    console.error('Error fetching all books: ', err);
    error.value = err;
    jsonData.value = null;
  }
}

onMounted(async () => await getAllBooks());
</script>

<template>
  <pre>{{ jsonData }}</pre>
</template>
