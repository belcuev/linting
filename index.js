const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//here's a json file of user data
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = "Home Page";
  res.render('pages/index',{'title':title});
});

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

app.get('/myfamily', (req, res) => {
  var title = "My Family Page";
  res.render('pages/myfamily',{'title':title});
});

app.get('/mydog', (req, res) => {
  var title = "My Dog Page";
  res.render('pages/mydog',{'title':title});
});

app.get('/self-care', (req, res) => {
  var title = "Self-Care Page";
  res.render('pages/self-care',{'title':title});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});

