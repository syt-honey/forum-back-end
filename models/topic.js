const db = require('../utils/database');
const { RET_CODE } = require('../utils/constant');

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

/**
 * 插入一条 topic 记录
 * @param params
 * @returns {Promise<unknown>}
 */
const publishTopic = (params) => {
    // 当前接口必填的字段
    const type = ['title', 'type', 'content'];
    const notContainType = checkContain(params, type);
    if (notContainType.length > 0) {
        return setContainMsg(notContainType);
    } else {
        return topic.create(params);
    }
};

/**
 * 根据类型获取 topic 记录
 * @param params
 * @returns {void|*|number|bigint}
 */
const getTopic = (params) => {
    const filter = params.type ? { type: params.type } : {}
    return topic.find(filter);
};

/**
 * 检查输入的 params 是否包含全部必填字段
 * @param params
 * @param type
 * @returns {*} 返回未被包含的字段
 */
function checkContain(params, type) {
    // 拿到的参数是否包含必填字段，返回缺的字段列表
    return type.filter(i => {
        return !params.hasOwnProperty(i);
    });
}

/**
 * 返回字段缺失信息
 * @param notContainType
 * @returns {Promise<unknown>}
 */
function setContainMsg(notContainType) {
    return new Promise(((resolve) => {
        resolve({
            code: RET_CODE.MISSING_REQUIRE,
            data: notContainType
        });
    }));
}

module.exports = {
    publishTopic,
    getTopic
};
