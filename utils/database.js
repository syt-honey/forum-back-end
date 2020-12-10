const mongoose = require('mongoose');
mongoose.connect('mongodb://121.196.109.76:27017/forum', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB 连接成功！')
});

module.exports = mongoose;
