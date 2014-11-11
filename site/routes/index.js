var fs = require('fs');
/*
 * GET home page.
 */

exports.index = function(req, res){
	fs.readFile('./views/index.html', 'utf8', function (err,data){
		if(err){res.send(err);}
		else{res.send(data);}
	});
};

exports.orders = function(req, res){
	fs.readFile('./views/orders.html', 'utf8', function (err,data){
		if(err){res.send(err);}
		else{res.send(data);}
	});
};