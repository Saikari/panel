<script lang="ts">
  import { onMount } from 'svelte';
  import fs from 'fs';

  let username = '';
  let password = '';

  onMount(async () => {
    const users = fs.readFile('users.txt', 'utf-8');
    const [login, pass] = users.split(':');

    if (username === login.trim() && password === pass.trim()) {
      alert('Login successful!');
      // Redirect to the next page or perform other actions
    } else {
      alert('Invalid login credentials. Please try again.');
    }
  });

  function handleSubmit(event: Event) {
    event.preventDefault();
    if (username && password) {
      const users = fs.readFile('users.txt', 'utf-8');
      const [login, pass] = users.split(':');
      if (username === login.trim() && password === pass.trim()) {
        alert('Login successful!');
        // Redirect to the next page or perform other actions
      } else {
        alert('Invalid login credentials. Please try again.');
      }
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
