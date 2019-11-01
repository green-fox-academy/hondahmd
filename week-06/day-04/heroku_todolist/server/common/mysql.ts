const mysql = require('mysql');
require('dotenv').config();

export const connection = mysql.createConnection(process.env.JAWSDB_URL);

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

export const promiseQueryWithInput = (sqlString, input) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlString, input, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}
