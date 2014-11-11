var api = require('../controllers/API.js');

exports.orders = function(req, res){
	console.log("oewnfoenwfoiwe");
	req.on('data', function(chunk){
		console.log(chunk);
		res.send({meep:'der'});
		api.orders(res, chunk.password);
	});
};