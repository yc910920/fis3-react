/**
 * @module _util
 * @author 小虎牙
 */
export default {
    /**
     * @method addTimeStamp 请求接口路径添加时间戳
     * @param  {String} url
     * @param  {String} param
     * @return {String}
     */
    addTimeStamp(url, param) {
        return (url + '?' + param + '&t=' + Date.now()).replace(/(\?+\&)|(\?+)/, '?');
    }
};