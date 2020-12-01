const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const topic = require('./routes/topic');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/topic', topic);

app.listen(3000,() => {
    console.log('app listening on port 3000.')
})

module.exports = app;
