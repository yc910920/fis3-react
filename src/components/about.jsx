/**
 * @module about
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { counterAction } from '/src/actions';



export default function About() {
    return (
        <div>
            {Date.now()} about
        </div>
    );
}