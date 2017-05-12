/**
 * @module about
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, is } from 'immutable';
import { counterAction } from '/src/actions';
import { moment } from '/src/util';



export default function About({ match }) {

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
    return (
        <div>
            {Date.now()} {match.url}
        </div>
    );
}