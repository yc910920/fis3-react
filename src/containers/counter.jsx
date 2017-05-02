/**
 * @file main.jsx
 * @desc 加减器
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Progress } from 'antd';



export default class Counter extends Component {

    state = {
        count: 55
    };


    get methods() {
        let that = this;
        let state = this.state;
        let setState = this.setState.bind(this);
        return {
            handleAdd() {
                setState({ count: ++state.count });
            },

            handleSubtract() {
                setState({ count: --state.count });
            }
        };   
    }


    render() {
        let { count } = this.state;
        let { handleAdd, handleSubtract } = this.methods;
        return (
            <div>
                <div>
                    <Button size="small" onClick={ handleAdd }> + </Button>&nbsp;&nbsp;
                    <Button size="small" onClick={ handleSubtract }> - </Button>&nbsp;&nbsp;
                </div>
                <Progress type="dashboard" percent={ count } />
            </div>
        );
    }

}