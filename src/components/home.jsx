/**
 * @module hello
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';



export default function Hello() {
    return (
        <div>
            {Date.now()} hello
        </div>
    );
}