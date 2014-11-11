var connection = require('./Connection.js');
var crypto = require('crypto');

exports.orders = function(res,password){
	var data = {};
	var db = connection.get_connection('dumps');
	var query  = 'SELECT R.HASH,R.SALT,R.ITERATIONS FROM Restaurant R';
	db.query(query, function(err, rows){
		if(err){console.log(err);data.result = 'E';res.send(data);db.end();}
		var rest = rows[0];
		console.log(password);
		console.log(rest.ITERATIONS);
		crypto.pbkdf2(password,rest.SALT,rest.ITERATIONS,64,function(err, derivedKey){
			var hash = derivedKey.toString('base64');
			console.log(hash);
			if(hash != rest.HASH){
				data.result = 'F';
				res.send(data);
				db.end();
			}
			else{
				query = 'SELECT O.oid, O.name, O.number, O.address, O.payment_method, I.name, C.quantity FROM Orders O, Contains C, Item I WHERE O.oid = C.oid AND C.iid = I.iid AND O.active = TRUE';
				console.log(query);
				db.query(query, function(err,rows){
					data.result = 'S';
					data.orders = rows;
					res.send(data);
				});
			}
		});

	});
};