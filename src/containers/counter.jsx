/**
 * @file counter.jsx
 * @desc 加减器
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Button, Progress, message } from 'antd';


@connect(state => (state.counter), dispatch => {})
export default class Counter extends Component {
    componentDidMount() {
        console.log(this);
    }


    get methods() {
        let that = this;
        let state = this.state;
        let setState = this.setState.bind(this);
        return {
            handleAdd() {
                if ( state.count >= state.countMax ) return message.warn('别他妈的点了.');
                setState({ count: ++state.count });
            },

            handleSubtract() {
                if ( state.count <= state.countMin ) return message.warn('别他妈的点了.');
                setState({ count: --state.count });
            }
        };   
    }


    render() {
        let { handleAdd, handleSubtract } = this.methods;
        return (
            <div>
                <div>
                    <Button size="small" onClick={handleAdd}> + </Button>&nbsp;&nbsp;
                    <Button size="small" onClick={handleSubtract}> - </Button>&nbsp;&nbsp;
                </div>
                <br />
                <Progress type="circle" width={80} percent={this.props.count} />
            </div>
        );
    }
};