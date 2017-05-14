/**
 * @module 淘宝网
 * @author 小虎牙
 * @desc DOME3
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



export default class extends Component {

    /**
     * @desc JSX
     */
    render() {
        return (
            <div className="module-wrap">
                <br />
                <br />
                <div style={{position: 'relative', zIndex: 999}}>
                    测试：{Date.now()}
                </div>
                <br />
                <br />
                <iframe className="iframe" src="//taobao.com"></iframe>
            </div>
        );
    }
}