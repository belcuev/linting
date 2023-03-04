const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

app.get('/', (req, res) => {
  var title = "Home Page";
  //res.send('Ola Express!');
  res.render('index',{'title':title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

