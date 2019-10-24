const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const name = (req.query.name === undefined ? 'Guest' : req.query.name);
  res.render('home', {
      name: name
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});