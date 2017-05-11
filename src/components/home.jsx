/**
 * @module home
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { counterAction } from '/src/actions';
import { moment } from '/src/util';



export default function Home() {
    console.log(arguments);
    return (
        <div>
            {Date.now()} home
        </div>
    );
}