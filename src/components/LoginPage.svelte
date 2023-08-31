<script lang="ts">
import { readFileSync } from 'fs';

  let username = '';
  let password = '';



async function handleSubmit(event: Event) {
  event.preventDefault();
  try {
    const fileContent = await readFileSync('users.txt');
    const [login, pass] = fileContent.split(':');

    if (username === login.trim() && password === pass.trim()) {
      console.log('Login successful!');
      // Redirect to the next page or perform other actions
    } else {
      console.log('Invalid login credentials. Please try again.');
    }
  } catch (error) {
    console.log('Error reading file:', error.message);
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
