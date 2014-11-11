/**

Connection.js

gives a database connection for a given database

author : brian dillmann


*/

var mysql = require('mysql');

exports.get_connection = function(dbname){
	var connection = mysql.createConnection({
  		host     : 'localhost',
		user     : 'root',
		password : 'Dumplingzz!',
		database : dbname
	});
	
	connection.connect(function(err) {
		if (err) {
			console.error('Kricket_ DB Err 1');
  		}

  		console.log('connected to db '+dbname+' as id ' + connection.threadId);
	});
	
	return connection;
};
