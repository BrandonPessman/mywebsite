var express = require('express');
var app = express();
var router = express.Router();

app.use("",express.static(__dirname + ""));

router.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

router.get('/linkupload', (req, res) => {
	res.sendFile(__dirname + '/front/linkupload.html');
});

router.get('/about', (req, res) => {
	res.sendFile(__dirname + '/front/about.html');
});

router.get('/blog', (req, res) => {
	res.sendFile(__dirname + '/front/blog.html');
});

router.get('/projects', (req, res) => {
	res.sendFile(__dirname + '/front/projects.html');
});

router.get('/resume', (req, res) => {
	res.sendFile(__dirname + '/front/resume.html');
});

router.get('/gapl', (req, res) => {
	res.sendFile(__dirname + '/front/gapl.html');
});

app.use("/",router);

app.listen(3000,function() {
	console.log("Live at Port 3000");
});
