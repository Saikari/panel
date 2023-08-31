<template>
  <form @submit.prevent="login">
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" />

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" />

    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implement login logic here
    }
  }
};
</script>
