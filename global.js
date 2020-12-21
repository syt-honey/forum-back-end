// 全局环境参数
const env = {
    // 开发库
    dev: {
        database_name: "forum",
        listen_port: "3000"
    },
    // 正式库
    pro: {
        database_name: "forumPro",
        listen_port: "3001"
    }
};

const curEnv = "pro";

module.exports = {
    env,
    curEnv
};
