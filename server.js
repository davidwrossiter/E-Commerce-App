const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require("./server/db");

app.get('/', async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

app.use(cors);

app.use(bodyParser.json());

