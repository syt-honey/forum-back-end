/**
 * 请求响应枚举
 * 成功 0、失败 -1、程序异常 -2
 */
const RET_CODE = {
    SUCCESS: 0,
    FAIL: -1,
    CATCH_EXCEPTION: -2,
    MISSING_REQUIRE: -3
};

// 异常 text
const EXCEPTION_TEXT = '程序内部异常';

module.exports = {
    RET_CODE,
    EXCEPTION_TEXT
};
