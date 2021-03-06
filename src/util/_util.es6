/**
 * @module _util
 * @author 小虎牙
 */
import moment from 'moment';
export default {
    moment,

    /**
     * @method 给接口添加时间戳
     * @param  String: url
     * @param  String: param
     * @return string: http://www.baidu.com?t=1234567
     */
    addTimeStamp(url, param = '') {
        return (url + '?' + param + '&t=' + Date.now()).replace(/\?{1,}\&?/, '?');
    },

    /**
     * @method JSON to url
     * @param  Object: json
     * @return string: a=1&b=2&c=3
     */
    json2url(json = {}) {
        return Object.keys(json).map(key => key + '=' + json[key]).join('&');
    }
};