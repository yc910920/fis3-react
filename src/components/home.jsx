/**
 * @module home
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { counterAction } from '/src/actions';



export default function Home() {
    return (
        <div>
            {Date.now()} home
        </div>
    );
}