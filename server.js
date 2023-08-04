const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

app.use(cors);

app.use(bodyParser.json());

