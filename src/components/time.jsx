/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { moment } from '/src/util';



export default class extends Component {
    
    state = {
        date: moment(Date.now()).format('YYYY-MM-DD hh:mm:ss a')
    };


    shouldComponentUpdate(nextProps, nextState) {
        return !(
            Map(nextProps) === Map(this.props)
        );
    }


    componentDidMount() {
        
    }


    render() {
        return (
            <div>
                {this.state.date}
            </div>
        );
    }
}