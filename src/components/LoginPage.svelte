<script lang="ts">
  let username = '';
  let password = '';

import axios from 'axios';

async function handleSubmit(event: Event) {
  event.preventDefault();
  try {
    const response = await axios.post('/api/login', { username, password });
    console.log(response.data);
    // Redirect to the next page or perform other actions
  } catch (error) {
    console.log('Error:', error.message);
  }
}
</script>

<main>
  <h1>Login</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} />

    <button type="submit">Login</button>
  </form>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
