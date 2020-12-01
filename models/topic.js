const db = require('../utils/database');

const topicSchema = new db.Schema({
    // topic 的 title
    title: {
        type: String
    },
    // 创建时间
    createDate: {
        type: Date,
        default: Date.now()
    },
    // 主题类型
    type: {
        type: String
    },
    // topic 的 content
    content: {
        type: String
    }
});

let topic = db.model("topic", topicSchema);

const publishTopic = (params) => {
    const topicItem = params;
    return topic.create(topicItem);
};

const getAllTopic = () => {
    topic.find().then(i => {
        console.log('---------get finished------')
        console.log('topic: ' + JSON.stringify(i))
    });
};

module.exports = {
    publishTopic,
    getAllTopic
};
