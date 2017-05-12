/**
 * @module 淘宝网
 * @author 小虎牙
 * @desc DOME3
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class extends Component {

    /**
     * @desc JSX
     */
    render() {
        return (
            <div className="module-wrap">
                <iframe className="iframe" src="//taobao.com"></iframe>
            </div>
        );
    }
}