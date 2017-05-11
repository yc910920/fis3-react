/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Map } from 'immutable';



@connect(
    state => state.counter
)
export default class extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (
            Map(nextProps) !== Map(this.props) || Map(nextState) !== Map(this.state)
        );
    }


    componentDidMount() {
        
    }


    render() {
        const { props } = this;
        return (
            <div>
                {props.currentTime}
            </div>
        );
    }
}