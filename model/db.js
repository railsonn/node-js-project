// require("dotenv/config");
// const postgres = require("postgres");
const postgres = require('postgres');
require('dotenv/config')

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const connectDB = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
      options: `project=${ENDPOINT_ID}`,
  },
})

module.exports = connectDB;
