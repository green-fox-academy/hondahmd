import queries from './common';

function initDatabase() {
    try {
        queries.connection.query(
            'create table if not exists stories (\
                id integer AUTO_INCREMENT PRIMARY KEY, \
                title varchar(255), \
                url varchar(255), \
                timestamp bigint, \
                score integer);'
        );
        console.log('database initing done!');
   } catch (error) {
        console.log(error);
    }
}

export default initDatabase;
