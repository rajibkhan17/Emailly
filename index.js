const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send({ rajib: 'How are you' });
});

app.listen(5000);