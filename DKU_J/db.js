const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
	    user: process.env.DB_USER || 'root',
		    password: process.env.DB_PASSWORD || '',
			    database: process.env.DB_NAME || 'DKU',
				    connectionLimit: 10
					});

					db.getConnection((err, connection) => {
					    if (err) {
						        console.error("MySQL 연결 실패:", err);
								    } else {
									        console.log("MySQL 연결 성공!");
											        connection.release();
													    }
														});

														module.exports = db;

