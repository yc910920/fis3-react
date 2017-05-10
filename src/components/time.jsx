/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';



export default class extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return !(
            Map(nextProps) === Map(this.props)
        );
    }


    render() {
        return <div>{Date.now()}</div>
    }
}