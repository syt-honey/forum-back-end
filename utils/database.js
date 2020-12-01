const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/forum', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('MongoDB 连接成功！')
});

module.exports = mongoose;
