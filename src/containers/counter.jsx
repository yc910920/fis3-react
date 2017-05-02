/**
 * @file main.jsx
 * @desc 加减器
 * @email 99874405@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';



export default class Counter extends Component {

    state = {
        count: 0
    };


    get methods() {
        const that = this;
        return {
            handleAdd() {
                
            },

            handleSubtract() {

            }
        };   
    }


    render() {
        let { count } = this.state;
        return (
            <div>
                <div>
                    <Button size="small"> + </Button>&nbsp;
                    <Button size="small"> - </Button>&nbsp;
                </div>
                <div>
                    { count }
                </div>
            </div>
        );
    }

}