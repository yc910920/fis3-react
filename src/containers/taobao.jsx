/**
 * @module 淘宝网
 * @author 小虎牙
 * @desc DOME3
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Time, Test } from '/src/components';
import { counterActions } from '/src/actions';



// injection into components store
@connect(
    null,
    dispatch => bindActionCreators(counterActions, dispatch)
)
export default class extends Component {

    /**
     * @desc 初次组件, 渲染完成
     */
    componentDidMount() {
        this.props.updateTimeAction();
    }


    /**
     * @desc JSX
     */
    render() {
        return (
            <div className="module">
                <br />
                <br />
                <div style={{position: 'relative', zIndex: 999}}>
                    <Test />
                    <Time />
                </div>
                <br />
                <br />
                <iframe className="iframe" src="//taobao.com"></iframe>
            </div>
        );
    }
}