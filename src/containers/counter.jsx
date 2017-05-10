/**
 * @file counter.jsx
 * @desc 加减器
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from '/src/constants';
import { addAction, subtractAction } from '/src/actions/counter';
import { Button, Progress, message } from 'antd';



// connect: injection into components store
@connect(
    state => state.counter,
    dispatch => bindActionCreators((
        {
            addAction,
            subtractAction
        }
    ), dispatch)
)
export default class extends Component {

    get methods() {
        const that = this;
        const { props } = this;
        return {
            handleAdd() {
                if ( props.count >= props.countMax ) return message.warn('别他妈的点了.');
                props.addAction();
            },
            
            handleSubtract() {
                if ( props.count <= props.countMin ) return message.warn('别他妈的点了.');
                props.subtractAction();
            }
        };   
    }


    componentDidMount() {
    }


    render() {
        const { props, methods } = this;
        return (
            <div>
                <div>
                    <Button size="small" onClick={methods.handleAdd}> + </Button>&nbsp;&nbsp;
                    <Button size="small" onClick={methods.handleSubtract}> - </Button>&nbsp;&nbsp;
                </div>
                <br />
                <Progress type="circle" width={80} percent={props.count} />
            </div>
        );
    }
}