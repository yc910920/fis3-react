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
     * @desc JSX
     */
    return (
        <div>
            {Date.now()} {match.url}
        </div>
    );
}