const topicModel = require("../models/index")

const publishTopic = (req, res) => {
    const params = req.body;
    topicModel.publishTopic(params).then(r => {
        console.log(r);
        res.json({
            code: 0,
            msg: '获取好友列表成功'
        })
    })
};

module.exports = {
    publishTopic
};
