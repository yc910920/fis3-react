/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, is } from 'immutable';
import { counterAction } from '/src/actions';
import { moment } from '/src/util';



// injection into components store
@connect(
    state => state.counter,
    dispatch => bindActionCreators(counterAction, dispatch)
)
export default class extends Component {

    /**
     * @method 事件集
     * @return event coll
     */
    get methods() {
        const that = this;
        const { props } = this;
        return {
            handleUpdateTime() {
                
            }
        };   
    }


    /**
     * @method 组件是否渲染
     * @return boolean
     */
    shouldComponentUpdate(nextProps, nextState) {
        return !is(nextProps, this.props);
    }


    /**
     * @desc 组件完成渲染
     */
    componentDidMount() {
        this.methods.handleUpdateTime();
    }


    /**
     * @desc JSX
     */
    render() {
        const { props, methods } = this;
        return (
            <div>
                {Date.now()}
            </div>
        );
    }
}