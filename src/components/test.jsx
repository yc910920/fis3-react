/**
 * @module test
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, is } from 'immutable';



export default class extends Component {

    /**
     * @method 组件是否渲染
     * @return boolean
     */
    shouldComponentUpdate(nextProps, nextState) {
        return (
            !is(Map(nextProps), Map(this.props))
        );
    }


    /**
     * @desc JSX
     */
    render() {
        return (
            <div>
                测试：{Date.now()}
            </div>
        );
    }
}