var express = require('express');
var app = express();
var router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

router.get('/linkupload', (req, res) => {
	res.sendFile(__dirname + '/linkupload.html');
});

app.use("/",router);

app.listen(3000,function() {
	console.log("Live at Port 3000");
});
