/**
 * @module about
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { counterAction } from '/src/actions';
import { moment } from '/src/util';



export default function About({ match }) {
    return (
        <div>
            {Date.now()} about
            <div>
                {match.url}
            </div>
        </div>
    );
}