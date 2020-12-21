const { env, curEnv } = require('./global');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const topic = require('./routes/topic');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/topic', topic);

app.listen(env[curEnv].listen_port,() => {
    console.log(`app listening on port ${env[curEnv].listen_port}.`)
})

module.exports = app;
