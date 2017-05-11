/**
 * @module time
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Map } from 'immutable';



@connect(
    state => state.counter,
    dispatch => bindActionCreators(counterAction, dispatch)
)
export default class extends Component {
    
    get methods() {
        const that = this;
        const { props } = this;
        return {
            
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        return (
            Map(nextProps) !== Map(this.props) || Map(nextState) !== Map(this.state)
        );
    }


    componentDidMount() {

    }


    render() {
        const { props, methods } = this;
        return (
            <div>
                {props.currentTime}
            </div>
        );
    }
}