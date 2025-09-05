<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth();

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Firebase Login Successful!");
      router.push("/");
      console.log(auth.currentUser)
    }).catch((error) => {
      console.log(error.code);
    })
}
</script>

<template>
  <div class="text-center">
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signIn">Sign in via Firebase</button></p>
  </div>
</template>
