' use strict';

require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs-extra');

const tableName = 'BitOwner';
const fileName = './users.csv';
let csvContent = '';

const connect = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

csvContent = fs.readFileSync(fileName, 'utf-8').split('\n');

dropTable(tableName);
createTable(tableName);
insertData(csvContent);
setTimeout(() => {
    checkData(tableName, csvContent);
    connect.end();
}, 5000);

function dropTable(tableName) {
    connect.query(
        `drop table if exists ${tableName}`,
        (err, rows) => {
            if (err) {
                console.log(err.toString());
            }
            console.log('drop table success');
            console.log(rows);
        }
    );
}

function createTable(tableName) {
    connect.query(
        `create table if not exists ${tableName}(\
            id integer PRIMARY KEY, \
            prefix varchar(30), \
            first_name varchar(30), \
            last_name varchar(30), \
            address varchar(255), \
            height float(4,1), \
            bitcoin_address varchar(255), \
            color_preference varchar(7)\
            );`,
        (err, rows) => {
            if (err) {
                console.log(err.toString());
            }
            console.log('create table success');
            console.log(rows);
        }
    );   
}

function insertData(csvContent) {
    for (let i = 1; i < csvContent.length; i++) {
        let values = csvContent[i].split(',');
        let query = 'insert into BitOwner values (';
        for (let i = 0; i < values.length; i++) {
            if (values[i] === undefined || values[i] === '') {
                query += 'NULL';
            } else if (i === 0 || i === 5) {
                query += `${Number(values[i])}`;
            } else {
                query += `"${values[i]}"`;
            }
            if (i !== values.length - 1) query += ',';
        }
        query += ');';
        connect.query(
            query,
            (err, rows) => {
                if (err) {
                    console.log(err.toString());
                }
            }
        );
    }
}

function checkData(tableName, csvContent) {
    for (let i = 1; i < csvContent.length; i++) {
        let sequences = csvContent[i].split(',');
        connect.query(
            `select * from ${tableName} where id=${Number(sequences[0])}`,
            (err, row) => {
                if (err) {
                    console.log(err.toString());
                    return;
                } else {
                    if (!checkSingleData(row ,sequences)) {
                        console.log(`error at row ${sequences[0]}`);
                        return;
                    }
                }   
            }
        );
    }
    console.log('Check done. All right!')
}

function checkSingleData(rows, sequences) {
    let row = rows[0];
    const attributes = Object.keys(row);
    for (let i = 0; i < attributes.length; i++) {
        if (row[attributes[i]] !== null) {
            if ((i === 0 || i === 5) && (row[attributes[i]] !== Number(sequences[i]))) {
                return false;
            }
            if ((i !== 0 && i !== 5) && (row[attributes[i]] !== sequences[i])) {
                return false;
            }
        }
        if (row[attributes[i]] === null && sequences[i] !== '') {
            return false;
        }
    }
    return true;
}
