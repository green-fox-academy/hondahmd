require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const server = express();
const PORT = 3000;

server.set('view engine', 'ejs');

const connect = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

let promisedQuery = (sqlString, queryInput) =>
  new Promise((resolve, reject) => {
    connect.query(sqlString, queryInput, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });

server.get('/', async (req, res) => {
    let sqlString = 'select book_name from book_mast;';

    try {
        let data = await promisedQuery(sqlString, '');
        res.render('home', {
            bookTitles: data
        });
    } catch(error) {
        res.status(500).send(error);
    }
});

const handleParam = (param) => {
    if (param === 'plt') {
        return 'book_price<? and ';
    } else if (param === 'pgt') {
        return 'book_price>? and ';
    } else {
        return `${param}=? and `;
    }
};

const generateBookFilterQuery = (params) => {
    let queryInput = [];
    let sqlString = 'select book_name, aut_name, cate_descrip, pub_name, book_price from book_mast \
    join author on book_mast.aut_id=author.aut_id \
    join publisher on book_mast.pub_id=publisher.pub_id \
    join category on book_mast.cate_id=category.cate_id';

    if (Object.keys(params).length !== 0) {
        sqlString += ' where '
        for (let key of Object.keys(params)) {
            sqlString += handleParam(key);
            queryInput.push(params[key]);
        }
        sqlString = sqlString.substr(0, sqlString.lastIndexOf('and'));
    }
    return {
        sqlString: sqlString + ';',
        queryInput
    };
};

server.get('/fullinfo', async (req, res) => {
    let sqlQuery = generateBookFilterQuery(req.query);

    try {
        let data = await promisedQuery(sqlQuery.sqlString, sqlQuery.queryInput);
        res.render('fullinfo', {
            bookInfo: data
        });
    } catch(error) {
        res.status(500).send(error);
    }
});

server.listen(PORT, () => {
    console.log('server\'s running');
});
