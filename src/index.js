const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1><form><input placeholder="username" /></form>');
});

app.listen(port, () => {
  console.log(`Demo app running at http://localhost:${port}`);
});
