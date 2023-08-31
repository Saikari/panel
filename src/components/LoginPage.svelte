<script lang="ts">
  import express from 'express';

const app = express();

// Middleware to prevent direct access to files
app.use('/users.txt', (req, res, next) => {
  // Check if the request is coming from a trusted source
  // You can implement your own logic here to determine the source of the request
  const isTrustedSource = req.headers['referer'] === 'https://saikari.eu.org';

  if (!isTrustedSource) {
    // If the request is not from a trusted source, return an error or redirect
    res.status(403).send('Access Forbidden');
    // Alternatively, you can redirect the user to a different page
    // res.redirect('/error');
  } else {
    // If the request is from a trusted source, proceed to serve the file
    next();
  }
});

// Serve the file
app.get('/users.txt', (req, res) => {
  // Read the file and send its content as the response
  res.sendFile('users.txt');
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

  let username = '';
  let password = '';



async function handleSubmit(event: Event) {
  event.preventDefault();
  try {
    const response = await fetch('users.txt');
    const fileContent = await response.text();
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
