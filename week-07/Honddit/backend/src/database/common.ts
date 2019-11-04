import mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

const promiseQueryNoInput = (sqlString) => {
    return new Promise<any>((resolve, reject) => {
        connection.query(sqlString, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}

const promiseQueryWithInput = (sqlString, input) => {
    return new Promise<any>((resolve, reject) => {
        connection.query(sqlString, input, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}

export default {
    connection,
    promiseQueryNoInput,
    promiseQueryWithInput
}
