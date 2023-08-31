import App from './App.svelte';
import axios from 'axios';

const app = new App({
  target: document.querySelector('#app')
});

export default app;

export const serverMiddleware = {
  // API middleware
  '/api/login': {
    async handler(req, res) {
      const { username, password } = req.body;

      try {
        const response = await axios.post('/api/login', { username, password });
        console.log(response.data);
        // Redirect to the next page or perform other actions
        res.status(200).send('Login successful!');
      } catch (error) {
        console.log(error.message);
        // Handle the error
        res.status(401).send('Invalid login credentials. Please try again.');
      }
    }
  }
};
