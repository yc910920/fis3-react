/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, is } from 'immutable';



// injection into components store
@connect(
    state => state.counter,
    null
)
export default class extends Component {

    /**
     * @method 子组件是否被渲染
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
        const { props } = this;
        return (
            <div>
                {props.currentTime}
            </div>
        );
    }
}