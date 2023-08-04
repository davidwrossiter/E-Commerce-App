const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "david",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "ecom"
});

module.exports = pool;