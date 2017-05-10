/**
 * @module _fetch
 * @author 小虎牙
 */
import { message } from 'antd';
import { addTimeStamp } from '/src/util';
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
                    addTimeStamp(url, param)
                ).then(
                    (res) => {
                        if (res.ok) return res.json();
                        return reject(
                            {
                                url: res.url, 
                                status: res.status, 
                                statusText: res.statusText
                            }
                        );
                    }
                ).then(
                    (res) => resolve(res)
                )
            });
        }
        message.error('miss url');
    },

    /**
     * @method post
     * @param  {String} url
     * @param  {Object} param
     * @param  {Function} cb
     */
    post(url, param, cb) {
        if (url) {
            return new Promise((resolve, reject) => {
                fetch(
                    addTimeStamp(url, param)
                ).then(
                    (res) => {
                        if (res.ok) return res.json();
                        return reject(
                            {
                                url: res.url, 
                                status: res.status, 
                                statusText: res.statusText
                            }
                        );
                    }
                ).then(
                    (res) => resolve(res)
                )
            });
        }
        message.error('miss url');
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