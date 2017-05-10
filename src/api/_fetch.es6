/**
 * @module _fetch
 * @author 小虎牙
 */
import 'whatwg-fetch';
export default {
    /**
     * @method get
     * @param  {String} url
     * @param  {String} param
     * @param  {Function} cb
     */
    get(url = '', param = '', cb) {
        if (url) {
            return new Promise((resolve, reject) => {
                fetch(
                    (url + '?' + param).replace(/\?{2,}/, '?')
                ).then(
                    if ((res.status >= 200 && res.status < 300) || res.status === 304) {
                        
                    }
                )
            });
        }
        throw new Error('miss url');
    },

    /**
     * @method post
     * @param  {String} url
     * @param  {Object} param
     * @param  {Function} cb
     */
    post(url, param, cb) {

    },

    /**
     * @method jsonp
     * @param  {String} url
     * @param  {Object} param
     * @param  {Function} cb
     */
    jsonp(url, param, cb) {

    }
};