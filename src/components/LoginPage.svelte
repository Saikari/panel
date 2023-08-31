<script lang="ts">
  import { readFile } from 'fs/promises';

  let username = '';
  let password = '';

  export async function handle({ request, resolve }) {
  try {
    const users = await readFile('users.txt', 'utf-8');
    const [login, pass] = users.split(':');

    if (username === login.trim() && password === pass.trim()) {
      console.log('Login successful!');
      // Redirect to the next page or perform other actions
    } else {
      console.log('Invalid login credentials. Please try again.');
    }
  } catch (error) {
    console.error('Error reading file:', error.message);
  }

  return resolve(request);
}
  function handleClick() {
    console.log('Button clicked!');
    // Call the handle function here
    handle();
  }
</script>

<main>
  <h1>Login</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} />

    <button on:click={handleClick}>Login</button>
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
