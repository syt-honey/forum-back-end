import dayjs from "dayjs";
/**
 * @param {number} time
 * @returns {string}
 */
export function formatTime(time) {
    if (("" + time).length === 10) {
        time = time * 1000;
    } else {
        time = +time;
    }
    const d = new Date(time);
    const now = Date.now();
    const nowDate = new Date();

    const diff = (now - d) / 1000;

    if (diff < 30) {
        return "刚刚";
    } else if (diff < 3600) {
        return Math.ceil(diff / 60) + "分钟前";
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + "小时前 ";
    } else if (diff < 3600 * 24 * 2) {
        return "昨天 " + dayjs(d).format("HH:mm");
    } else if (diff < 3600 * 24 * 3) {
        return "前天" + dayjs(d).format("HH:mm");
    }

    // 距离现在超过一年，则显示'年月日'
    if (nowDate.getFullYear() - d.getFullYear() > 0) {
        return (
            d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getDate() +
            " " +
            dayjs(d).format("HH:mm")
        );
    } else {
        return (
            d.getMonth() + 1 + "月" + d.getDate() + "日 " + dayjs(d).format("HH:mm")
        );
    }
}
