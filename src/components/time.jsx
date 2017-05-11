/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { moment } from '/src/util';



export default class extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return !(
            Map(nextProps) === Map(this.props)
        );
    }


    render() {
        return (
            <div>
                {moment(Date.now()).format('YYYY-MM-DD hh:mm:ss a')}
            </div>
        );
    }
}