const topicModel = require('../models/index');
const { RET_CODE, EXCEPTION_TEXT } = require('../utils/constant');
import { formatTime } from "../utils/common";

/**
 * 发布主题接口
 * @param req
 * @param res
 */
const publishTopic = (req, res) => {
    const params = req.body;
    topicModel.publishTopic(params).then(r => {
        let resJson = {};
        if (r.code && r.code === RET_CODE.MISSING_REQUIRE) {
            resJson = setResJson(`主题发表失败, ${r.data}字段是必填项。`)
        } else {
            resJson = r ? setResJson( '主题发表成功', true) : setResJson( '主题发表失败');
        }
        res.json(resJson);
    }).catch(err => {
        res.json(setException())
    })
};

/**
 * 获取主题接口
 * @param req
 * @param res
 */
const getTopic = (req, res) => {
    const params = req.body;
    topicModel.getTopic(params).then(r => {
        const data = {
            list: r,
            length: r.length
        };
        // 处理日期
        if (data.list.length > 0) {
            data.list.map(item => {
                formatTime(new Date(item.createDate).getTime());
            })
        }
        let resJson = r ? setResJson( '获取主题成功', true, data) : setResJson( '获取主题失败');
        res.json(resJson);
    }).catch(err => {
        res.json(setException())
    })
}

/**
 * 设置返回 json 的 code 和 msg.若 isSuccess 不传，code 则默认返回失败
 * @param text msg 值
 * @param isSuccess 返回状态
 * @param value 返回的值
 * @returns {{msg: *, code: number}}
 */
function setResJson(text, isSuccess, value) {
    const resJson = {
        code: RET_CODE.FAIL,
        msg: text,
        data: value || ''
    };
    if (isSuccess) {
        resJson.code = RET_CODE.SUCCESS;
    }
    return resJson;
}

/**
 * 异常对象获取
 * @returns {{msg: (string|string), code: number}}
 */
function setException() {
    return {
        code: RET_CODE.CATCH_EXCEPTION,
        msg: EXCEPTION_TEXT
    }
}

module.exports = {
    publishTopic,
    getTopic
};
