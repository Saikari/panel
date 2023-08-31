<script lang="ts">
import fs from 'fs';

export default function(req, res) {
  const { username, password } = req.body;

  try {
    const fileContent = fs.readFileSync('users.txt', 'utf8');
    const [login, pass] = fileContent.split(':');

    if (username === login.trim() && password === pass.trim()) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid login credentials. Please try again.');
    }
  } catch (error) {
    res.status(500).send('Error reading file: ' + error.message);
  }
}
</script>
