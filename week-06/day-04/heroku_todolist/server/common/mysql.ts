const mysql = require('mysql');
require('dotenv').config();

export const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export const promiseQueryNoInput = (sqlString) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlString, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}
