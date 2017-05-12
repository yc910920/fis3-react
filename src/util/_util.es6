/**
 * @module _util
 * @author 小虎牙
 */
import moment from 'moment';
export default {
    moment,


    /**
     * @method 接口路径，添加时间戳
     * @param  String: url
     * @param  String: param
     * @return string
     */
    addTimeStamp(url, param) {
        return (url + '?' + param + '&t=' + Date.now()).replace(/(\?{1,}\&)|(\?{2,})/, '?');
    }
};