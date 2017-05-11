/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';



export default class extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (
            Map(nextProps) !== Map(this.props) || Map(nextState) !== Map(this.state)
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