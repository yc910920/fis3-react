/**
 * @module counter
 * @author 小虎牙
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Progress, message } from 'antd';
import { Time } from '/src/components';
import { actionTypes } from '/src/constants';
import { counterAction } from '/src/actions';



// injection into components store
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


    componentDidMount() {
        this.props.fetchInterfaceTestAction(`?t=${Date.now()}`);
    }


    render() {
        const { props, methods } = this;
        return (
            <div>
                <div>
                    <Button size="small" onClick={props.addAction}> + </Button>&nbsp;&nbsp;
                    <Button size="small" onClick={props.subtractAction}> - </Button>&nbsp;&nbsp;
                </div>
                <br />
                <Progress type="circle" width={80} percent={props.count} />
                <Time />
            </div>
        );
    }
}