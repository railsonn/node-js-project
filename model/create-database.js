// const sql = require("./db");
const sql = require("./db")

sql`
    CREATE TABLE videos3 (
        id          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`
.then(() => {
    console.log("TABLE criada")
});
